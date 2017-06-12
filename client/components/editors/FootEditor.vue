<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'Footer'" />
    <line-editor :title="'Email'" v-model="value.email" />
    <html-editor :title="'Footer Body'" v-model="value.footerHtml" />
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
    methods: {
    },
    data: function(){
      return {}
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
