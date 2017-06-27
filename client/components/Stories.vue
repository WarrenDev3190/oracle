<template lang="html">
  <div>
    <navigation/>
    <section class="nc-container">
      <header class="nc-header">
        <h3>Select the stories you'd like to share.</h3>
      </header>
      <md-progress md-indeterminate v-if="allArticles.length <= 0"></md-progress>
      <div class="nc-articles__container">
        <div class="nc-articles__controls" v-if="allArticles.length > 0">
          <md-input-container>
           <label for="selectedFilter">Select By Source</label>
           <md-select name="selectedFilter" v-model="selectedFilter">
              <md-option :value="group" :key="i" v-for="(group,i) in Object.keys(articlesGrouped)">{{group | idToTitle}}</md-option>
           </md-select>
         </md-input-container>
        </div>
        <div class="nc-articles nc-flex nc-flex--wrap">
          <article-card v-bind:article="article" :key="article.index" v-for="article in articlesGrouped[selectedFilter]"></article-card>
        </div>
      </div>
    </section>
  </div>
</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import cloudFunctions from '../services/cloudFunctions'
  import { idToTitle } from '../utils'
  import Navigation from './Navigation.vue'
  import ArticleCard from './ArticleCard.vue'
  export default {
    created() {
      cloudFunctions.get('/getNews')
      .then(articles => {
        return this.$store.commit('articles/RECEIVE_ARTICLES', articles)
      })
    },
    computed: {
    ...mapGetters('articles', ['allArticles', 'articles', 'articlesGrouped'])
    },
    components: {
      Navigation,
      ArticleCard
    },
    data() {
      return {
        selectedFilter: 'all'
      }
    },
    filters: {
      idToTitle
    }
  }
</script>
