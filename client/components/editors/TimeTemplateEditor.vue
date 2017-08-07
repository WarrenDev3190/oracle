<template lang="html">

  <div class="nc-edit">
    <editor-title :title="title" />
      <div class="nc-edit__template">
      <div class="nc-edit__template__column nc-edit__template__button" >Colors Settings</div>
      
      <div ref="saveDialog" class="nc-edit__template__column">
        <div class="nc-edit__template__button nc-edit__template__save" @click="toggleDialog" v-click-outside="hideDialog">Save</div>
        <div v-if="showSaveDialog" class="nc-edit__template__popover">
          <div class="nc-edit__template__popover__triangle"></div>
          <div class="nc-edit__template__popover__body">
            <button v-if="false" class="nc-edit__template__popover__save-button nc-edit__template__popover__new-section">Save Current Template</button>
            <div class="nc-edit__template__popover__text">Save Template as...</div>
            <input type="text" class="nc-edit__template__popover__text-input"/>
            <button class="nc-edit__template__popover__save-button" @click="saveNewTemplate">Save As New Template</button>
          </div>
        </div>
      </div>
    </div>
    
    <color-editor :title="'Primary Color'" v-model="sectionBarColorStart" @input="updateInput"/>
    <color-editor :title="'Secondary Color'" v-model="sectionBarColorEnd" @input="updateInput"/>
    <color-editor :title="'Link Color'" v-model="accentColor" @input="updateInput"/>
  </div>

</template>
 <script type="text/javascript">
  import { mapGetters } from 'vuex'
  import EditorTitle from './EditorTitle.vue'
  import ColorEditor from './ColorEditor.vue'
  import ClickOutside from 'vue-click-outside'
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
      ColorEditor
    },
    computed: {
      ... mapGetters('layouts', ['selectedLayout'])
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
      },
      toggleDialog: function(){
        this.showSaveDialog = !this.showSaveDialog
      },
      hideDialog: function(){
        this.showSaveDialog = false
      },
      saveNewTemplate: function() {
        db.ref(`users/${this.$store.state.user.user.uid}/templates/${this.selectedLayout[0].type}`).push(this.selectedLayout[0].template)
      },
      saveCurrentTemplate: function() {
        
      }
    },
    data: function(){
      return {
        accentColor: this.value.accentColor,
        sectionBarColorStart: this.value.sectionBarColorStart,
        sectionBarColorEnd: this.value.sectionBarColorEnd,
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