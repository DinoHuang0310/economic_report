<template>
  <div id="app">
    <Loading
      v-if="loadingOption"
      :loadingOption="loadingOption"
      :speed="500"
      v-on:loadingOpen="showContent"
      v-on:loadingDone="closeLoading"
    />
    <div id="navctr">
      <i class="fa fa-bars" @click="toggleNav" />
    </div>
    <div :class="showNav ? 'aside active' : 'aside'" @click="toggleNav">
      <div @click.stop>
        <header>
          <a href="https://www.businesstoday.com.tw/" target="_blank">
            <img class="businesstoday" src="./assets/images/businesstoday.svg" alt="今周刊" />
          </a>
        </header>
        <nav>
          <ul>
            <li :class="showPage === 1 ? 'active' : null" @click="showLoading(1)">台股可望奔萬七</li>
            <li :class="showPage === 2 ? 'active' : null" @click="showLoading(2)">2021經濟三趨勢</li>
            <li :class="showPage === 3 ? 'active' : null" @click="showLoading(3)">科技類股扮主流</li>
            <li :class="showPage === 4 ? 'active' : null" @click="showLoading(4)">房市熱度續升溫</li>
          </ul>
        </nav>
        <BtnetFooter :goTop="false" />
      </div>
    </div>
    <div class="main">
      <Article1 v-if="showPage === 1" v-on:promptCrtl="setPromptDisplay" :windowWidth="windowWidth" />
      <Article2 v-if="showPage === 2" v-on:promptCrtl="setPromptDisplay" :windowWidth="windowWidth" />
      <Article3 v-if="showPage === 3" v-on:promptCrtl="setPromptDisplay" :windowWidth="windowWidth" />
      <Article4 v-if="showPage === 4" v-on:promptCrtl="setPromptDisplay" :windowWidth="windowWidth" />
    </div>
    <FixedBackground />
    <transition name="fade">
      <div v-if="showprompt" class="prompt">
        <IcoScrollDown />
      </div>
    </transition>
  </div>
</template>

<script>
import Loading from './components/Loading.vue'
import BtnetFooter from './components/BtnetFooter'
import Article1 from './components/articles/Article1'
import Article2 from './components/articles/Article2'
import Article3 from './components/articles/Article3'
import Article4 from './components/articles/Article4'
import FixedBackground from './components/FixedBackground.vue'
import IcoScrollDown from './components/IcoScrollDown'

export default {
  name: 'App',
  components: {
    Loading,
    BtnetFooter,
    Article1,
    Article2,
    Article3,
    Article4,
    FixedBackground,
    IcoScrollDown
  },
  data() {
    return {
      showprompt: true,
      loadingOption: null,
      showPage: 0,
      showNav: false,
      isMobile: null,
      windowWidth: null
    }
  },
  methods: {
    showLoading(num) {
      if(num === this.showPage) return;
      this.loadingOption = {
        initial: false,
        contentNum: num
      };
    },
    showContent(num) {
      // console.log('置換content')
      this.showPage = num;
      this.showprompt = true;
      if(this.showNav) this.toggleNav();
    },
    closeLoading() {
      // console.log('關閉loading')
      this.loadingOption = null;
    },
    checkScreen() {
      const clientWidth = document.documentElement.clientWidth;
      if (clientWidth !== this.windowWidth) {
        this.isMobile = clientWidth > 768 ? false : true;
        this.showNav = this.isMobile ? false : true;
        this.windowWidth = clientWidth;
      }
    },
    toggleNav() {
      if (this.isMobile) {
        this.showNav = !this.showNav;
        this.fixScrollbar(this.showNav);
      }
    },
    fixScrollbar(action) {
      const el = document.getElementsByTagName("html")[0];
      action ? el.classList.add('fixed') : el.classList.remove('fixed');
    },
    setPromptDisplay(bool) {
      this.showprompt = bool;
    }
  },
  mounted() {
    this.loadingOption = {
      initial: true,
      contentNum: 1
    };
    this.checkScreen();
    window.addEventListener('resize', this.checkScreen);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreen);
  }
}
</script>

<style src='./assets/css/style.css'></style>
<style>
#app {
  position: relative;
  height: 100%;
  display: flex;
}
.aside {
  position: relative;
  width: 20%;
  background: white;
  border-right: solid 1px #ccc;
}
#navctr {
  display: none;
}
header {
  border-bottom: solid 1px #ccc;
  text-align: center;
  background: #1e3c72;
}
header a {
  display: inline-block;
  padding: 1em;
}
.businesstoday {
  display: block;
  width: 80px;
  margin: auto;
}
nav li {
  cursor: pointer;
  text-align: center;
  padding: 0.8em;
  transition: .5s;
}
nav li.active {
  background: #eee;
}
.main {
  width: 80%;
  overflow: hidden;
}
#app > .prompt {
  position: fixed;
  bottom: 0;
  right: 0;
  transform: translate(-25%, -25%);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (hover: hover) {
  nav li:hover {
    background: #eee;
  }
}

@media screen and (-ms-high-contrast: active),
(-ms-high-contrast: none) {
  nav li:hover {
    background: #eee;
  }
}

/* pad pro */
@media screen and (width: 1024px) and (orientation: portrait) {
  #app {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .aside {
    width: 100%;
  }
  .aside > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1e3c72;
    color: white;
  }
  header {
    border-bottom: none;
  }
  nav ul {
    display: flex;
  }
  nav li.active {
    background: rgba(255, 255, 255, .2);
  }
  .main {
    width: 100%;
    flex: 1;
  }
}

@media screen and (max-width: 812px) {
  .aside > div {
    position: relative;
    width: 40%;
    height: 100%;
    background: white;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
}

@media screen and (max-width: 768px) {
  .main {
    width: 100%;
  }
  .aside {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: translate(-100%, 0);
    background: rgba(0, 0, 0, .5);
    z-index: 99;
  }
  .aside > div {
    width: 40%;
    transition: 1s;
    transform: translate(-100%, 0);
  }
  .aside.active, .aside.active > div {
    transform: translate(0, 0);
  }
  #navctr {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;
  }
  #navctr i {
    display: block;
    font-size: 40px;
    text-align: center;
    padding: 4vw;
  }
}

@media screen and (max-width: 812px) and (orientation: landscape) {
  .aside {
    width: 35%;
  }
  .aside > div {
    width: 100%;
  }
}

@media screen and (max-width: 767px) and (orientation: landscape) {
  .aside {
    width: 100%;
  }
  .aside > div {
    width: 40%;
  }
}

@media screen and (max-width: 480px) {
  .businesstoday {
    width: 60px;
  }
  .aside > div {
    width: 75%;
  }
}

</style>
