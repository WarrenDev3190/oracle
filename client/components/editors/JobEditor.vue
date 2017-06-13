<template lang="html">

  <div class="nc-edit__fill-container">
    <line-editor :title="'Title'" v-model="title" @input="updateInput" />
    <line-editor :title="'Location'" v-model="location" @input="updateInput" />
    <line-editor :title="'URL Link'" v-model="link" @input="updateInput" />
    <html-editor :editorId="editorId" :title="'Description'" v-model="description" @input="updateInput" />
  </div>

</template>
<script type="text/javascript">
  import LineEditor from './LineEditor.vue'
  import HtmlEditor from './HtmlEditor.vue'
  export default {
    components: {
      LineEditor,
      HtmlEditor
    },
    computed: {
    },
    watch:{
      value(newValue){
        this.title = newValue.title,
        this.location = newValue.location,
        this.link = newValue.link,
        this.description = newValue.description
      }
    },
    methods: {
      updateInput: function(value){
        this.$emit('input', {
          title: this.title,
          location: this.location,
          link: this.link,
          description: this.description
        })
      }
    },
    data: function(){
      return {
        title: this.value.title,
        location: this.value.location,
        link: this.value.link,
        description: this.value.description
      }
    },
    props: {
      value: {
        default: function(){
          return {
            title: "",
            location: "",
            link: "",
            description: ""
          }
        },
        type: Object
      },
      editorId: {
        default: "JobEditor",
        type: String
      }
    }
  }
</script>
