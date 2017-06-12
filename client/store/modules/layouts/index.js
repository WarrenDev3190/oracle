import R from 'ramda'

const TOGGLE_SELECTED_TEMPLATE = 'TOGGLE_SELECTED_TEMPLATE'

const getters = {
  possibleLayouts (state) {
    return state.layouts
  },
  selectedLayout (state) {
    return state.layouts.filter(l => l.selected)
  }
}

const mutations = {
  [TOGGLE_SELECTED_TEMPLATE]: (state, index) => {

    state.layouts = state.layouts.map(function(layout, i) {
      if(layout.selected){
        layout.selected = false
      }
      if(i === index){
        layout.selected = true
      }
      return layout
    })
  }
}

const state = {
  layouts: [
    {
      type: 'time',
      imageURL: "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time-template.png?alt=media&token=74eb4c72-666c-41ef-85e6-510e4d40406c",
      selected: true,
      component:"time-template",
      template: {
        accentColor: "rgb(0,167,225)",
        sectionBarColorStart: "#0081eb",
        sectionBarColorEnd: "#00edbf",
        sectionBarColorSolid: "#0081eb",
        sections: {
          default: {
            title: "Default",
            on: false,
            editable: false,
            toggleable: false,
            data: {}
          },
          hero: {
            title: "Header",
            on: true,
            editable: true,
            toggleable: false,
            data:{
              logo: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time_logo.jpg?alt=media&token=c3963be8-2e3b-4827-bca0-a5cb91bbc011',
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
              image: "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time_placeholder.jpeg?alt=media&token=8a7587e8-225c-466a-ab5d-29620567d952"
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
                      "urlToImage": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time_placeholder.jpeg?alt=media&token=8a7587e8-225c-466a-ab5d-29620567d952",
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
                      "urlToImage": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time_placeholder.jpeg?alt=media&token=8a7587e8-225c-466a-ab5d-29620567d952",
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
                      "urlToImage": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time_placeholder.jpeg?alt=media&token=8a7587e8-225c-466a-ab5d-29620567d952",
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
                  image:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time_placeholder.jpeg?alt=media&token=8a7587e8-225c-466a-ab5d-29620567d952",
                  title:"Event Title 1",
                  date:"Monday, January 1st",
                  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci efficitur bibendum dapibus.",
                  linkUrl:"http://google.com",
                  linkText:"Event Link"
                },
                {
                  image:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time_placeholder.jpeg?alt=media&token=8a7587e8-225c-466a-ab5d-29620567d952",
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
              email: "donotreply@notemail.com",
              footerHtml: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                      "Nunc tristique orci efficitur bibendum dapibus. " +
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                      "Nunc tristique orci efficitur bibendum dapibus. " +
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                      "Nunc tristique orci efficitur bibendum dapibus."
            }
          }
        }
      }
    }
  ]
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
