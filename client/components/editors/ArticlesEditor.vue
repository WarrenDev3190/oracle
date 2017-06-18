<template lang="html">

  <div class="nc-edit__component">
    <div class="nc-edit__columns">
      <div class="nc-edit__columns__left">
        <div class="nc-edit__subtitle">{{title}}</div>
        <draggable class="nc-draggable" :list="articles" :options="{group: 'articles', animation: '150'}">
          <article-mini v-for="(article, index) in articles" :key="'shownarticle-' + index" :article="article" />
        </draggable>
      </div>
      <div class="nc-edit__columns__right">
        <div class="nc-edit__subtitle">All Stories</div>
        <draggable class="nc-draggable" :list="getAllSelectedArticles" :options="{group: 'articles', animation: '150'}"  @add="removePlaceholders">
          <article-mini v-for="(article, index) in getAllSelectedArticles" :key="'allarticle-' + index" :article="article" />
        </draggable>
      </div>
    </div>
  </div>

</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import ArticleMini from '../ArticleMini.vue'
  import draggable from 'vuedraggable'
  export default {
    components: {
      ArticleMini,
      draggable
    },
    computed: {
      getAllSelectedArticles: function() {
        if(this.allSelectedArticles == null) {
          this.allSelectedArticles = this.selectedArticles.slice()
        }
        return this.allSelectedArticles
      },
      ...mapGetters('articles', ['selectedArticles'])
    },
    methods: {
      updateInput: function(){
        this.$emit('input', this.articles)
      },
      removePlaceholders: function(addObj){
        if(this.allSelectedArticles[addObj.newIndex].index < 0){
          this.allSelectedArticles.splice(addObj.newIndex, 1)
        }
      }
    },
    watch: {
      value(newValue){
        this.articles = newValue
      }
    },
    data: function(){
      return {
        articles: this.value,
        allSelectedArticles: null
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
