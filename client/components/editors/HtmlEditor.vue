<template lang="html">

  <div class="nc-edit__component">
    <vue-editor :placeholder="title" class="nc-edit__html-input" :id="editorId" :editorToolbar="toolbarOptions" v-model="body" @input="updateInput"/>
  </div>

</template>
<script type="text/javascript">
  import { VueEditor } from 'vue2-editor'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      VueEditor
    },
    computed: {
      ...mapGetters('layouts', ['selectedLayout'])
    },
    watch: {
      value(newValue){
        this.body = newValue
      }
    },
    methods: {
      updateInput: function(){
        var modifiedBody = this.body
        var aTags = modifiedBody.match(/<a.+?<\/a>/g)
        var accentColor = this.selectedLayout[0]['template']['accentColor']
        if(aTags != null){
          aTags.forEach(aTag => {
            // If it doesn't already have a color, add in the accentColor
            if(aTag.indexOf('"color:') == -1 && aTag.indexOf(' color:') == -1){
              var newTag = aTag.replace(/<a /,'<a style="color:'+accentColor+' !important;" ')
              modifiedBody = modifiedBody.replace(aTag,newTag)
            // Otherwise, just add the important flag if it needs it
            }else if(aTag.indexOf('!important') == -1){
              //If color is first in the style list
              if(aTag.indexOf('style="color:') != -1){
                var currentColor = aTag.match(/style="color:(.+?);/)[1]
                var newTag = aTag.replace(/style="color:.+?;/, 'style="color: '+currentColor+' !important;')
              }
              else{
                var currentColor = aTag.match(/\scolor:(.+?);/)[1]
                var newTag = aTag.replace(/\scolor:.+?;/, " color: "+currentColor+" !important;")
              }
              modifiedBody = modifiedBody.replace(aTag,newTag)
            }
          })
        }
        this.$emit('input', modifiedBody)
      }
    },
    data: function(){
      return {
        body: this.value
      }
    },
    props: {
      title:{
        default:"",
        type:String
      },
      value: {
        default: "",
        type: String
      },
      toolbarOptions: {
        default: function(){
          return [
            ['bold', 'italic', 'underline', 'strike'],
            [{'color': []}, {'background': []}],
            ['link'],
            ['clean']
          ]
        },
        type: Array
      },
      editorId: {
        default: "HtmlEditor",
        type: String
      }
    }
  }
</script>
