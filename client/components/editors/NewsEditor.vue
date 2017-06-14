<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'News'" />
    <title-groups-editor v-model="this.newsGroups" :title="'News Groups (select a group to edit)'" @newgroup="newGroup" @groupselected="groupSelected" />
    <articles-editor v-if="selectedGroup != null" class="nc-edit__fill-height" v-model="this.newsGroups[selectedGroup].articles" :title="newsGroups[selectedGroup].title" />
  </div>

</template>
<script type="text/javascript">
  import EditorTitle from './EditorTitle.vue'
  import TitleGroupsEditor from './TitleGroupsEditor.vue'
  import ArticlesEditor from './ArticlesEditor.vue'
  export default {
    components: {
      EditorTitle,
      TitleGroupsEditor,
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
      newGroup: function(index) {
        this.newsGroups[index]["articles"] = [{
          "author": "Fake Author",
          "title": "Placeholder Article",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                        "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                        "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                        "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                        "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                        "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
          "url": "https://www.google.com",
          "urlToImage": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time_placeholder.jpeg?alt=media&token=8a7587e8-225c-466a-ab5d-29620567d952",
          "publishedAt": "1990-01-01T00:00:00Z",
          "source": "fake-news-source",
          "index": -1,
          "selected": false
        }]
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
