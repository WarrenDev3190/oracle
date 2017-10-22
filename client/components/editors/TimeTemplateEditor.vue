<template lang="html">

  <div class="nc-edit">
    <editor-title :title="selectedLayout[0].template.name" />
    <div class="nc-edit__template">
      <colors-editor class="nc-edit__template__column" v-model="colors" @input="updateInput" />
      <template-save-editor class="nc-edit__template__column" />
    </div>
  </div>

</template>
 <script type="text/javascript">
  import { mapGetters } from 'vuex'
  import EditorTitle from './EditorTitle.vue'
  import ColorsEditor from './ColorsEditor.vue'
  import ClickOutside from 'vue-click-outside'
  import TemplateSaveEditor from './TemplateSaveEditor.vue'
  import { db } from '../../constants/fb'
  export default {
    mounted() {
      this.popupItem = this.$refs["saveDialog"]
    },
    directives: {
      ClickOutside
    },
    components: {
      EditorTitle,
      ColorsEditor,
      TemplateSaveEditor
    },
    computed: {
      ... mapGetters('layouts', ['selectedLayout'])
    },
    watch:{
      value(newValue){
        this.colors.accentColor.hex = newValue.accentColor
        this.colors.sectionBarColorStart.hex = newValue.sectionBarColorStart
        this.colors.sectionBarColorEnd.hex = newValue.sectionBarColorEnd
        this.colors.footerColor.hex = newValue.footerColor
        this.sections = newValue.sections
      }
    },
    methods: {
      updateInput: function(value){
        this.$emit('input', {
          accentColor: this.colors.accentColor.hex,
          sectionBarColorStart: this.colors.sectionBarColorStart.hex,
          sectionBarColorEnd: this.colors.sectionBarColorEnd.hex,
          footerColor: this.colors.footerColor.hex,
          sections: this.sections
        })
      },
      toggleDialog: function(){
        this.showSaveDialog = !this.showSaveDialog
      },
      hideDialog: function(){
        this.showSaveDialog = false
      },
      saveNewTemplate: function() {
        this.selectedLayout[0].template.name = this.$refs["saveTitle"].value
        this.selectedLayout[0].template_key = db.ref(`users/${this.$store.state.user.user.uid}/templates/${this.selectedLayout[0].type}`).push(this.selectedLayout[0].template).key
        this.hideDialog()
      },
      saveCurrentTemplate: function() {
        db.ref(`users/${this.$store.state.user.user.uid}/templates/${this.selectedLayout[0].type}/${this.selectedLayout[0].template_key}`).update(this.selectedLayout[0].template)
        this.hideDialog()
      }
    },
    data: function(){
      return {
        colors: {
          accentColor: {title: "Link Color", hex: this.value.accentColor},
          sectionBarColorStart: {title: "Primary Color", hex: this.value.sectionBarColorStart},
          sectionBarColorEnd: {title: "Secondary Color", hex: this.value.sectionBarColorEnd},
          footerColor: {title: "Footer Color", hex: this.value.footerColor}
        },
        sections: this.value.sections,
        showSaveDialog: false
      }
    },
    props: {
      value: {
        default: function(){
            return {
                accentColor: "#00A7FF",
                sectionBarColorStart: "#0081eb",
                sectionBarColorEnd: "#00edbf",
                footerColor: "#003f5c",
                sections: {}
            }
        },
        type: Object
      },
      editorId: {
        default: "TimeTemplateEditor",
        type: String
      }
    }
  }
</script>
