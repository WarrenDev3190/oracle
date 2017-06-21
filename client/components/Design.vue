<template lang="html">

  <div class="nc-design nc-container">
      <navigation/>
      <div class="nc-design__sections">
        <h3 class="nc-design__sections__header" >Sections</h3>
        <div class="nc-design__section">
          <div class="nc-design__section__container" v-for="(section, index) in selectedLayout[0].template.sections" v-if="section.toggleable" :key="index">
            <input class="nc-design__section__checkbox" type="checkbox" v-model="section.on" />
            <label class="nc-design__section__title" for="checkbox">{{section.title}}</label>
          </div>
        </div>
      </div>
      <div class="nc-design__container">
        <div class="nc-design__container__template">
          <component :is="selectedLayout[0].component" v-bind="selectedLayout[0].template" :sectionSelected="sectionSelected"/>
        </div>
        <div class="nc-design__container__editor">
          <component :is="getSelectedSection() + '-editor'" v-model="selectedLayout[0].template.sections[getSelectedSection()].data" />
        </div>
      </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import Navigation from './Navigation.vue'
import TimeTemplate from './templates/TimeTemplate.vue'
import editorComponents from './editors'
export default {
  components: {
    Navigation,
    TimeTemplate,
    ...editorComponents
  },
  computed: {
    ...mapGetters('layouts', ['selectedLayout'])
  },
  methods: {
    sectionSelected(sectionKey){
      this.selectedSection = sectionKey
    },
    getSelectedSection(){
      if(this.selectedSection == null){
        console.log("NULL")
        console.log(Object.keys(this.selectedLayout[0].template.sections))
        return Object.keys(this.selectedLayout[0].template.sections)[0]
      }
      else{
        console.log("SECTION")
        console.log(this.selectedSection)
        return this.selectedSection
      }
    }
  },
  data: function() {
      return {
        selectedSection: null
      }
  },
  props: {
  }
}
</script>
