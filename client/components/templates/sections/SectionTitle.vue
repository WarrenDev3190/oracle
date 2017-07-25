<template lang="html">

  <img ref="rootEl" :style="{'width': '100%'}" :src="'http://newscart-imageconvert-micro.herokuapp.com/sectionTitle?titleText=' + encodeURIComponent(titleText) + '&barColorStart=' + encodeURIComponent(barColorStart) + '&barColorEnd=' + encodeURIComponent(barColorEnd) + '&width=' + width + '&height=' + height" />

</template>
<script type="text/javascript">
  export default {
    mounted: function(){
      this.width = this.$refs["rootEl"].offsetWidth
    },
    components: {
    },
    computed: {
    },
    methods: {
    },
    data: function(){
      return {
        width: 100
      }
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
      height:{
        default:"100",
        type:String
      },
      titleText:{
        default:'section title',
        type:String
      }
    }
  }
</script>
