<template lang="html">
  <nav class="nc-nav">
    <ul class="nc-nav__navigation nc-flex">
      <figure class="nc-nav__brand nc-flex nc-outline">
        <img src="/imgs/newscart-icon-stroke-white.png" alt="NewsCart Silhouette">
      </figure>
      <nav class="nc-nav__inner-nav nc-flex">
        <li v-for="page in pages"
            class="nc-nav-item"
            :class="{'nc-nav-item--active': (page === currentPage)}"
        >
          <router-link :to="page">
            <img v-if="page === 'next'" src="/imgs/chevron_right.png" alt=">">
            <img v-else-if="page === 'previous'" src="/imgs/chevron_left.png" alt="<">
            {{pageTitle(page)}}
          </router-link>
        </li>
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
    methods: {
      pageTitle(page) {
        if(page == 'next'){
          // return '>'
        }
        else if(page == 'previous'){
          // return '<'
        }
        else if(page == 'new-hires'){
          return 'New Hires'
        }
        else{
          return page.charAt(0).toUpperCase() + page.slice(1)
        }
      }
    },
    filters: {
      capitalize
    },
    data() {
      return {
        pages: [
          'previous',
          'keywords',
          'stories',
          'layout',
          'design',
          'share',
          'next',

        ]
      }
    }
  }
</script>
