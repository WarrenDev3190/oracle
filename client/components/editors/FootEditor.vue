<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'Footer'" />
    <line-editor :title="'Email'" v-model="email" @input="updateInput" />
    <html-editor :title="'Footer Body'" v-model="footerHtml" @input="updateInput" />
  </div>

</template>
<script type="text/javascript">
  import EditorTitle from './EditorTitle.vue'
  import LineEditor from './LineEditor.vue'
  import HtmlEditor from './HtmlEditor.vue'
  export default {
    components: {
      EditorTitle,
      LineEditor,
      HtmlEditor
    },
    computed: {
    },
    watch:{
      value(newValue){
        this.email = newValue.email,
        this.footerHtml = newValue.footerHtml
      }
    },
    methods: {
      updateInput: function(value){
        this.$emit('input', {
          email: this.email,
          footerHtml: this.footerHtml
        })
      }
    },
    data: function(){
      return {
        email: this.value.email,
        footerHtml: this.value.footerHtml
      }
    },
    props: {
      value: {
        default: {
          email: "",
          footerHtml: ""
        },
        type:Object
      }
    }
  }
</script>
