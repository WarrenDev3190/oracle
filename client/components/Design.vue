<template lang="html">
  <div>
      <navigation/>
      <time-template />
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import TimeTemplate from './templates/TimeTemplate.vue'
export default {
  components: {
    Navigation,
    TimeTemplate
  },
  computed: {
  },
  methods: {
  }
}
</script>
