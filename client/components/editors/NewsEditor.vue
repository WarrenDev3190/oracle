<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'News'" />
    <line-editor :title="'Title'" v-model="titleText" @input="updateInput" />
    <news-groups-editor 
      v-model="this.newsGroups" 
      :title="'News Groups (select a group to edit)'" 
      @groupselected="groupSelected" 
    />
    <articles-editor 
      v-if="selectedGroup != null" 
      class="nc-edit__fill-height" 
      v-model="newsGroups[selectedGroup].articles" 
      :title="newsGroups[selectedGroup].title" 
      :filterArticles="usedArticles" 
      :allArticles="selectedArticles" 
    />
  </div>

</template>
 <script type="text/javascript">
  import { mapGetters } from 'vuex'
  import EditorTitle from './EditorTitle.vue'
  import NewsGroupsEditor from './NewsGroupsEditor.vue'
  import LineEditor from './LineEditor.vue'
  import ArticlesEditor from './ArticlesEditor.vue'
  export default {
    components: {
      EditorTitle,
      NewsGroupsEditor,
      ArticlesEditor,
      LineEditor
    },
    computed: {
      usedArticles: function(){
        var articles = []
        for(var i=0; i < this.newsGroups.length; i++){
          articles = articles.concat(this.newsGroups[i].articles)
        }
        return articles
      },
      ...mapGetters('articles', ['selectedArticles'])
    },
    watch:{
      value(newValue){
        this.titleText = newValue.titleText,
        this.newsGroups = newValue.newsGroups
      }
    },
    methods: {
      updateInput: function(value){
        this.$emit('input', {
          titleText: this.titleText,
          newsGroups: this.newsGroups
        })
      },
      groupSelected: function(index) {
        this.selectedGroup = index
      }
    },
    data: function(){
      return {
        titleText: this.value.titleText,
        newsGroups: this.value.newsGroups,
        selectedGroup: null
      }
    },
    props: {
      value: {
        default: function(){
          return {
            titleText: "",
            newsGroups: []
          }
        },
        type:Object
      },
      editorId: {
        default: "NewsEditor",
        type:String
      }
    }
  }
</script>
