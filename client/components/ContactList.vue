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
            <input class="nc-contacts__input" type="text" name="" value="" placeholder="List Name">
            <input class="nc-contacts__input" type="text" name="" value="" placeholder="From Email">
          </div>
          <md-button class="md-raised md-primary nc-button--primary nc-contacts__button">Save List</md-button>
        </div>
      </div>
      <!-- CSV Button -->
      <div class="nc-contacts__wrapper">
        <h3 class="nc-contacts__title">Add Recipients</h3>
        <div class="nc-contacts__input-wrapper__block nc-flex">
          <md-button class="md-raised md-primary nc-contacts__button-csv">Upload CSV</md-button>
        </div>
      </div>
      <!-- List and Inputs -->
      <div class="nc-contacts__new-contact-wrapper nc-flex">
        <input type="text" name="" value="" placeholder="Name">
        <input type="text" name="" value="" placeholder="Email">
        <md-button class="md-raised md-primary nc-contacts__new-contact__button">Add</md-button>
      </div>
      <!-- Contacts -->
      <div class="nc-contacts__contact-wrapper nc-flex">
        <p>Name</p>
        <p>Email</p>
        <i class="material-icons nc-contacts__icon-trash">delete</i>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navigation from "./Navigation.vue"
export default {
  components: {
    Navigation
  }
}
</script>
