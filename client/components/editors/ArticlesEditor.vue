<template lang="html">

  <div class="nc-edit__component">
    <div class="nc-edit__columns">
      <div class="nc-edit__columns__left">
        <div class="nc-edit__subtitle">{{title}}</div>
        <article-mini v-for="(article, index) in articles" :key="'shownarticle-' + index" :article="article" />
      </div>
      <div class="nc-edit__columns__right">
        <div class="nc-edit__subtitle">All Stories</div>
        <article-mini v-for="(article, index) in selectedArticles" :key="'allarticle-' + index" :article="article" />
      </div>
    </div>
  </div>

</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import ArticleMini from '../ArticleMini.vue'
  export default {
    components: {
      ArticleMini
    },
    computed: {
      ...mapGetters('articles', ['selectedArticles'])
    },
    methods: {
      updateInput: function(){
        this.$emit('input', this.articles)
      }
    },
    watch: {
      value(newValue){
        this.articles = newValue
      }
    },
    data: function(){
      return {
        articles: this.value
      }
    },
    props: {
      title:{
        default: "",
        type:String
      },
      value: {
        default: function(){
          return []
        },
        type: Array
      },
      editorId: {
        default: "ArticlesEditor",
        type: String
      }
    }
  }
</script>
