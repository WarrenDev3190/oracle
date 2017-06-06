<template lang="html">

  <div class="nc-jobs">

    <section-title :barColorStart="barColorStart" :barColorEnd="barColorEnd" :titleText="titleText"/>

    <div class="nc-jobs__container" v-for="(job, index) in jobs" :key="index">

      <span class="nc-jobs__title"><a :href="job.link" target="_blank">{{job.title}}</a> - </span><span class="nc-jobs__location">{{job.location}}</span>
      <br/>
      <span class = "nc-jobs__description">{{job.description}}</span>

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
        default:"jobs",
        type:String
      },
      jobs:{
        default: function(){
          return [
              {
                title:"District Marketing Representative",
                location:"New York, NY",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Donec sagittis ornare fermentum. Quisque mollis a tellus id " +
                            "ornare. Vivamus luctus porta ligula, et commodo ligula.",
                link:"http://google.com"
              },
              {
                title:"Direct Response Manager",
                location:"Nashville, TN",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Donec sagittis ornare fermentum. Quisque mollis a tellus id " +
                            "ornare. Vivamus luctus porta ligula, et commodo ligula.",
                link:"http://google.com"
              },
              {
                title:"Legacy Optimization Planner",
                location:"Charlotte, NC",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Donec sagittis ornare fermentum. Quisque mollis a tellus id " +
                            "ornare. Vivamus luctus porta ligula, et commodo ligula.",
                link:"http://google.com"
              },
              {
                title:"Investor Program Manager",
                location:"New York, NY",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                            "Donec sagittis ornare fermentum. Quisque mollis a tellus id " +
                            "ornare. Vivamus luctus porta ligula, et commodo ligula.",
                link:"http://google.com"
              },
          ]
        },
        type:Array
      }
    }
  }
</script>
