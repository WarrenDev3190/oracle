<template lang="html">

  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Lato:900i"
      rel="stylesheet"
      type="text/css"
    >
    <table :style="{
      'width':'100%',
      'padding-left':'30px',
      'padding-right':'30px',
      'margin-bottom':'20px'
      }">
      <tr>
        <td :style="{
          'font-family':'\'Lato\', Helvetica, sans-serif',
          'font-size':'24px',
          'line-height':'1.25',
          'text-align':'left',
          'width':'1%',
          }"
          nowrap
        >
          {{titleText}}
        </td>
        <td>
          <div :style="{
            'align-self':'center',
            'height':'5px',
            'margin-left':'5px',
            'background-image': 'linear-gradient(to right,' + barColorStart + ' 80%, ' + barColorEnd + ' 90%)'
            }"
          >
          </div>
        </td>
      </tr>
    </table>
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
