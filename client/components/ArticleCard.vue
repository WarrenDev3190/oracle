<template lang="html">
  <div class="nc-article-card"
       :class="{'nc-article-card--selected': article.selected}"
       :style="{'background-image': `url(${article.urlToImage})`}"
       @click="handleArticleClick">
       <img src="../../static/imgs/newscart-icon.png" alt="recommended" v-if="isRecommended" class="nc-recommended-flag">
       <div class="nc-article-card__contents">
         <h3><a :href="article.url" target="_blank">{{article.title}}</a></h3>
         <section class="nc-article-card__details nc-flex">
           <p>{{article.source}}</p><p>{{article.publishedAt}}</p>
         </section>
       </div>
  </div>
</template>
<script>
export default {
  props: ['article'],
  computed:{
    isRecommended: function(article) {
    return this.article.hasOwnProperty("recommended") && this.article.recommended;
    }
  },
  methods: {
    handleArticleClick() {
      this.$store.commit('articles/TOGGLE_ARTICLE_SELECT', this.article.index)
    }
  }
}
</script>
