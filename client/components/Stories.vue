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
          <div class="nc-articles__controls__left">
            <md-input-container>
               <label for="sourceFilter">Select By Source</label>
               <md-select name="sourceFilter" v-model="sourceFilter">
                  <md-option :value="group" :key="i" v-for="(group,i) in Object.keys(articlesSourceGrouped)">{{group | idToTitle}}</md-option>
               </md-select>
            </md-input-container>
          </div>
          <div class="nc-articles__controls__right">
            <md-input-container>
                <label for="dateFilter">Select By Date</label>
                <md-select name="dateFilter" v-model="dateFilter">
                   <md-option :value="filterDate" :key="i" v-for="(filterDate,i) in sortedFilterDate(articlesFilterDateGrouped)">{{filterDate | idToTitle}}</md-option>
                </md-select>
            </md-input-container>
          </div>
        </div>
        <div class="nc-articles nc-flex nc-flex--wrap">
          <article-card v-bind:article="article" :key="article.index" v-for="article in filteredArticles(allArticles, sourceFilter, dateFilter)"></article-card>
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
    beforeMount() {
      cloudFunctions.get('/getNews')
      .then(articles => {
        return this.$store.commit('articles/RECEIVE_ARTICLES', articles)
      })
    },
    computed: {
    ...mapGetters('articles', ['allArticles', 'articles', 'articlesSourceGrouped', 'articlesFilterDateGrouped'])
    },
    methods: {
      sortedFilterDate:  function (articles) {
        var thing = Object.keys(articles).sort(function(a,b) {
            //Sort so all is at top, all other non-dates are next, and dates are below most recent to least recent
            var dateA = new Date(a)
            var dateB = new Date(b)
            if(a == "all"){
              return false
            }
            else if(dateA == null || isNaN(dateA)){
              return false
            }
            else if(dateB == null || isNaN(dateB)){
              return true
            }
            else {
              return dateA < dateB
            }
          }
        ).map(function(dateS){
          //Make the dates pretty
          var prefixD = dateS.substring(0, dateS.indexOf('T'))
          if(prefixD.trim() == ""){
            return dateS
          }
          else{
            var pieces = prefixD.split('-')
            return pieces[1] + "/" + pieces[2] + "/" + pieces[0]
          }
        })
        return thing
      },
      filteredArticles: function(articles, source, filterDate) {
        //Make the pretty date normal
        var pieces = filterDate.split('/')
        if(pieces.length > 1){
          var date = pieces[2] + "-" + pieces[0] + "-" + pieces[1] + "T00:00:00Z"
        }
        else{
          var date = pieces
        }
        //Filter by both source and date
        return articles.filter(function(a) {
          return (source == "all" || a.source == source) && (date == "all" || a.filterDate == date)
        })
      }
    },
    components: {
      Navigation,
      ArticleCard
    },
    data() {
      return {
        sourceFilter: 'all',
        dateFilter: 'all'
      }
    },
    filters: {
      idToTitle
    }
  }
</script>
