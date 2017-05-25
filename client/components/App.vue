<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script type="text/javascript">
  export default {
    watch: {
      '$intercom.ready': function ready() {
        this.$intercom.boot()
      }
    }
  }
</script>
