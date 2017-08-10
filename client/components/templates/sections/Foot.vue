<template lang="html">

  <div :style="{
      'width':'100%',
      'font-family':'Arial,Helvetica,sans-serif',
      'font-size':'11px',
      'text-align':'left',
      'padding-top':'20px',
      'padding-bottom':'20px',
      'line-height':'1.0',
      'color':'#fff',
      'background-color':' #003f5c'
    }"
  >
    <div :style="{
        'padding-left':'30px',
        'padding-right':'30px'
      }"
    >
      <span :style="{
          'font-weight':'bold'
        }"
      >
        Questions? Email:&nbsp;
        <a :style="{
            'color':accentColor,
            'text-decoration':'none'
          }"
          :href="'mailto:' + email"
          target="_blank"
        >
          {{email}}
        </a>
      </span>
      <br/>
      <br/>
      <div v-html="footerHtml">
      </div>
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
      accentColor:{
        default:"#1700fc",
        type:String
      },
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
