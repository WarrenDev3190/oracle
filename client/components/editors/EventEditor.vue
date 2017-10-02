<template lang="html">

  <div class="nc-edit__fill-container">
    <image-editor :title="'Image'" v-model="imageObj" @input="updateInput"/>
    <line-editor :title="'Title'" v-model="title" @input="updateInput" />
    <line-editor :title="'Date'" v-model="date" @input="updateInput" />
    <line-editor :title="'URL Link'" v-model="linkUrl" @input="updateInput" />
    <line-editor :title="'Link Text'" v-model="linkText" @input="updateInput" />
    <html-editor :editorId="editorId" :title="'Description'" v-model="description" @input="updateInput" />
  </div>

</template>
<script type="text/javascript">
  import ImageEditor from './ImageEditor.vue'
  import LineEditor from './LineEditor.vue'
  import HtmlEditor from './HtmlEditor.vue'

  export default {
    components: {
      ImageEditor,
      LineEditor,
      HtmlEditor
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
        this.image = newValue.image,
        this.imageOn = newValue.imageOn,
        this.title = newValue.title,
        this.date = newValue.date,
        this.linkUrl = newValue.linkUrl,
        this.linkText = newValue.linkText,
        this.description = newValue.description
      }
    },
    methods: {
      updateInput: function(value){
        this.description = this.description.replace("<p>","").replace("</p>","");

        this.$emit('input', {
          image: this.image,
          imageOn: this.imageOn,
          title: this.title,
          date: this.date,
          linkUrl: this.linkUrl,
          linkText: this.linkText,
          description: this.description
        })
      }
    },
    data: function(){
      return {
        image: this.value.image,
        imageOn: this.value.imageOn,
        title: this.value.title,
        date: this.value.date,
        linkUrl: this.value.linkUrl,
        linkText: this.value.linkText,
        description: this.value.description
      }
    },
    props: {
      index: Number,
      value: {
        default: function(){
          return {
            image: "",
            title: "",
            date: "",
            linkUrl: "",
            linkText: "",
            description: "",
            imageOn: false
          }
        },
        type: Object
      },
      editorId: {
        default: "EventEditor",
        type: String
      }
    }
  }
</script>
