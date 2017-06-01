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

  //  state.layouts = state.layouts.map((layout, i) => i === index ? R.set(R.lensProp('selected'), !layout.selected, layout) : layout)
  }
}

const state = {
  layouts: [
    {
      type: 'basic',
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/basic-template.png?alt=media&token=5bf911c9-a5e6-49eb-952f-99a97d21ea9c',
      selected: false
    },
    {
      type: '1 2 1',
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/1-2-1-template.png?alt=media&token=49f03fd3-92c4-42ab-82cd-a573adc61e7f',
      selected: false
    },
    {
      type: '1 1 2',
      imageURL: 'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/1-1-2-template.png?alt=media&token=0ed4d797-79ac-44f1-b71a-165318825b93',
      selected: false
    }
  ]
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
