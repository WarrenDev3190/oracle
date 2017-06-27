<template lang="html">
  <div>
    <navigation/>
    <main class="nc-container">
      <header class="nc-header">
        <h3>Now, input any keywords you'd like to follow.</h3>
      </header>
      <div class="nc-inner-container">
        <md-chips @change="handleKeywordsChange" v-model="userDefinedKeywords" md-input-placeholder="Add a Keyword">
          <template scope="chip">{{ chip.value }}</template>
        </md-chips>
      </div>
    </main>
  </div>
</template>
<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import Navigation from './Navigation.vue'
  export default {
    components: {
      Navigation
    },
    computed: {
      ...mapGetters('user', ['userDefinedKeywords'])
    },
    methods: {
      handleKeywordsChange(updatedKeywords) {
          this.$store.commit('user/UPDATE_KEYWORDS', updatedKeywords)
      }
    }
  }
</script>
