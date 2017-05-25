<template lang="html">
  <nav class="nc-nav">
    <figure class="nc-nav__brand nc-flex nc-outline">
      <img src="https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.svg?alt=media&token=c4fee7d7-d9e3-452d-9c72-24b3bcfa795b" alt="NewsCart Silhouette">
    </figure>
    <ul class="nc-nav__navigation nc-flex">
      <nav class="nc-nav__inner-nav nc-flex">
        <li v-for="page in pages"
            class="nc-nav-item"
            :class="{'nc-nav-item--active': (page === currentPage)}"><router-link :to="page">{{page | capitalize}}</router-link></li>
      </nav>
    </ul>
  </nav>
</template>
<script type="text/javascript">
  import { capitalize } from '../utils'
  export default {
    computed: {
      currentPage() {
        return this.$router.currentRoute.name
      }
    },
    filters: {
      capitalize
    },
    data() {
      return {
        pages: [
          'topics',
          'keywords',
          'stories',
          'layout',
          'design',
          'share'
        ]
      }
    }
  }
</script>
