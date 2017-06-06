<template lang="html">

  <div class="nc-news-story">

    <a class="nc-news-story__title" :href="link" target="_blank">{{title}}</a>
    <br/>
    <span class="nc-news-story__subtitle">{{subtitle}}</span>
    <br/>
    <span class="nc-news-story__blurb">{{blurb}}</span>

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
      link:{
        default:"http://google.com",
        type:String
      },
      title:{
        default:'ARTICLE TITLE',
        type:String
      },
      subtitle:{
        default:'SUBTITLE',
        type:String
      },
      blurb:{
        default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
        type:String
      }
    }
  }
</script>
