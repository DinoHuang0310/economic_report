<template>
  <div class="article-card">
    <article>
      <h2><span>{{ article.title }}</span></h2>
      <p><span>{{ article.description }}</span></p>
      <a :href="article.url" target="_blank" class="article-button">詳全文</a>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: false
    }
  }
}
</script>

<style>
.article-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  border-bottom: solid 1px #ccc;
  padding: 2em;
}
.article-card:nth-child(even) {
  border-bottom: none;
}
.article-card article {
  white-space: normal;
}
.article-card h2 span {
  display: block;
  display: -webkit-box;
  font-size: 30px;
  line-height: 1.5;
  max-height: 90px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.article-card p span {
  display: block;
  display: -webkit-box;
  font-size: 20px;
  line-height: 1.5;
  max-height: 90px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media screen and (max-width: 768px) and (orientation: landscape),
screen and (width: 812px) and (orientation: landscape) {
  .article-card {
    height: 100%;
    width: 50%;
    border-bottom: none;
    border-right: solid 1px #ccc;
  }
  .article-card:last-child {
    border-right: none;
  }
  .article-card h2 span {
    font-size: 20px;
    max-height: 60px;
  }
  .article-card p span {
    font-size: 15px;
    max-height: 67.5px;
  }
}

@media screen and (max-width: 480px) {
  .article-card h2 span {
    font-size: 24px;
    max-height: 72px;
  }
  .article-card p span {
    font-size: 16px;
    max-height: 72px;
  }
}

@media screen and (max-width: 375px) {
  .article-card h2 {
    margin-bottom: 0.3em;
  }
  .article-card h2 span {
    font-size: 20px;
    max-height: 60px;
  }
  .article-card p span {
    font-size: 15px;
    max-height: 67.5px;
  }
}

@media screen and (max-width: 320px) {
  .article-card h2 span {
    font-size: 18px;
    line-height: 1.4;
    max-height: 50.4px;
  }
  .article-card p span {
    font-size: 14px;
    max-height: 63px;
  }
}

</style>
