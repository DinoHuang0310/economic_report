<template>
  <canvas id="background" ref="background" />
</template>

<script>
export default {
  data() {
    return {
      mouse: {x: 0, y: 0}
    }
  },
  methods: {
    onMouseMove(e) {
      this.mouse = {
        x: e.clientX,
        y: e.clientY
      };
    },
    setCanvas() {
      const self = this;
      const NUM_PARTICLES = window.innerWidth > 480 ? 80 : 40;
      const MAX_SPEED = 0.1;
      let particles = [];
      const w = window.innerWidth;
      const h = window.innerHeight;
      const canvasParticles = this.$refs.background;
      const ctxParticles = canvasParticles.getContext('2d');

      init();

      function init() {
        initStage();
        run();
      }

      function initStage() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        canvasParticles.setAttribute('width', w);
        canvasParticles.setAttribute('height', h);
        initParticles();
      }

      function initParticles() {
        particles = [];
        let i = NUM_PARTICLES;
        let p;
        let x;
        let y;
        let velX;
        let velY;
        let r;

        while (i--) {
          x = randomBetween(0, w);
          y = randomBetween(0, h);
          r = randomBetween(1, 3);
          velX = randomBetween(-MAX_SPEED, MAX_SPEED);
          velY = randomBetween(-MAX_SPEED, MAX_SPEED);
          p = new Particle(x, y, velX, velY, r);
          particles.push(p);
        }
      }

      function Particle(x, y, velX, velY, r) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.radius = r;

        this.update = function () {
          this.x += this.velX;
          this.y += this.velY;
          this.x = Math.round(this.x);
          this.y = Math.round(this.y);
          if (this.x <= 0 || this.x >= w) {
            this.velX = -this.velX;
          }
          if (this.y <= 0 || this.y >= h) {
            this.velY = -this.velY;
          }
        };

        this.distanceTo = function(p) {
          let dx = p.x - this.x;
          let dy = p.y - this.y;
          return Math.sqrt(dx * dx + dy * dy);
        };

        this.getIndex = function () {
          return ((this.x | 0) + (this.y | 0) * w) * 4;
        };
      }

      function run() {
        window.requestAnimationFrame(run);
        ctxParticles.clearRect(0, 0, w, h);
        let i = particles.length;
        let distance;
        let distanceMouse;
        let q;
        let p1;
        let p2;

        while (i--) {
          p1 = particles[i];
          p1.update();
          ctxParticles.beginPath();
          ctxParticles.fillStyle = 'rgba(0, 0, 0, 0.2)';
          ctxParticles.arc(p1.x, p1.y, p1.radius, 0, 2 * Math.PI, false);
          ctxParticles.fill();
          ctxParticles.closePath();
          distanceMouse = p1.distanceTo(self.mouse);

          if (distanceMouse <= w * 0.2) {
            connect(p1, self.mouse);
          }

          for (q = 0; q < particles.length; q++) {
            p2 = particles[q];
            distance = p2.distanceTo(p1);
            if (p2 !== p1 && distance <= w * 0.05) {
              connect(p1, p2);
            }
          }
        }
      }

      function connect(p1, p2) {
        ctxParticles.beginPath();
        ctxParticles.strokeStyle = 'rgba(0, 0, 0, 0.1)';
        ctxParticles.moveTo(p1.x, p1.y);
        ctxParticles.lineTo(p2.x, p2.y);
        ctxParticles.stroke();
        ctxParticles.closePath();
      }

      function randomBetween(min, max, round) {
        let rand = Math.random() * (max - min + 1) + min;
        if (round === true) {
          return Math.floor(rand);
        } else {
          return rand;
        }
      }
    }
  },
  mounted() {
    this.setCanvas();
    window.addEventListener('resize', this.setCanvas);
    document.addEventListener('mousemove', this.onMouseMove);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setCanvas);
    document.removeEventListener('mousemove', this.onMouseMove);
  }
}
</script>

<style>
#background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: white;
  z-index: -1;
}
</style>
