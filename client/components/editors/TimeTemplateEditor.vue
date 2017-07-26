<template lang="html">

  <div class="nc-edit">
    <editor-title :title="title" />
    <color-editor :title="'Primary Color'" v-model="sectionBarColorStart" @input="updateInput"/>
    <color-editor :title="'Secondary Color'" v-model="sectionBarColorEnd" @input="updateInput"/>
    <color-editor :title="'Link Color'" v-model="accentColor" @input="updateInput"/>
  </div>

</template>
<script type="text/javascript">
  import EditorTitle from './EditorTitle.vue'
  import ColorEditor from './ColorEditor.vue'
  export default {
    components: {
      EditorTitle,
      ColorEditor
    },
    computed: {
    },
    watch:{
      value(newValue){
        this.accentColor = newValue.accentColor
        this.sectionBarColorStart = newValue.sectionBarColorStart
        this.sectionBarColorEnd = newValue.sectionBarColorEnd
        this.sections = newValue.sections
      }
    },
    methods: {
      updateInput: function(value){
        this.$emit('input', {
          accentColor: this.accentColor,
          sectionBarColorStart: this.sectionBarColorStart,
          sectionBarColorEnd: this.sectionBarColorEnd,
          sections: this.sections
        })
      }
    },
    data: function(){
      return {
        accentColor: this.value.accentColor,
        sectionBarColorStart: this.value.sectionBarColorStart,
        sectionBarColorEnd: this.value.sectionBarColorEnd,
        sections: this.value.sections
      }
    },
    props: {
      value: {
        default: function(){
            return {
                accentColor: "#00A7FF",
                sectionBarColorStart: "#0081eb",
                sectionBarColorEnd: "#00edbf",
                sections: {}
            }
        },
        type: Object
      },
      title: {
        default: "TimeTemplate",
        type: String
      },
      editorId: {
        default: "TimeTemplateEditor",
        type: String
      }
    }
  }
</script>