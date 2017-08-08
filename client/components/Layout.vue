<template lang="html">
  <div>
      <navigation/>
      <main class="nc-container">
          <header class="nc-header">
              <h3>Layout</h3>
          </header>
          <div class="nc-inner-container nc-flex">
            <div class="nc-layout-card" @click="handleLayoutClick(index)" v-for="(layout, index) in possibleLayouts">
              <figure>
                <img :src="layout.imageURL" :class="{'nc-layout-card--selected': layout.selected}"/>
                <caption>{{layout.type}}</caption>
              </figure>
            </div>
          </div>
          <header class="nc-header">
              <h3>Saved Templates</h3>
          </header>
          <div class="nc-flex">
            <div class="nc-layout-card nc-layout-card-mini" @click="clearSavedTemplate()">
              <figure>
                <img src="https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/NoTemplate.png?alt=media&token=e4d69abc-adc8-425f-b128-13ea497b4dea" :class="{'nc-layout-card--selected': selectedLayout[0].template_key == null}"/>
                <caption>Default Template</caption>
              </figure>
            </div>
            <div class="nc-layout-card nc-layout-card-mini" @click="selectSavedTemplate(template, index)" v-for="(template, index) in savedTemplates">
              <figure>
                <img  :src="selectedLayout[0].imageURL" :class="{'nc-layout-card--selected': selectedLayout[0].template_key == index}"/>
                <caption>{{template.name}}</caption>
              </figure>
            </div>
          </div>
      </main>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Navigation from './Navigation.vue'
import { db } from '../constants/fb'
import jQuery from 'jquery'
export default {
  mounted(){
    this.getSavedTemplates()
  },
  components: {
    Navigation
  },
  computed: {
    ...mapGetters('layouts', ['possibleLayouts', 'selectedLayout'])
  },
  data: function(){
    return {
      savedTemplates: []
    }
  },
  methods: {
    handleLayoutClick(index) {
      this.$store.commit('layouts/TOGGLE_SELECTED_TEMPLATE', index)
      this.getSavedTemplates()
    },
    getSavedTemplates: function(){
      db.ref(`/users/${this.$store.state.user.user.uid}/templates/${this.selectedLayout[0].type}`).once('value').then(function(snapshot){
        this.savedTemplates = snapshot.val()
      }.bind(this))
    },
    clearSavedTemplate: function(){
      this.selectedLayout[0].template = jQuery.extend(true, {}, this.$store.state.layouts.defaultTemplates[this.selectedLayout[0].type])
      this.selectedLayout[0].template_key = null
    },
    selectSavedTemplate: function(template, key){
      this.selectedLayout[0].template = jQuery.extend(true, {}, template)
      this.selectedLayout[0].template_key = key
    }
  }
}
</script>