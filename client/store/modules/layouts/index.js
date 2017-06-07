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
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/time-template.png?alt=media&token=74eb4c72-666c-41ef-85e6-510e4d40406c',
      selected: true,
      sections: {
        spotlight: {
          title: "Spotlight",
          on: true
        },
        news: {
          title: "News",
          on: true
        },
        events: {
          title: "Events",
          on: true
        },
        hires: {
          title: "Hires",
          on: true
        },
        jobs: {
          title: "Jobs",
          on: true
        }
      },
      component:"time-template"
    }
  ]
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
