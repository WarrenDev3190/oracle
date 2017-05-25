<template>
<div class="nc-container nc-flex nc-flex--center-children nc-fullscreen">
    <form class="nc-login nc-login__container" @submit.prevent @keyup.enter="login">
      <figure class="nc-login__logo nc-flex nc-flex--center-children">
        <img src="https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/newscart-logo-blue.png?alt=media&token=f2992282-57f0-4055-af30-0c66123fe24d" draggable="false" class="nc-brand nc-brand--md" alt="NewCart Logo" />
      </figure>
      <div v-if="isLoginError" class="nc-error-message"> {{loginError}}  </div>
      <md-input-container :class="{'md-input-invalid': errors.has('email')}">
        <label>Email Address</label>
        <md-input v-validate name="email" type="email" data-vv-name="email" data-vv-rules="required|email" v-model="email" placeholder="Name@example.com"></md-input>
        <span class="md-error">{{errors.first('email')}}</span>
      </md-input-container>
      <md-input-container md-has-password :class="{'md-input-invalid': errors.has('password')}">
        <label>Password</label>
        <md-input v-validate data-vv-rules="required"  data-vv-name="password" v-model="password" type="password"></md-input>
        <span class="md-error">{{errors.first('password')}}</span>
      </md-input-container>
      <md-button @click.native="login" class="md-raised md-primary nc-button nc-button--primary nc-button--fullwidth">Login</md-button>
    </form>
</div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('user', ['isLoginError', 'loginError'])
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch('user/attemptLogin', {email: this.email, password: this.password})
    }
  }
}
</script>
