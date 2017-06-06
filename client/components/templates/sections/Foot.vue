<template lang="html">

  <div class="nc-foot">

    <span class="nc-foot__email">Questions? Email: <a :href="'mailto:' + email">{{email}}</a></span>
    <br/>
    <br/>
    <div class="nc-foot__text" v-html="footerHtml"></div>

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
      email:{
        default:"donotreply@notanemail.com",
        type:String
      },
      footerHtml:{
        default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Nunc tristique orci efficitur bibendum dapibus. " +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Nunc tristique orci efficitur bibendum dapibus. " +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Nunc tristique orci efficitur bibendum dapibus.",
        type:String
      }
    }
  }
</script>
