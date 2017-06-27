<template lang="html">
  <div :style="{
      'width':'100%'
    }"
    align="center"
  >
      <table :style="{
          'width':'600px'
          }"
          width="600"
          align="center"
      >
        <tr>
          <td
            :style="{
              'width':'600px'
            }"
            align="center"
            width="600"
          >
            <hero
              v-show="!sections.hero.toggleable || sections.hero.on"
              @click.native="sectionSelected('hero')"
              :class="{hoverable: sections.hero.editable}"
              :logo="sections.hero.data.logo"
              :backgroundColor="sections.hero.data.heroBackground"
            />
            <div
              :style="{
                'text-align':'left',
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
              v-show="!sections.spotlight.toggleable || sections.spotlight.on"
              @click.native="sectionSelected('spotlight')"
              :class="{hoverable: sections.spotlight.editable}"
              :barColorStart="sectionBarColorStart"
              :barColorEnd="sectionBarColorEnd"
              :barColorSolid="sectionBarColorStart"
              :bodyHtml="sections.spotlight.data.bodyHtml"
              :image="sections.spotlight.data.image"
              :titleText="sections.spotlight.titleText"
            />
            <news
              v-show="!sections.news.toggleable || sections.news.on"
              @click.native="sectionSelected('news')"
              :class="{hoverable: sections.news.editable}"
              :accentColor="accentColor"
              :barColorStart="sectionBarColorStart"
              :barColorEnd="sectionBarColorEnd"
              :barColorSolid="sectionBarColorStart"
              :newsGroups="sections.news.data.newsGroups"
              :titleText="sections.news.data.titleText"
            />
            <events
              v-show="!sections.events.toggleable || sections.events.on"
              @click.native="sectionSelected('events')"
              :class="{hoverable: sections.events.editable}"
              :accentColor="accentColor"
              :barColorStart="sectionBarColorStart"
              :barColorEnd="sectionBarColorEnd"
              :barColorSolid="sectionBarColorStart"
              :events="sections.events.data.events"
            />
            <hires
              v-show="!sections.hires.toggleable || sections.hires.on"
              @click.native="sectionSelected('hires')"
              :class="{hoverable: sections.hires.editable}"
              :barColorStart="sectionBarColorStart"
              :barColorEnd="sectionBarColorEnd"
              :barColorSolid="sectionBarColorStart"
              :titleText="sections.hires.data.titleText"
              :newHires="sections.hires.data.hires"
            />
            <jobs
            v-show="!sections.jobs.toggleable || sections.jobs.on"
              @click.native="sectionSelected('jobs')"
              :class="{hoverable: sections.jobs.editable}"
              :accentColor="accentColor"
              :barColorStart="sectionBarColorStart"
              :barColorEnd="sectionBarColorEnd"
              :barColorSolid="sectionBarColorStart"
              :titleText="sections.jobs.data.titleText"
              :jobs="sections.jobs.data.jobs"
            />
            <foot
              v-show="!sections.foot.toggleable || sections.foot.on"
              @click.native="sectionSelected('foot')"
              :class="{hoverable: sections.foot.editable}"
              :accentColor="accentColor"
              :email="sections.foot.data.email"
              :footerHtml="sections.foot.data.footerHtml"
            />
          </td>
        </tr>
      </table>
  </div>
