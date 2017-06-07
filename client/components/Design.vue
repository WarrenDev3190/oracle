<template lang="html">
  <div class="nc-design">
      <navigation/>
      <div class="nc-design__sections">
        <span class="nc-design__sections__title" >Sections</span>
        <div v-for="(section, index) in selectedLayout[0].sections" :key="index" class="nc_design__sections__section">
          <input type="checkbox" v-model="section.on" />
          <label for="checkbox">{{section.title}}</label>
        </div>
      </div>
      <div class="nc-design__container">
        <div class="nc-design__container__template">
          <component :is="selectedLayout[0].component" :sections='selectedLayout[0].sections'/>
        </div>
        <div class="nc-design__container__editor">
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navigation from './Navigation.vue'
import TimeTemplate from './templates/TimeTemplate.vue'
export default {
  components: {
    Navigation,
    TimeTemplate
  },
  computed: {
    ...mapGetters('layouts', ['selectedLayout'])
  },
  methods: {
  },
  props: {
  }
}
</script>
