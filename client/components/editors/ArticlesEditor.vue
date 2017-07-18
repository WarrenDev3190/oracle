<template lang="html">

  <div>

    <div class="nc-edit__component">
      <div class="nc-edit__columns">
        <div class="nc-edit__columns__left">
          <div class="nc-edit__subtitle">{{title}}</div>
          <draggable class="nc-draggable" :list="articles" :options="{group: 'articles', animation: '150'}">
            <article-mini 
              v-for="(article, index) in articles" 
              :class="{'nc-edit__selected': editArticle != null && article.index == editArticle.index}"
              :key="'shownarticle-' + index" 
              :article="article" 
               @click.native="selectEditArticle(article)"
            />
          </draggable>
        </div>
        <div class="nc-edit__columns__right">
          <div class="nc-edit__subtitle">All Stories</div>
          <draggable class="nc-draggable" :list="getAllSelectedArticles" :options="{group: 'articles', animation: '150'}"  @add="removePlaceholders">
            <article-mini 
              v-for="(article, index) in getAllSelectedArticles" 
              :key="'allarticle-' + index" 
              :article="article" 
            />
          </draggable>
        </div>
      </div>
    </div>

    <div v-if="editArticle != null" class="nc-edit__fill-container">
        <div class="nc-edit__subtitle">Article</div>
        <line-editor :title="'Title'" v-model="editArticle.titleAlt" @input="updateInput"/>
        <line-editor :title="'Link'" v-model="editArticle.urlAlt" @input="updateInput" />
        <html-editor :editorId="editorId" :title="'Description'" v-model="editArticle.descriptionAlt" @input="updateInput"/>
    </div>

  </div>

</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import ArticleMini from '../ArticleMini.vue'
  import LineEditor from './LineEditor.vue'
  import HtmlEditor from './HtmlEditor.vue'
  import draggable from 'vuedraggable'
  export default {
    components: {
      ArticleMini,
      LineEditor,
      HtmlEditor,
      draggable
    },
    computed: {
      getAllSelectedArticles: function() {
        if(this.allSelectedArticles == null) {
          this.allSelectedArticles = this.selectedArticles.slice()
        }
        if(this.selectedArticles == []){
          this.selectedArticles = this.allSelectedArticles
        }

        for(var i=0; i < this.selectedArticles.length; i++){
          var selectedArticle = this.selectedArticles[i]
          var foundCount = this.articles.reduce(function(count, article){
            return count + (article.index == selectedArticle.index)
          }.bind(this), 0)
          if(foundCount > 0){
            this.selectedArticles.splice(i, 1)
          }
        }

        return this.selectedArticles
      },
      ...mapGetters('articles', ['selectedArticles'])
    },
    watch: {
      value(newValue) {
        this.articles = newValue

        if(this.editArticle != null){
          var foundCount = this.articles.reduce(function(count, article){
            return count + (article.index == this.editArticle.index)
          }.bind(this), 0)
          if(foundCount < 1){
            this.editArticle = null
          }
        }
      }
    },
    methods: {
      updateInput: function(value){
        for(var i=0; i < this.articles.length; i++){
          var article = this.articles[i]
          if(article.titleAlt == ""){
            article.titleAlt = article.title
          }
          if(article.urlAlt == ""){
            article.urlAlt = article.url
          }
          if(article.descriptionAlt.replace(/\<p.+?\>/i, '').replace(/<\/p\>/i, '').replace(/\<br\>/i, '') == ""){
            article.descriptionAlt = article.description
          }
          article.descriptionAlt = article.descriptionAlt.replace(/^\<p.*?\>/, '<p style="margin-top:0px;margin-bottom:0px;">')
        }
        this.$emit('input', this.articles)
      },
      removePlaceholders: function(addObj){
        var allCount = this.allSelectedArticles.reduce(function(count, article) {
          return count + (article.index == this.selectedArticles[addObj.newIndex].index)
        }.bind(this), 0)
        var selectedCount = this.selectedArticles.reduce(function(count, article) {
          return count + (article.index == this.selectedArticles[addObj.newIndex].index)
        }.bind(this), 0)

        if(selectedCount > 1 || allCount < 1 || this.selectedArticles[addObj.newIndex].index < 0){
          this.selectedArticles.splice(addObj.newIndex, 1)
        }
      },
      selectEditArticle: function(article) {
        if(article != null && article.index >= 0){
          this.editArticle = article
        }
        else{
          this.editArticle = null
        }
      }
    },
    data: function(){
      return {
        articles: this.value,
        allSelectedArticles: null,
        editArticle: null
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
