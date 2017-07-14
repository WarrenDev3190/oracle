<template lang="html">
  <div class="nc-article-card-mini"
       :style="{'background-image': `url(${article.urlToImage})`}">
       <div class="nc-article-card-mini__contents">
         <img src="../../static/imgs/newscart-icon.png" alt="recommended" v-if="isRecommended" class="nc-recommended-flag-mini">
         <h3><a :href="article.url" target="_blank">{{article.title}}</a></h3>
         <section class="nc-article-card-mini__details nc-flex">
           <p>{{article.source}}</p><p>{{article.publishedAt}}</p>
         </section>
       </div>
  </div>
</template>
<script>
export default {
  props: ['article'],
  methods: {
    isRecommended: function(article) {
      return article.hasOwnProperty("recommended") && article.recommended;
    }
  }
}
</script>
