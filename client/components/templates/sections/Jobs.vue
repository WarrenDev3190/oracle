<template lang="html">

  <div :style="{
      'width':'100%',
      'font-family':'Arial,Helvetica,sans-serif',
      'font-size':'11px',
      'text-align':'left',
      'line-height':'1.5',
      'margin-bottom':'20px'
    }"
  >
    <section-title
      :style="{
        'margin-left':'30px',
        'margin-right':'30px',
        'overflow-x':'hidden',
        'max-width':'540px'
      }"
      :barColorStart="barColorStart"
      :barColorEnd="barColorEnd"
      :titleText="titleText"
    />
    <div :style="{
      'margin-left':'30px',
      'margin-right':'30px'
      }"
    >
    <!--blurb that only renders for Time Inc-->
      <div
      v-if="currentUsersCompany() === 'Time Inc'"
      :style="{'margin-bottom': '20px'}"
      >
        <span>
          The best hires are through referrals.
          Help us meet the bright minds you know or apply to a new role at Time Inc.
          If you’re referring a friend, be sure to refer them through
          <a href="http://mytime.timeinc.net/greenhouse/" target="_blank" :style="{'color': accentColor + ' !important', 'text-decoration': 'none'}">Greenhouse</a>
          to take advantage of our
          <a href="http://mytime.timeinc.net/benefits-perks/employee-referral/" target="_blank" :style="{'color': accentColor + ' !important', 'text-decoration': 'none'}">Employee Referral Program</a>.
          Here’s a <a href="http://mytime.timeinc.net/wp-content/uploads/2016/12/refer-a-candidate-to-a-job.pdf" target="_blank" :style="{'color': accentColor + ' !important', 'text-decoration': 'none'}">refresher guide</a>
          for using greenhouse.
        </span>
      </div>

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
            <span :style="{'color':accentColor + ' !important'}">
              <font :color="accentColor">
                {{job.title}}
              </font>
            </span>
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
  </div>

</template>
<script type="text/javascript">
  import SectionTitle from "./SectionTitle.vue"
  import { mapGetters } from 'vuex'
  export default {
    components: {
      SectionTitle
    },
    computed: {
    },
    methods: {
    },
    data: function () {
      return {
        ...mapGetters('user', ['currentUsersCompany'])
      }
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
