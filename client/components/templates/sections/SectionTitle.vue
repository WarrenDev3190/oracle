<template lang="html">
  <div class="nc-template__section">
    <!-- necessary markup -->
    <h2 class="nc-template__section__title">
      <span>{{titleText}}</span>
      <div class="nc-template__section__bar" :style="{'background-image': 'linear-gradient(to right,' + barColorStart + ' 80%, ' + barColorEnd + ' 90%)'}"></div>
    </h2>
    <!-- /necessary markup -->
  </div>
</template>
<script type="text/javascript">
  export default {
    components: {
    },
    computed: {
    },
    methods: {
    },
    props: {
      barColorStart:{
        default:'blue',
        type:String
      },
      barColorEnd:{
        default:'black',
        type:String
      },
      titleText:{
        default:'section title',
        type:String
      }
    }
  }
</script>
