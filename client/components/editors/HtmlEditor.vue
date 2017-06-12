<template lang="html">

  <div class="nc-edit__component">
    <div class="nc-edit__subtitle">{{title}}</div>
    <vue-editor class="nc-edit__html-input" ref="htmlEdit" :editorToolbar="toolbarOptions" :value="value" @input="updateInput"/>
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
    methods: {
      updateInput: function(value){
        this.$emit('input', value)
      }
    },
    data: function(){
      return {}
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
            [{'size': []}, {'color': []}, {'background': []}],
            ['link'],
            ['clean']
          ]
        },
        type: Array
      }
    }
  }
</script>
