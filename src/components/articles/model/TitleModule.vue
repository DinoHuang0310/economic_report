<template>
  <div>
    <div class="title-module">
      <div class="title-top">
        <h1 v-if="title">{{ title }}</h1>
      </div>
      <div class="subtitle">
        <p v-for="list in subtitle" :key="list.index" v-html="list" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: Array,
      required: false
    }
  }
}
</script>

<style>
.title-module {
  height: 100%;
  border-right: solid 1px #ccc;
}
.title-top {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 40%;
  border-bottom: solid 1px #ccc;
  padding-left: 12vw;
}
.content-box section>*:first-child .title-top::after {
  content: '';
  position: absolute;
  width: 50%;
  bottom: -1px;
  left: 0;
  transform: translate(-100%, 0);
  border-bottom: solid 1px #ccc;
}
.subtitle {
  position: relative;
  height: 55%;
  padding-left: 12vw;
  padding-right: 8vw;
  top: 5%;
}
.subtitle p {
  font-size: 3vw;
  font-family: 'Noto Serif TC', 'Noto Sans TC', serif;
  font-weight: 900;
  letter-spacing: 0.2em;
  margin-left: 2.6666em;
  margin-bottom: 0.3em;
  color: #373737;
}
.subtitle p span {
  margin-right: 1em;
}
.subtitle p mark {
  color: #c23531;
  text-decoration: underline;
}
.subtitle p:nth-child(2) {
  margin-left: 4.3333em;
}
.subtitle p:nth-child(3) {
  margin-left: 6em;
}

@media screen and (max-width: 480px) {
  .subtitle p {
    font-size: 6vw;
  }
}

</style>
