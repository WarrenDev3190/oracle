<template lang="html">
  <div class="nc-article-card-mini"
       :style="{'background-image': `url(${article.urlToImage})`}">
       <div class="nc-article-card-mini__contents">
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
  }
}
</script>
