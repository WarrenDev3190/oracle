<template lang="html">

  <div :style="{
      'font-family':'Arial,Helvetica,sans-serif',
      'font-size':'11px',
      'line-height':'1',
      'margin-bottom':'20px'
    }"
  >
    <a :style="{
        'font-size':'12.8px',
        'font-weight':'bold',
        'color':accentColor + '!important'
      }"
      :href="link"
      target="_blank"
    >
      {{title}}
    </a>
    <br/>
    <span :style="{
        'font-size':'12.8px',
        'font-weight':'bold'
      }"
    >
      {{subtitle}}
    </span>
    <br/>
    <span>
      {{blurb}}
    </span>

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
      accentColor:{
        default:"#1700fc",
        type:String
      },
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
