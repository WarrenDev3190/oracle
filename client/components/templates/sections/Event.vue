<template lang="html">

  <div :style="{
      'width':'245px',
      'text-align':'left',
      'font-family':'Arial,Helvetica,sans-serif',
      'font-size':'11px',
      'line-height':'1.5'
    }"
  >
    <img :style="{
        'width':'245px',
        'height':'150px'
      }"
      width="245"
      height="150"
      :src="image"
    />
    <div>
      <br/>
      <span :style="{
          'font-weight':'bold',
        }"
      >
        {{title}}
      </span>
      <br/>
      <br/>
      <span :style="{
          'font-size':'11px',
        }"
      >
        {{date}}:
      </span>
      <span v-html="description">
      </span>
      <a :style="{
        'font-size':'11px',
        'text-decoration':'none',
        'color':accentColor + ' !important'
        }"
        :href="linkUrl"
        target="_blank"
      >
        <span :style="{'color':accentColor + ' !important'}">
          <font :color="accentColor">
           | {{linkText}}
          </font>
        </span>
      </a>
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
      },
      accentColor:{
        default:"#1700fc",
        type:String
      }
    }
  }
</script>
