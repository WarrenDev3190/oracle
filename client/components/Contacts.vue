<template lang="html">
  <div class="">
    <Navigation/>
    <div class="nc-contacts__page nc-flex">
      <div class="nc-contacts__wrapper">
        <div class="nc-contacts__button-wrapper nc-flex">
        <md-button class="md-raised md-primary nc-button--primary">Create List</md-button>
        </div>
        <h3 class="nc-contacts__title">My Lists</h3>
        <!-- List Preview -->
          <div class="nc-contacts__preview-wrapper nc-flex" v-for="contactList in contactLists">
            <p class="nc-contacts__preview">{{contactList.name}}</p>
            <p class="nc-contacts__preview">{{contactList.contacts.length}} contacts</p>
            <div class="nc-contacts__preview__actions-wrapper nc-flex">
              <i class="material-icons nc-contacts__icon-edit">create</i>
              <i class="material-icons nc-contacts__icon-trash">delete</i>
            </div>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navigation from "./Navigation.vue";
export default {
  components: {
    Navigation
  },
  computed: {
    ...mapGetters("contacts", ["contactLists"])
  }
};
</script>
