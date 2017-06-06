<template lang="html">
  <div>
      <navigation/>
      <div :style="{'width':'600px', 'margin':'auto'}">
        <time-template />
      </div>
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
