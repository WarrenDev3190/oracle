<template lang="html">
  <div>
      <navigation/>
      <main class="nc-container">
          <header class="nc-header">
              <h3>Layout</h3>
          </header>
          <div class="nc-inner-container nc-flex">
            <div class="nc-layout-card" @click="handleLayoutClick(index)" v-for="(layout, index) in possibleLayouts">
              <figure>
                <img :src="layout.imageURL" :class="{'nc-layout-card--selected': layout.selected}"/>
                <caption>{{layout.type}}</caption>
              </figure>
            </div>
          </div>
      </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navigation from './Navigation.vue'
export default {
  components: {
    Navigation
  },
  computed: {
    ...mapGetters('layouts', ['possibleLayouts'])
  },
  methods: {
    handleLayoutClick(index) {
      this.$store.commit('layouts/TOGGLE_SELECTED_TEMPLATE', index)
    }
  }
}
</script>
