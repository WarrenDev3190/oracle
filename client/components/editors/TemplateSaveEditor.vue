<template lang="html">

  <div class="nc-edit">
      <div ref="saveDialog">
        <div class="nc-edit__template__button nc-edit__template__save" @click="toggleDialog" v-click-outside="hideDialog">Save</div>
        <div v-if="showSaveDialog" class="nc-edit__template__popover">
          <div class="nc-edit__template__popover__triangle"></div>
          <div class="nc-edit__template__popover__body">
            <button v-if="selectedLayout[0].template_key != null" @click="saveCurrentTemplate" class="nc-edit__template__popover__save-button nc-edit__template__popover__new-section">Save Current Template</button>
            <div class="nc-edit__template__popover__text">Save Template as...</div>
            <input ref="saveTitle" type="text" class="nc-edit__template__popover__text-input" :value="selectedLayout[0].template.name" />
            <button class="nc-edit__template__popover__save-button" @click="saveNewTemplate">Save As New Template</button>
          </div>
        </div>
      </div>
    </div>
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
      ColorEditor
    },
    computed: {
      ... mapGetters('layouts', ['selectedLayout'])
    },
    watch:{
    },
    methods: {
      updateInput: function(value){
        this.$emit('input', {
          template: this.template
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
        showSaveDialog: false
      }
    },
    props: {
      editorId: {
        default: "TemplateSaveEditor",
        type: String
      }
    }
  }
</script>