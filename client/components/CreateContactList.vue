<template>
<div class="">
  <Navigation/>
  <div class="nc-container">
    <div class="nc-contacts__page">
      <!--  -->
      <div class="nc-contacts__wrapper">
        <h3 class="nc-contacts__title">Lists/<span class="nc-contacts__title-sub">List Details</span></h3>
        <div class="nc-contacts__input-wrapper__block nc-flex">
          <div class="nc-contacts__input-wrapper">
            <input class="nc-contacts__input" v-model="newContactListName" type="text" name="" value="" placeholder="List Name">
            <input class="nc-contacts__input" v-model="newFromEmail" type="text" name="" value="" placeholder="From Email">
          </div>
          <md-button class="md-raised md-primary nc-button--primary nc-contacts__button" @click.native="saveContactList">Save List</md-button>
        </div>
      </div>
      <!-- CSV Button -->
      <div class="nc-contacts__wrapper">
        <h3 class="nc-contacts__title">Add Recipients</h3>
        <label for="contacts">Upload CSV</label>
        <input ref="contacts" type="file" accept="text/csv" @change="onFileChange"/>
      </div>
      <!-- List and Inputs -->
      <div class="nc-contacts__new-contact-wrapper nc-flex">
        <input type="text" name="" value="" v-model="newContactName" placeholder="Name">
        <input type="text" name="" value="" v-model="newContactEmail" placeholder="Email">
        <md-button class="md-raised md-primary nc-contacts__new-contact__button" @click.native="addContact">Add</md-button>
      </div>
      <!-- Contacts -->
      <div class="nc-contacts__contact-wrapper nc-flex" v-for="(newContact, index) in newContacts">
        <p>{{newContact.name}}</p>
        <p>{{newContact.email}}</p>
        <i class="material-icons nc-contacts__icon-trash" @click="removeContact(index)">delete</i>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import Navigation from "./Navigation.vue";
export default {
  components: {
    Navigation
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.uploadCSV(files[0]);
    },
    uploadCSV(file) {
      let formData = new FormData();
      formData.append("contacts", file);
      axios
        .put("https://oracle-196001.appspot.com/api/parse", formData, {
          headers: {
            "Content-Type": "text/csv"
          }
        })
        .then(({ data }) => {
          this.newContacts = [...this.newContacts, ...data.data];
          let contacts = this.$refs.contacts;
          contacts.type = "text";
          contacts.type = "file";
        })
        .catch(err => {
          console.log(err);
        });
    },
    saveContactList() {
      let newContactList = {
        name: this.newContactListName,
        from: this.newFromEmail,
        contacts: this.newContacts
      };
      this.$store.commit("user/UPDATE_CONTACTS", newContactList);
    },
    addContact() {
      let newContact = {
        name: this.newContactName,
        email: this.newContactEmail
      };
      this.newContacts = [...this.newContacts, newContact];
      this.newContactName = "";
      this.newContactEmail = "";
    },
    removeContact(index) {
      this.newContacts = this.newContacts.filter((c, i) => {
        if (i === index) return false;
        return true;
      });
    }
  },
  data() {
    return {
      contacts: undefined,
      newContactListName: "",
      newFromEmail: "",
      newContactName: "",
      newContactEmail: "",
      newContacts: []
    };
  },
  props: {
    id: {
      type: [String, Number],
      default: 0
    }
  }
};
</script>
