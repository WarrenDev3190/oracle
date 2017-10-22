<template lang="html">

  <table :style="{
      'width':'100%',
      'font-family':'Arial,Helvetica,sans-serif',
      'font-size':'11px',
      'text-align':'left',
      'padding-top':'0px',
      'padding-bottom':'0px',
      'padding-left':'0px',
      'padding-right':'0px',
      'margin-top':'0px',
      'margin-left':'0px',
      'margin-right':'0px',
      'margin-bottom':'0px',
      'font-weight':'bold',
      'line-height':'1.0',
      'color':'#fff',
      'background-color': footerColor
    }"
  >
    <tr>
      <td :style="{
          'padding-bottom':'20px',
          'padding-top':'20px',
          'padding-left':'30px',
          'padding-right':'30px',
          'margin-top':'0px',
          'margin-left':'0px',
          'margin-right':'0px',
          'margin-bottom':'0px'
        }">
        Questions? Email:&nbsp;
        <a :style="{
            'color':accentColor,
            'text-decoration':'none'
          }"
          :href="'mailto:' + email"
          target="_blank"
        >
          <span :style="{'color':accentColor + ' !important'}">
            <font :color="accentColor">
              {{email}}
            </font>
          </span>
        </a>
      </td>
    </tr>

    <tr>
      <td
        :style="{
          'padding-bottom':'20px',
          'padding-top':'0px',
          'padding-left':'30px',
          'padding-right':'30px',
          'margin-top':'0px',
          'margin-left':'0px',
          'margin-right':'0px',
          'margin-bottom':'0px'
        }"
      >
        <div v-html="footerHtml"></div>
      </td>
    </tr>
  </table>

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
      },
      footerColor: {
      default: "#003f5c",
      type: String
    },
  }
}
</script>
