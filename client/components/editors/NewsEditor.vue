<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'News'" />
    <news-groups-editor v-model="this.newsGroups" :title="'News Groups (select a group to edit)'" @groupselected="groupSelected" />
    <articles-editor v-if="selectedGroup != null" class="nc-edit__fill-height" v-model="newsGroups[selectedGroup].articles" :title="newsGroups[selectedGroup].title" />
  </div>

</template>
<script type="text/javascript">
  import EditorTitle from './EditorTitle.vue'
  import NewsGroupsEditor from './NewsGroupsEditor.vue'
  import ArticlesEditor from './ArticlesEditor.vue'
  export default {
    components: {
      EditorTitle,
      NewsGroupsEditor,
      ArticlesEditor
    },
    computed: {
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
