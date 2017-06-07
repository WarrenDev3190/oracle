<template lang="html">
  <div class="nc-design">
      <navigation/>
      <div class="nc-design__sections">
        <span class="nc-desing__sections__title" >Sections</span>
        <span v-for="(section, index) in selectedLayout[0].sections" :key="index">
          {{section.title}}
        </span>
      </div>
      <div class="nc-design__container">
        <div class="nc-design__template">
          <component :is="selectedLayout[0].component" />
        </div>
        <div class="nc-design__editor">
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
