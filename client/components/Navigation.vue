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
          <router-link :to="page">{{pageTitle(page)}}</router-link>
        </li>
      </nav>
      <div class="account">
        <div class="account-info" @click="drop=drop ? false:true">
          <md-icon id="account-icon">account_circle</md-icon>
          <span>{{currentUser().email.split('@')[0]}}</span>
          <md-icon id="account-arrow-icon">keyboard_arrow_down</md-icon>
        </div>
        <div v-show="drop" id="myDropdown" class="dropdown-content">
          <span @click="handleOption(i)" v-for="i in dropDownList">{{i}}</span>
        </div>
      </div>
    </ul>
  </nav>
</template>
<script type="text/javascript">
  import { capitalize } from '../utils'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      currentPage() {
        return this.$router.currentRoute.name
      },
    },
    mounted(){
    },
    methods: {
      pageTitle(page) {
        if(page == 'next'){
          return '>'
        }
        else if(page == 'previous'){
          return '<'
        }
        else if(page == 'new-hires'){
          return 'New Hires'
        }
        else{
          return page.charAt(0).toUpperCase() + page.slice(1)
        }
      },
      handleOption(option) {
        if(option == 'Signout') {
          this.signOut()
        }else{
          this.settings()
        }
      },
      signOut() {
        this.$store.dispatch('user/logout')
      },
      settings() {
        console.log("IN SETTINGS")
      }
    },
    filters: {
      capitalize
    },
    data() {
      return {
        ...mapGetters('user', ['currentUser']),
        pages: [
          'previous',
          'topics',
          'keywords',
          'stories',
          'layout',
          'design',
          'share',
          'next',
        ],
        dropDownList: ['Signout'],
        drop: false,
      }
    }
  }
</script scoped>
