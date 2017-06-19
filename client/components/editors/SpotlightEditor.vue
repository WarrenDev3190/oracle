<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'Header'" />
    <image-editor :title="'Image'" v-model="image" @input="updateInput" />
    <html-editor :title="'Text'" v-model="bodyHtml" @input="updateInput" />
  </div>

</template>
<script type="text/javascript">
  import EditorTitle from './EditorTitle.vue'
  import ImageEditor from './ImageEditor.vue'
  import HtmlEditor from './HtmlEditor.vue'
  export default {
    components: {
      EditorTitle,
      ImageEditor,
      HtmlEditor
    },
    computed: {
    },
    watch:{
      value(newValue){
        this.titleText = newValue.titleText
        this.image = newValue.image
        this.bodyHtml = newValue.bodyHtml
      }
    },
    methods: {
      updateInput: function(value){
        this.$emit('input', {
          titleText: this.titleText,
          image: this.image,
          bodyHtml: this.bodyHtml
        })
      }
    },
    data: function(){
      return {
        titleText: this.value.titleText,
        image: this.value.image,
        bodyHtml: this.value.bodyHtml
      }
    },
    props: {
      value: {
        default: {
          titleText: "",
          image: "",
          bodyHtml: ""
        },
        type: Object
      },
      editorId: {
        default: "SpotlightEditor",
        type: String
      }
    }
  }
</script>
