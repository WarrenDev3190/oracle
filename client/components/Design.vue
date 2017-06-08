<template lang="html">

  <div class="nc-design">
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
          <component :is="selectedLayout[0].component" v-bind="selectedLayout[0].template" />
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