</template>
<script type="text/javascript">
  import { currentDateString } from '../../utils'
  import Hero from './sections/Hero.vue'
  import Spotlight from './sections/Spotlight.vue'
  import News from './sections/News.vue'
  import Events from './sections/Events.vue'
  import Hires from './sections/Hires.vue'
  import Jobs from './sections/Jobs.vue'
  import Foot from './sections/Foot.vue'
  export default {
    components: {
      Hero,
      Spotlight,
      News,
      Events,
      Hires,
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
      highlight: {
        default: function(event){
          event.target.style.backgroundColor = "lightGrey"
        },
        type:Function
      },
      sectionSelected: {
        default: function(sectionKey){
        },
        type:Function
      },
      accentColor:{
        default:'rgb(0,167,225)',
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
      sections: {
        default: function(){
          return {
            hero: {
              title: "Header",
              on: true,
              editable: true,
              toggleable: false,
              data:{
                logo: "https://firebasestorage.googleapis.com/v0/b/newscart-a7f77.appspot.com/o/newscart-logo-white.png?alt=media&token=b98c8b73-0f14-46c0-b6ee-c85a05b00df4",
                heroBackground: "#FFFFFF"
              }
            },
            spotlight: {
              title: "Spotlight",
              on: true,
              editable: true,
              toggleable: true,
              data: {
                titleText: "spotlight",
                bodyHtml: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere est quis purus " +
                          "aliquet aliquet. Donec eget erat lobortis, porttitor urna eu, pulvinar leo. Nam risus odio, " +
                          "feugiat id lacinia non, ullamcorper in ante. Mauris cursus quis purus a tempor. Duis sit amet " +
                          "velit sapien. In turpis risus, mattis ac justo auctor, luctus pulvinar tellus. Pellentesque " +
                          "interdum, ex sed euismod maximus, orci elit posuere erat, vel pretium mauris justo dignissim " +
                          "nisl. Crassut aliquet purus. Aenean tincidunt mi ut elementum faucibus. " +
                          "<strong><a href='http://www.google.com' >Link to Google </a></strong>",
                image: "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459"
              }
            },
            news: {
              title: "News",
              on: true,
              editable: true,
              toggleable: true,
              data: {
                titleText: "news",
                newsGroups: [
                  {
                    title: "NEWS GROUP 1",
                    articles: [
                      {
                        "author": "Fake Author",
                        "title": "Placeholder Article 1",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                                      "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                                      "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                                      "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                                      "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                                      "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
                        "url": "https://www.google.com",
                        "urlToImage": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459",
                        "publishedAt": "1990-01-01T00:00:00Z",
                        "source": "fake-news-source",
                        "index": -1,
                        "selected": false
                      },
                      {
                        "author": "Fake Author",
                        "title": "Placeholder Article 2",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                                      "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                                      "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                                      "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                                      "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                                      "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
                        "url": "https://www.google.com",
                        "urlToImage": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459",
                        "publishedAt": "1990-01-01T00:00:00Z",
                        "source": "fake-news-source",
                        "index": -1,
                        "selected": false
                      }
                    ]
                  },
                  {
                    title: "NEWS GROUP 2",
                    articles: [
                      {
                        "author": "Fake Author",
                        "title": "Placeholder Article 2",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                                      "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                                      "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                                      "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                                      "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                                      "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
                        "url": "https://www.google.com",
                        "urlToImage": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459",
                        "publishedAt": "1990-01-01T00:00:00Z",
                        "source": "fake-news-source",
                        "index": -1,
                        "selected": false
                      }
                    ]
                  }
                ]
              }
            },
            events: {
              title: "Events",
              on: true,
              editable: true,
              toggleable: true,
              data: {
                titleText: "what's happening",
                events: [
                  {
                    image:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459",
                    title:"Event Title 1",
                    date:"Monday, January 1st",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci efficitur bibendum dapibus.",
                    linkUrl:"http://google.com",
                    linkText:"Event Link"
                  },
                  {
                    image:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459",
                    title:"Event Title 2",
                    date:"Monday, January 1st",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci efficitur bibendum dapibus.",
                    linkUrl:"http://google.com",
                    linkText:"Event Link"
                  }
                ]
              }
            },
            hires: {
              title: "Hires",
              on: true,
              editable: true,
              toggleable: true,
              data: {
                titleText: "new hires",
                hires: [
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
              }
            },
            jobs: {
              title: "Jobs",
              on: true,
              editable: true,
              toggleable: true,
              data: {
                titleText: "job referrals",
                jobs: [
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
              }
            },
            foot: {
              title: "Footer",
              on: true,
              editable: true,
              toggleable: true,
              data: {
                email: "donotreplay@notemail.com",
                footerHtml: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Nunc tristique orci efficitur bibendum dapibus. " +
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Nunc tristique orci efficitur bibendum dapibus. " +
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Nunc tristique orci efficitur bibendum dapibus."
              }
            }
          }
        },
        type:Object
      }
    }
  }
</script>
