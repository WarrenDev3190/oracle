<template lang="html">

  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Lato:900i"
      rel="stylesheet"
      type="text/css"
    >
    <table :style="{
      'width':'100%',
      /*'padding-left':'30px',
      'padding-right':'30px',*/
      'margin-bottom':'20px'
      }"
    >
      <tr>
        <td :style="{
            'font-family':'\'Lato\', Helvetica, sans-serif',
            'font-size':'24px',
            'height':'100px',
            'text-align':'center',
            'padding':'0px'
            }"
        >
          <img :src="image" />
        </td>
        <!-- <td :style="{
            'font-family':'\'Lato\', Helvetica, sans-serif',
            'font-size':'24px',
            'height':'100px',
            'text-align':'left',
            'padding':'0px',
            'width':'1%'
          }"
          valign="middle"
        >
          <div>
            <table>
              <tr>
                <td :style="{
                  'font-family':'\'Lato\', Helvetica, sans-serif',
                  'font-size':'24px',
                  'text-align':'left',
                  'padding':'0px'
                  }"
                  nowrap>
                  {{titleText}}
                </td>
              </tr>
            </table>
          </div>
        </td>
        <td :style="{
            'font-family':'\'Lato\', Helvetica, sans-serif',
            'font-size':'24px',
            'padding':'0px',
            'height':'100px',
            'text-align':'left'
          }"
          valign="middle"
        >
          <table :style="{
              'font-family':'\'Lato\', Helvetica, sans-serif',
              'font-size':'24px',
              'width':'100%',
              'text-align':'left',

            }"
          >
            <tr>
              <td
              :style="{
                  'height':'5px',
                  'background-color': barColorSolid,
                  'background-image': 'linear-gradient(to right,' + barColorStart + ' 80%, ' + barColorEnd + ' 90%)'
              }"
              height="4"
              >
              </td>
            </tr>
          </table>
        </td> -->
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
      barColorSolid:{
        default:'blue',
        type:String
      },
      titleText:{
        default:'section title',
        type:String
      },
      image:{
        default:'',
        type:String
      }
    }
  }
</script>
