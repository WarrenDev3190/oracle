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
      :barColorSolid="barColorSolid"
      :titleText="titleText"
      :image="'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/jobs.png?alt=media&token=b521ea3c-5ede-4e40-b187-4a0415a61d95'"
    />
    <div v-for="(job, index) in jobs"
      :style="{
          'margin-bottom':'20px'
      }"
      :key="index"
    >
      <span :style="{
          'font-weight':'bold',
          'font-size':'12.8px'
        }"
      >
        <a
          :href="job.link"
          target="_blank"
          :style="{
            'color':accentColor,
            'text-decoration':'none'
          }"
        >
          {{job.title}}
        </a>
        &nbsp;-&nbsp;
      </span>
      <span :style="{
          'font-weight':'bold',
          'font-size':'12.8px'
        }"
      >
        {{job.location}}
      </span>
      <br/>
      <span v-html="job.description">
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
      accentColor:{
        default:"#1700fc",
        type:String
      },
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
