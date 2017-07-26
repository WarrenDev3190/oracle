<template lang="html">

  <div :style="{
      'width':'100%',
      'font-family':'Arial,Helvetica,sans-serif',
      'font-size':'11px',
      'text-align':'left',
      'line-height':'1.0',
      'margin-bottom':'20px'
    }"
  >
    <section-title
      :barColorStart="barColorStart"
      :barColorEnd="barColorEnd"
      :titleText="titleText"
    />
    <div
      v-for="(hire, index) in newHires"
      :key="index"
    >
      <span :style="{
          'font-size':'9pt',
          'font-weight':'bold'
        }"
      >
        {{hire.name}}
      </span>
      ,&nbsp;
      <span :style="{
          'font-size':'9pt'
        }"
      >
        {{hire.position}}
      </span>
    </div>
  </div>

</template>
<script type="text/javascript">
  import SectionTitle from "./SectionTitle.vue"
  export default {
    components: {
      SectionTitle
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
        default:"new hires",
        type:String
      },
      newHires:{
        default:function(){
          return [
            {
              name:"Lucille J. Byrd",
              position:"Senior Communications Liason"
            },
            {
              name:"Steven A. Rew",
              position:"Dynamic Interactions Engineer"
            },
            {
              name:"Jose L. Wyatt",
              position:"Product Paradigm Liason"
            },
            {
              name:"Felipe P. Zylstra",
              position:"National Web Agent"
            },
            {
              name:"Sherman J. Rodriguez",
              position:"Central Creative Developer"
            },
            {
              name:"Terry E. Tenney",
              position:"Legacy Marketing Architect"
            },
            {
              name:"Gabrielle K. Farrell",
              position:"Customer Accounts Specialist"
            }
          ]
        },
        type:Array
      }
    }
  }
</script>
