<template lang="html">
  <div class="">
    <Navigation/>
    <div class="nc-container">
      <div class="nc-contacts__page">
        <div class="nc-contacts__wrapper">
          <div class="nc-contacts__button-wrapper nc-flex">
          <router-link to="/contact-list"><md-button class="md-raised md-primary nc-button--primary">Create List</md-button></router-link>
          </div>
          <h3 class="nc-contacts__title">My Lists</h3>
          <!-- List Preview -->
            <div class="nc-contacts__preview-wrapper nc-flex" v-for="(list, index) in userContactsLists">
              <p class="nc-contacts__preview">{{list.name}}</p>
              <p class="nc-contacts__preview">{{list.contacts.length}} contacts</p>
              <div class="nc-contacts__preview__actions-wrapper nc-flex">
                <router-link :to="{ name: 'edit-contact', params: { contactListId: index }}"><i class="material-icons nc-contacts__icon-edit">create</i></router-link>
                <i @click="deleteContactList(index)" class="material-icons nc-contacts__icon-trash">delete</i>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import { mapGetters } from "vuex";
export default {
  methods: {
    deleteContactList(index) {
      this.$store.commit("user/UPDATE_CONTACTS_DELETE", index);
    }
  },
  computed: {
    ...mapGetters("user", ["userContactsLists"])
  },
  components: {
    Navigation
  }
};
</script>
