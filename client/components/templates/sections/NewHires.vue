<template lang="html">

  <div class="nc-new-hires">

    <section-title :barColorStart="barColorStart" :barColorEnd="barColorEnd" :titleText="titleText"/>

    <div class="nc-new-hires__container" v-for="(hire, index) in newHires" :key="index">
      <span class="nc-new-hires__name">{{hire.name}}</span>, <span class="nc-new-hires__position">{{hire.position}}</span>
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
