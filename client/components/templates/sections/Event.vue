<template lang="html">

  <div class="nc-event">

    <img class="nc-event__image" :src="image" />
    <div class="nc-event__info">
      <span class="nc-event__info__title">{{title}}</span>
      <br/>
      <span class="nc-event__info__date">{{date}}:</span>
      <span class="nc-event__info__description">{{description}} | </span>
      <a class="nc-event__info__link" :href="linkUrl" target="_blank">{{linkText}}</a>
    </div>

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
      image:{
        default:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459",
        type:String
      },
      title:{
        default:"Event Title",
        type:String
      },
      date:{
        default:"Monday, January 1st",
        type:String
      },
      description:{
        default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci efficitur bibendum dapibus.",
        type:String
      },
      linkUrl:{
        default:"http://google.com",
        type:String
      },
      linkText:{
        default:"Event Link",
        type:String
      }
    }
  }
</script>
