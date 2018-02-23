const CREATE_NEW_CONTACT_LIST = 'CREATE_NEW_CONACT_LOST'
const UPDATE_NEW_CONTACT_LIST_FROM_EMAIL = 'UPDATE_NEW_CONTACT_LIST_FROM_EMAIL'
const UPDATE_NEW_CONTACT_LIST_NAME = 'UPDATE_NEW_CONTACT_LIST_NAME'
const UPDATE_NEW_CONTACT_NAME = 'UPDATE_NEW_CONTACT_NAME'
const UPDATE_NEW_CONTACT_EMAIL = 'UPDATE_NEW_CONTACT_EMAIL'
const ADD_CONTACT_TO_CONTACT_LIST = 'ADD_CONTACT_TO_CONTACT_LIST'
const DELETE_CONTACT_LIST = 'DELETE_CONTACT_LIST'

const getters = {
  contactLists (state) {
    return state.contactsList
  }
}

const state = {
  contactsList: [{
    name: 'Your Friends At Newscart',
    contacts: [{
      name: 'Jessie Wooten',
      emailAddress: 'jessie@newscart.co'
    },
    {
      name: 'Warren Sadler',
      emailAddress: 'warren@newscart.co'
    },
    {
      name: 'James Murray',
      emailAddress: 'james@newscart.co'
    }
    ]
  }],
  newContactListfromEmail: '',
  newContactListName: '',
  newContactName: '',
  newContactEmail: ''
}

const mutations = {
  [CREATE_NEW_CONTACT_LIST]: (state, contactList) => {
    return { ...state,
      contactsList: [...state.contactsList, contactList]
    }
  },
  [UPDATE_NEW_CONTACT_LIST_FROM_EMAIL]: (state, fromEmail) => {
    return { ...state,
      fromEmail
    }
  },
  [UPDATE_NEW_CONTACT_LIST_NAME]: (state, contactListName) => {
    return { ...state,
      contactListName
    }
  },
  [UPDATE_NEW_CONTACT_NAME]: (state, newContactName) => {
    return { ...state,
      newContactName
    }
  },
  [UPDATE_NEW_CONTACT_EMAIL]: (state, newContactEmail) => {
    return { ...state,
      newContactEmail
    }
  },
  [ADD_CONTACT_TO_CONTACT_LIST]: (state, contactListName) => {
    return { ...state,
      newContactEmail: '',
      newContactName: '',
      contactsLists: state.contactsList.map(cl => {
        if (cl.name !== contactListName) {
          return cl
        }
        return { ...cl,
          name: state.newContactName,
          emailAddress: state.newContactEmail
        }
      })
    }
  },
  [DELETE_CONTACT_LIST]: (state, contactListName) => {
    return { ...state,
      contactsLists: state.contactsLists.filter(c => c.name !== contactListName)
    }
  }
}

const actions = {
  addContactToContactList ({
    commit
  }, contactListName) {
    commit(ADD_CONTACT_TO_CONTACT_LIST, contactListName)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
