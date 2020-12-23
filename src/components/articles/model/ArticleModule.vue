<template>
  <div>
    <div class="model-box">
      <div class="wrapper articles">
        <div>
          <p v-for="list in articles" :key="list.index">{{ list }}</p>
          <a v-if="url" class="article-button" :href="url" target="_blank">詳全文</a>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      required: false
    }
  }
}
</script>

<style>
.articles {
  height: 100%;
}
.articles p {
  white-space: normal;
  line-height: 1.6;
}
.wrapper.articles > div::first-letter {
  font-size: 1.5em;
}

@media screen and (max-width: 480px) {
  .articles p {
    line-height: 1.4;
  }
}

</style>
