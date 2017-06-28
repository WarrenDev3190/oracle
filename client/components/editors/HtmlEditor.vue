<template lang="html">

  <div class="nc-edit__component">
    <vue-editor :placeholder="title" class="nc-edit__html-input" :id="editorId" :editorToolbar="toolbarOptions" v-model="body" @input="updateInput"/>
  </div>

</template>
<script type="text/javascript">
  import { VueEditor } from 'vue2-editor'
  export default {
    components: {
      VueEditor
    },
    computed: {
    },
    watch: {
      value(newValue){
        this.body = newValue
      }
    },
    methods: {
      updateInput: function(){
        this.$emit('input', this.body)
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
