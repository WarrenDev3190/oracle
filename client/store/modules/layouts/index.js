/**
 * @Author: warrensadler
 * @Date:   2017-10-06T08:03:05-05:00
 * @Email:  warren.sadler@hcahealthcare.com
 * @Filename: index.js
 * @Last modified by:   warrensadler
 * @Last modified time: 2017-10-24T16:27:17-05:00
 */

 import firebaseService from '../../../services/firebase'
 import Vue from 'vue'
 import jQuery from 'jquery'

 const TOGGLE_SELECTED_TEMPLATE = 'TOGGLE_SELECTED_TEMPLATE'
 const RECEIVE_TEMPLATE = 'RECEIVE_TEMPLATE'
 const DELETE_TEMPLATE = 'DELETE_TEMPLATE'
 const TOGGLE_SPOTLIGHT_IMAGE = 'TOGGLE_SPOTLIGHT_IMAGE'

 const getters = {
   possibleLayouts (state) {
     return state.layouts
   },
   selectedLayout (state) {
     return state.layouts.filter(l => l.selected)
   }
 }

 const actions = {
   deleteTemplate ({ commit, rootState }, templateId) {
     commit(DELETE_TEMPLATE, { userId: rootState.user.user.uid, templateId, user: rootState.user })
   }
 }

 const mutations = {
   [TOGGLE_SELECTED_TEMPLATE]: (state, index) => {
     state.layouts = state.layouts.map(function (layout, i) {
       if (layout.selected) {
         layout.selected = false
       }
       if (i === index) {
         layout.selected = true
       }
       return layout
     })
   },
   [DELETE_TEMPLATE]: (state, { userId, templateId, user }) => {
     firebaseService.deleteTemplate({ userId, templateId })
    .then(() => {
      console.log(user)
    })
   },
   [RECEIVE_TEMPLATE]: (state, payload) => {
    // TODO: Remove this when firebase is no longer the backend
    // We need this because of the way firebase treats data.
    // Empty arrays are not stored, so our data comes back undefineds.
    // We pre-process the template, to re-insert our empty arrays
     var selectedLayout = state.layouts.filter(l => l.selected)[0]
     var template = payload.template
     var key = payload.key
     switch (selectedLayout.type) {
       case 'time-template':
         console.log('time template')
        // Fill in missing news groups and articles with empty arrays
         if (template.sections.news.data.newsGroups == undefined) {
           console.log('No news groups!!')
           Vue.set(template.sections.news.data, 'newsGroups', [])
         } else {
           for (var i = 0, l = template.sections.news.data.newsGroups.length; i < l; i++) {
             if (template.sections.news.data.newsGroups[i].articles == undefined) {
               Vue.set(template.sections.news.data.newsGroups[i], 'articles', [])
             }
           }
         }

        // Fill in missing jobs with empty arrays
         if (template.sections.jobs.data.jobs == undefined) {
           Vue.set(template.sections.jobs.data, 'jobs', [])
         }

        // Fill in missing events with empty arrays
         if (template.sections.events.data.events == undefined) {
           Vue.set(template.sections.events.data, 'events', [])
         }

        // Fill in  missing hires with empty arrays
         if (template.sections.hires.data.hires == undefined) {
           Vue.set(template.sections.hires.data, 'hires', [])
         }

         break
       default:
         break
     }
     Vue.set(selectedLayout, 'template', template)
     Vue.set(selectedLayout, 'template_key', key)
     selectedLayout.template_key = key
     console.log(selectedLayout)
   }
 }

 const defaultTemplates = {
   'time-template': {
     name: 'Dynamic Template',
     accentColor: '#00A7FF',
     sectionBarColorStart: '#0081eb',
     sectionBarColorEnd: '#00edbf',
     footerColor: '#003f5c',
     sections: {
       hero: {
         title: 'Header',
         on: true,
         editable: true,
         toggleable: true,
         data: {
           logo: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/600%20x%20180%20(1).png?alt=media&token=3c4b364b-a782-4345-8b67-45416e3b459d',
           heroBackground: '#FFFFFF'
         }
       },
       spotlight: {
         title: 'Spotlight',
         on: true,
         editable: true,
         toggleable: true,
         data: {
           titleText: 'spotlight',
           bodyHtml: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere est quis purus ' +
                    'aliquet aliquet. Donec eget erat lobortis, porttitor urna eu, pulvinar leo. Nam risus odio, ' +
                    'feugiat id lacinia non, ullamcorper in ante. Mauris cursus quis purus a tempor. Duis sit amet ' +
                    'velit sapien. In turpis risus, mattis ac justo auctor, luctus pulvinar tellus. Pellentesque ' +
                    'interdum, ex sed euismod maximus, orci elit posuere erat, vel pretium mauris justo dignissim ' +
                    'nisl. Crassut aliquet purus. Aenean tincidunt mi ut elementum faucibus. ' +
                    "<strong><a target='_blank' href='http://www.google.com' >Link to Google </a></strong>",
           imageOn: true,
           image: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/131%20x%20131.png?alt=media&token=23bfad71-1acc-4e9f-bdb9-aec6294eaedf'
         }
       },
       news: {
         title: 'News',
         on: true,
         editable: true,
         toggleable: true,
         data: {
           titleText: 'news',
           newsGroups: [
             {
               title: 'NEWS GROUP 1',
               articles: [
                 {
                   'author': 'Fake Author',
                   'title': 'Placeholder Article 1',
                   'titleAlt': 'Placeholder Article 1',
                   'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci ' +
                                'efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas ' +
                                'a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante ' +
                                'volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet ' +
                                'tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. ' +
                                'Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.',
                   'descriptionAlt': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci ' +
                                'efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas ' +
                                'a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante ' +
                                'volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet ' +
                                'tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. ' +
                                'Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.',
                   'url': 'https://www.google.com',
                   'urlAlt': 'https://www.google.com',
                   'urlToImage': 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/300%20x%20200.png?alt=media&token=c3bd2155-1d60-4745-b7dc-152b516066d0',
                   'publishedAt': '1990-01-01T00:00:00Z',
                   'source': 'fake-news-source',
                   'index': -1,
                   'selected': false
                 },
                 {
                   'author': 'Fake Author',
                   'title': 'Placeholder Article 2',
                   'titleAlt': 'Placeholder Article 2',
                   'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci ' +
                                'efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas ' +
                                'a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante ' +
                                'volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet ' +
                                'tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. ' +
                                'Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.',
                   'descriptionAlt': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci ' +
                                'efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas ' +
                                'a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante ' +
                                'volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet ' +
                                'tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. ' +
                                'Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.',
                   'url': 'https://www.google.com',
                   'urlAlt': 'https://www.google.com',
                   'urlToImage': 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/300%20x%20200.png?alt=media&token=c3bd2155-1d60-4745-b7dc-152b516066d0',
                   'publishedAt': '1990-01-01T00:00:00Z',
                   'source': 'fake-news-source',
                   'index': -1,
                   'selected': false
                 }
               ]
             },
             {
               title: 'NEWS GROUP 2',
               articles: [
                 {
                   'author': 'Fake Author',
                   'title': 'Placeholder Article 1',
                   'titleAlt': 'Placeholder Article 1',
                   'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci ' +
                                'efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas ' +
                                'a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante ' +
                                'volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet ' +
                                'tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. ' +
                                'Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.',
                   'descriptionAlt': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci ' +
                                'efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas ' +
                                'a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante ' +
                                'volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet ' +
                                'tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. ' +
                                'Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.',
                   'url': 'https://www.google.com',
                   'urlAlt': 'https://www.google.com',
                   'urlToImage': 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/300%20x%20200.png?alt=media&token=c3bd2155-1d60-4745-b7dc-152b516066d0',
                   'publishedAt': '1990-01-01T00:00:00Z',
                   'source': 'fake-news-source',
                   'index': -1,
                   'selected': false
                 }
               ]
             }
           ]
         }
       },
       events: {
         title: 'Events',
         on: true,
         editable: true,
         toggleable: true,
         data: {
           titleText: "what's happening",
           events: [
             {
               image: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/245%20x%20150.png?alt=media&token=9a72f27f-0478-4857-a237-f2585f19a36a',
               imageOn: true,
               title: 'Event Title 1',
               date: 'Monday, January 1st',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci efficitur bibendum dapibus.',
               linkUrl: 'http://google.com',
               linkText: 'Event Link'
             },
             {
               image: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/245%20x%20150.png?alt=media&token=9a72f27f-0478-4857-a237-f2585f19a36a',
               imageOn: true,
               title: 'Event Title 2',
               date: 'Monday, January 1st',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci efficitur bibendum dapibus.',
               linkUrl: 'http://google.com',
               linkText: 'Event Link'
             }
           ]
         }
       },
       hires: {
         title: 'Hires',
         on: true,
         editable: true,
         toggleable: true,
         data: {
           titleText: 'new hires',
           hires: [
             {
               name: 'Lucille J. Byrd',
               position: 'Senior Liason',
               location: 'Customer Relations',
               image: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/hire_placeholder.png?alt=media&token=0b2ea8a2-2c1c-4f7b-af1f-0c2adcbf6fba'
             },
             {
               name: 'Steven A. Rew',
               position: 'Dynamic Engineer',
               location: 'Product Innovation',
               image: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/hire_placeholder.png?alt=media&token=0b2ea8a2-2c1c-4f7b-af1f-0c2adcbf6fba'
             },
             {
               name: 'Jose L. Wyatt',
               position: 'Product Liason',
               location: 'International Exports',
               image: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/hire_placeholder.png?alt=media&token=0b2ea8a2-2c1c-4f7b-af1f-0c2adcbf6fba'
             },
             {
               name: 'Felipe P. Zylstra',
               position: 'National Web Agent',
               location: 'IT',
               image: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/hire_placeholder.png?alt=media&token=0b2ea8a2-2c1c-4f7b-af1f-0c2adcbf6fba'
             },
             {
               name: 'Sherman J. Rodriguez',
               position: 'Central Developer',
               location: 'IT - Applications',
               image: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/hire_placeholder.png?alt=media&token=0b2ea8a2-2c1c-4f7b-af1f-0c2adcbf6fba'
             },
             {
               name: 'Terry E. Tenney',
               position: 'Legacy Marketing Architect',
               location: 'Marketing',
               image: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/hire_placeholder.png?alt=media&token=0b2ea8a2-2c1c-4f7b-af1f-0c2adcbf6fba'
             },
             {
               name: 'Gabrielle K. Farrell',
               position: 'Customer Accounts Specialist',
               location: 'External Relations',
               image: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/hire_placeholder.png?alt=media&token=0b2ea8a2-2c1c-4f7b-af1f-0c2adcbf6fba'
             }
           ]
         }
       },
       jobs: {
         title: 'Jobs',
         on: true,
         editable: true,
         toggleable: true,
         data: {
           titleText: 'job referrals',
           jobs: [
             {
               title: 'District Marketing Representative',
               location: 'New York, NY',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                            'Donec sagittis ornare fermentum. Quisque mollis a tellus id ' +
                            'ornare. Vivamus luctus porta ligula, et commodo ligula.',
               link: 'http://google.com'
             },
             {
               title: 'Direct Response Manager',
               location: 'Nashville, TN',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                            'Donec sagittis ornare fermentum. Quisque mollis a tellus id ' +
                            'ornare. Vivamus luctus porta ligula, et commodo ligula.',
               link: 'http://google.com'
             },
             {
               title: 'Legacy Optimization Planner',
               location: 'Charlotte, NC',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                            'Donec sagittis ornare fermentum. Quisque mollis a tellus id ' +
                            'ornare. Vivamus luctus porta ligula, et commodo ligula.',
               link: 'http://google.com'
             },
             {
               title: 'Investor Program Manager',
               location: 'New York, NY',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                            'Donec sagittis ornare fermentum. Quisque mollis a tellus id ' +
                            'ornare. Vivamus luctus porta ligula, et commodo ligula.',
               link: 'http://google.com'
             }
           ]
         }
       },
       foot: {
         title: 'Footer',
         on: true,
         editable: true,
         toggleable: true,
         data: {
           email: 'donotreply@notemail.com',
           footerHtml: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                  'Nunc tristique orci efficitur bibendum dapibus. ' +
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                  'Nunc tristique orci efficitur bibendum dapibus. ' +
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                  'Nunc tristique orci efficitur bibendum dapibus.'
         }
       }
     }
   }
 }

 const state = {
   defaultTemplates: defaultTemplates,
   layouts: [
     {
       type: 'time-template',
       name: 'Dynamic Template',
       imageURL: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Dynamic%20Template.png?alt=media&token=e8d4f318-28f9-42ec-b5d6-f72852163a7d',
       selected: true,
       component: 'time-template',
       template_key: null,
       template: jQuery.extend(true, {}, defaultTemplates['time-template'])
     }
   ]

 }

 export default {
   namespaced: true,
   state,
   mutations,
   getters,
   actions
 }
