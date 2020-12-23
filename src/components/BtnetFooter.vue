<template>
  <footer class="btnet-footer">
    <div class="footer-box">
      <p>
        <small>內容監製: 今周刊</small>
        <br>
        <small>專題製作: 今周刊 編輯部、數位內容部</small>
      </p>
      <p>
        <small>數位Copyright © {{ year }} 今周刊.All rights reserved. 版權所有，禁止擅自轉貼節錄</small>
      </p>
      <ul>
        <li>
          <a class="facebook-share" href="http://www.facebook.com/share.php?u=https://www.businesstoday.com.tw/topic/2020/economic_report" target="_blank">
            <img src="../assets/images/ico-facebook.svg" alt="分享到facebook" />
          </a>
        </li>
        <li>
          <a class="line-share" href="https://social-plugins.line.me/lineit/share?url=https://www.businesstoday.com.tw/topic/2020/economic_report" target="_blank">
            <img src="../assets/images/ico-line.svg" alt="分享到line" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    goTop: {
      type: Boolean,
      default: true
    },
  },
  data: function() {
    return {
      year: new Date().getFullYear(),
      showButton: false,
    }
  },
  created() {
    if(this.goTop) window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    backTop (duration) {
      if (document.scrollingElement.scrollTop === 0) return;
      const totalScrollDistance = document.scrollingElement.scrollTop;
      let scrollY = totalScrollDistance, oldTimestamp = null;

      function step (newTimestamp) {
        if (oldTimestamp !== null) {
          scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
          if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
          document.scrollingElement.scrollTop = scrollY;
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    },
    handleScroll () {
      if (window.scrollY > (window.innerHeight / 2)) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    }
  },
  destroyed () {
    if(this.goTop) window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
.btnet-footer {
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}
footer p {
  letter-spacing: 0;
}
.footer-box {
  width: 90%;
  margin: 1em auto;
}
.footer-box > p span {
  display: inline-block;
  border: solid 1px white;
  letter-spacing: 4px;
  text-indent: 4px;
  margin-top: 2em;
  padding: 0.4em 0.8em;
}
.footer-box ul {
  display: flex;
  justify-content: center;
  margin: 1em 0;
}
.footer-box ul li {
  margin: 0 0.5em;
}
.footer-box ul li img,
.footer-box ul li a {
  display: block;
  width: 50px;
}
.facebook-share {
  background: #4267b2;
}
.line-share {
  background: #00c200;
}
.btnet-footer small {
  font-size: 0.9em;
}
.fixed-side {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  z-index: 98;
}
.btnet-footer button {
  display: block;
  padding: 0;
  margin: 0 auto;
  border: none;
  font-size: 50px;
  color: #f09819;
  background: white;
  border-radius: 50%;
  border: solid 1px white;
}
.btnet-footer button i {
  display: block;
  opacity: 1;
  transition: .5s;
}
.fixed-side a {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  padding: 0.8em 0.8em 0.8em 0.4em;
  margin: 0.5em auto;
  border: solid 1px white;
  border-right: none;
  background: #f09819;
  opacity: 1;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  letter-spacing: 0.2em;
  writing-mode: vertical-lr;
  -webkit-writing-mode: vertical-lr;
  transition: .5s;
}
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: .5s
}
.v-leave-to {
  opacity: 0;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: .5s
}
.v-enter-to {
  opacity: 1;
}

@media (hover: hover) {
  .btnet-footer button i:hover,
  .fixed-side a:hover {
    opacity: .7;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .btnet-footer button i:hover,
  .fixed-side a:hover {
    opacity: .7;
  }
}

/* pad pro */
@media screen and (width: 1024px) and (orientation: portrait) {
  .btnet-footer {
    position: relative;
    width: auto;
  }
  .footer-box p {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .btnet-footer button {
    font-size: 40px;
  }
  .fixed-side a {
    font-size: 17px;
  }
}

@media screen and (max-width: 812px) and (orientation: landscape) {
  .btnet-footer {
    position: relative;
    margin-top: 5em;
  }
}

@media screen and (max-width: 480px) {
  .btnet-footer button {
    font-size: 40px;
    right: 1rem;
    bottom: 0.5rem;
  }
  .fixed-side a {
    font-size: 15px;
  }
  footer p {
    margin-bottom: 0.5em;
  }
}

</style>
