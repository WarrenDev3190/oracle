<template lang="html">
  <div :style="{
      'width':'600px',
      'margin':'auto'
    }"
  >
    <hero
      v-show="sections == undefined || sections['hero'] == undefined || sections['hero'].on"
      :logo="logo"
      :backgroundColor="heroBackground"
    />
    <div
      :style="{
        'text-align':'center',
        'font':'Arial,Helvetica,sans-serif',
        'font-size':'14px',
        'font-weight':'bolder',
        'margin-bottom':'20px'
      }"
      >
      <span>
        {{currentDate}}
      </span>
    </div>
    <spotlight
      v-show="sections == undefined || sections['spotlight'] == undefined || sections['spotlight'].on"
      :barColorStart="sectionBarColorStart"
      :barColorEnd="sectionBarColorEnd"
      :bodyHtml="spotlightHtml"
      :image="spotlightImage"
    />
    <news
      v-show="sections == undefined || sections['news'] == undefined || sections['news'].on"
      :barColorStart="sectionBarColorStart"
      :barColorEnd="sectionBarColorEnd"
      :newsGroups="newsGroups"
      :accentColor="accentColor"
    />
    <events
      v-show="sections == undefined || sections['events'] == undefined || sections['events'].on"
      :accentColor="accentColor"
      :barColorStart="sectionBarColorStart"
      :barColorEnd="sectionBarColorEnd"
      :events="events"
    />
    <new-hires
      v-show="sections == undefined || sections['hires'] == undefined || sections['hires'].on"
      :barColorStart="sectionBarColorStart"
      :barColorEnd="sectionBarColorEnd"
      :titleText="newHiresTitle"
      :newHires="newHires"
    />
    <jobs
    v-show="sections == undefined || sections['jobs'] == undefined || sections['jobs'].on"
      :accentColor="accentColor"
      :barColorStart="sectionBarColorStart"
      :barColorEnd="sectionBarColorEnd"
      :titleText="jobsTitle"
      :jobs="jobReferrals"
    />
    <foot
      v-show="sections == undefined || sections['foot'] == undefined || sections['foot'].on"
      :email="footerEmail"
      :footerHtml="footerHtml"
      :accentColor="accentColor"
    />
  </div>
</template>
<script type="text/javascript">
  import { currentDateString } from '../../utils'
  import Hero from './sections/Hero.vue'
  import Spotlight from './sections/Spotlight.vue'
  import News from './sections/News.vue'
  import Events from './sections/Events.vue'
  import NewHires from './sections/NewHires.vue'
  import Jobs from './sections/Jobs.vue'
  import Foot from './sections/Foot.vue'
  export default {
    components: {
      Hero,
      Spotlight,
      News,
      Events,
      NewHires,
      Jobs,
      Foot
    },
    computed: {
      currentDate: function(){
        return currentDateString()
      }
    },
    methods: {
    },
    props: {
      accentColor:{
        default:'rgb(0,167,225)',
        type:String
      },
      logo:{
        default:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time_logo.png?alt=media&token=eeed6afe-45ec-4c4e-abe6-d4892f5a8c7c",
        type:String,
      },
      heroBackground:{
        default:"#000000",
        type:String
      },
      sectionBarColorStart:{
        default:'#0081eb',
        type:String
      },
      sectionBarColorEnd:{
        default:'#00edbf',
        type:String
      },
      spotlightImage:{
        default:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time_placeholder.jpeg?alt=media&token=8a7587e8-225c-466a-ab5d-29620567d952",
        type:String
      },
      spotlightHtml:{
        default:"Our offices at 225 Liberty Street and Birmingham, AL celebrated the launch of Well Done, " +
                "our new all-video social brand, with donut walls, Totchos (tater tot nachos), brownie bites and more! " +
                "Time Inc. employees who shared photos using #foodwelldone and tagged @welldonefood helped increase " +
                "Well Done’s Instagram audience by about 30% in one day. <a href='http://google.com'><strong>View the " +
                "photos here.</strong></a><br/><br/><a href='mailto:corpcomm@timeinc.com'><u>Share a tip/suggestion</u>",
        type:String
      },
      newsGroups:{
        default: function(){
          return [
            {
              title: "TIME INC.",
              articles: [
                {
                  "author": "Time TimeMan",
                  "title": "Time Inc., Time news articles go here",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                                "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                                "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                                "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                                "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                                "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
                  "url": "https://www.google.com",
                  "urlToImage": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time_placeholder.jpeg?alt=media&token=8a7587e8-225c-466a-ab5d-29620567d952",
                  "publishedAt": "1990-01-01T00:00:00Z",
                  "source": "time-news",
                  "index": -1,
                  "selected": false
                },
                {
                  "author": "Time TimeMan",
                  "title": "Time Inc., Time news articles go here",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                                "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                                "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                                "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                                "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                                "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
                  "url": "https://www.google.com",
                  "urlToImage": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time_placeholder.jpeg?alt=media&token=8a7587e8-225c-466a-ab5d-29620567d952",
                  "publishedAt": "1990-01-01T00:00:00Z",
                  "source": "time-news",
                  "index": -1,
                  "selected": false
                }
              ]
            },
            {
              title: "MEDIA & TRENDS",
              articles: [
                {
                  "author": "Media Author",
                  "title": "Media & Trends Articles Go Here",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                                "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                                "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                                "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                                "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                                "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
                  "url": "https://www.google.com",
                  "urlToImage": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459",
                  "publishedAt": "1990-01-01T00:00:00Z",
                  "source": "media-news-source",
                  "index": -1,
                  "selected": false
                }
              ]
            }
          ]
        },
        type:Array
      },
      events:{
        default:function(){
          return [
            {
              image:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time_placeholder.jpeg?alt=media&token=8a7587e8-225c-466a-ab5d-29620567d952",
              title:"EVENT 1",
              date:"Monday, January 1st",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci efficitur bibendum dapibus.",
              linkUrl:"http://google.com",
              linkText:"RSVP Here"
            },
            {
              image:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time_placeholder.jpeg?alt=media&token=8a7587e8-225c-466a-ab5d-29620567d952",
              title:"EVENT 2",
              date:"Monday, January 1st",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci efficitur bibendum dapibus.",
              linkUrl:"http://google.com",
              linkText:"RSVP Here"
            }
          ]
        },
        type:Array
      },
      newHiresTitle:{
        default:"welcome new hires!",
        type:String
      },
      newHires:{
        default:function(){
          return [
            {
              name:"Lucille J. Byrd",
              position:"Senior Communications Liason, Consumer Marketing + Revenue"
            },
            {
              name:"Steven A. Rew",
              position:"Dynamic Interactions Engineer, Customer Specialist Division"
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
              position:"Central Creative Developer, Consumer Marketing + Revenue"
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
      },
      jobsTitle:{
        default:"job referrals",
        type:String
      },
      jobReferrals:{
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
      },
      footerEmail:{
        default:"donotreply@notemail.com",
        type:String
      },
      footerHtml:{
        default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Nunc tristique orci efficitur bibendum dapibus. " +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Nunc tristique orci efficitur bibendum dapibus. " +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "<b>Nunc tristique orci efficitur bibendum dapibus.</b>",
        type:String
      },
      sections:{
        default:{},
        type:Object
      }
    }
  }
</script>
