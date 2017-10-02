<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'Spotlight'" />
    <line-editor :title="'Title'" v-model="titleText" @input="updateInput" />
    <image-editor :title="'Image'" v-model="imageObj" @input="updateInput" />
    <html-editor :title="'Text'" v-model="bodyHtml" @input="updateInput" />
  </div>

</template>
<script type="text/javascript">
  import {mapGetters} from 'vuex';
  import EditorTitle from './EditorTitle.vue'
  import ImageEditor from './ImageEditor.vue'
  import HtmlEditor from './HtmlEditor.vue'
  import LineEditor from './LineEditor.vue'
  export default {
    components: {
      EditorTitle,
      ImageEditor,
      HtmlEditor,
      LineEditor
    },
    computed: {
      imageObj: {
        get: function(){
          return {
            imageUrl: this.image,
            imageOn: this.imageOn
          }
        },
        set: function(newValue){
          this.image = newValue.imageUrl
          this.imageOn = newValue.imageOn
        }
      }
    },
    watch:{
      value(newValue){
        this.titleText = newValue.titleText
        this.image = newValue.image
        this.imageOn = newValue.imageOn
        this.bodyHtml = newValue.bodyHtml
      }
    },
    methods: {
      updateInput: function(value){
        this.$emit('input', {
          titleText: this.titleText,
          image: this.image,
          imageOn: this.imageOn,
          bodyHtml: this.bodyHtml
        })
      }
    },
    data: function(){
      return {
        ...mapGetters('layouts',['selectedLayout']),
        titleText: this.value.titleText,
        image: this.value.image,
        imageOn: this.value.imageOn,
        bodyHtml: this.value.bodyHtml
      }
    },
    props: {
      value: {
        default: {
          titleText: "",
          image: "",
          imageOn: true,
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
