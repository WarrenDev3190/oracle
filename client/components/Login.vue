<template>
<div class="nc-container nc-flex nc-flex--center-children nc-fullscreen">
    <form class="nc-login nc-login__container" @submit.prevent @keyup.enter="login">
      <div class="tabs">
        <md-layout>
          <md-layout><md-button @click.native="login_tab=true" class="md-raised md-primary nc-tabs" :class="{ active: login_tab, nonactive: !login_tab}">Login</md-button></md-layout>
          <md-layout><md-button @click.native="login_tab=false" class="md-raised md-primary nc-tabs" :class="{ active: !login_tab, nonactive: login_tab}">Signup</md-button></md-layout>
        </md-layout>
      </div>
      
      <figure class="nc-login__logo nc-flex nc-flex--center-children">
        <img src="https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/newscart-logo-blue.png?alt=media&token=f2992282-57f0-4055-af30-0c66123fe24d" draggable="false" class="nc-brand nc-brand--md" alt="NewCart Logo" />
      </figure>
      <div v-show=login_tab>
        <div v-if="isLoginError" class="nc-error-message"> {{loginError}}  </div>
        <md-input-container :class="{'md-input-invalid': errors.has('email'), 'nc-login__input': true}">
          <label>Email Address</label>
          <md-input v-validate name="email" type="email" data-vv-name="email" data-vv-rules="required|email" v-model="email"></md-input>
          <span class="md-error">{{errors.first('email')}}</span>
        </md-input-container>
        <md-input-container md-has-password :class="{'md-input-invalid': errors.has('password'),'nc-login__input': true}">
          <label>Password</label>
          <md-input v-validate data-vv-rules="required"  data-vv-name="password" v-model="password" type="password"></md-input>
          <span class="md-error">{{errors.first('password')}}</span>
          <div class="forgot-password-container">
            <!--<button @click="openDialog('recovery_dialog')" type="button" class="md-button md-icon-button md-theme-default forgot-password">Forgot your password?</button>-->
            <button @click="openModal()" type="button" class="md-button md-icon-button md-theme-default forgot-password">Forgot your password?</button>
          </div>
        </md-input-container>
        <md-button @click.native="login" class="md-raised md-primary nc-button nc-button--primary nc-login__login-button">Login</md-button>
      </div>

      <div v-show=!login_tab>
        <div v-if="isLoginError" class="nc-error-message"> {{loginError}} </div>
        <md-input-container :class="{'md-input-invalid': errors.has('email'), 'nc-login__input': true}">
          <label>Email Address</label>
          <md-input v-validate name="email" type="email" data-vv-name="email" data-vv-rules="required|email" v-model="email"></md-input>
          <span class="md-error">{{errors.first('email')}}</span>
        </md-input-container>
        <md-input-container md-has-password :class="{'md-input-invalid': errors.has('password'),'nc-login__input': true}">
          <label>Password</label>
          <md-input v-validate="'required'" name="password" type="password"></md-input>
          <span class="md-error">{{errors.first('password')}}</span>
        </md-input-container>
        <md-input-container  md-has-password :class="{'md-input-invalid': errors.has('password_confirmation'),'nc-login__input': true}">
          <label>Confirm Password</label>
          <md-input v-validate="'required|confirmed:password'" name="password_confirmation" v-model="confirm_password" type="password" data-vv-as="password confirmation"></md-input>
          <span class="md-error">{{errors.first('password_confirmation')}}</span>
        </md-input-container>
        <md-button @click.native="signup" class="md-raised md-primary nc-button nc-button--primary nc-login__login-button">Signup</md-button>
      </div>
    </form>
    
    <div id="wrapper" class="container">
      <modal v-if="showModal">
        <h2 slot="header" class="modal-title">
          {{ recovery.title }}
        </h2>
        <div slot="body">
          <p>{{ recovery.msg }}</p>
          <md-input-container>
            <md-input type="email" v-model="recovery.email"></md-input>
          </md-input-container>
        </div>
        <div slot="footer">
            <div class="modal-actions">
              <button @click="closeModal" type="button" class="md-button md-primary md-theme-default"> Cancel</button>
              <button @click="sendRecoveryEmail" type="button" class="md-button md-primary md-theme-default"> Send Email</button>
            </div>
        </div>
      </modal>
    </div>

    <div class="container">
      <modal v-if="showForgotPasswordModal">
        <h2 slot="header" class="modal-title">
          Error!
        </h2>
        <div slot="body">
          <div class="nc-error-message"> {{forgot_password_error}} </div>
        </div>
        <div slot="footer">
            <div class="modal-actions">
              <button @click="showForgotPasswordModal = false" type="button" class="md-button md-primary md-theme-default"> ok</button>
            </div>
        </div>
      </modal>
    </div> 
</div>
</template>

<script type="text/javascript">
import Modal from './Modal';
import { mapGetters } from 'vuex'

export default {
  components: {
    Modal
  },
  computed: {
    ...mapGetters('user', ['isLoginError', 'loginError']),
  },
  data() {
    return {
      email: '',
      recovery_email:'',
      password: '',
      confirm_password:'',
      forgot_password_error:'',
      login_tab: true,
      isActive: true, 
      showModal: false, 
      showForgotPasswordModal: false,
      recovery: {
        title: 'Forgot Password?',
        msg: 'Enter your email and we\'ll send you recovery details.',
        email:'',
      },
    }
  },
  methods: {
    login() {
      if(this.errors.any() == false){
        this.$store.dispatch('user/attemptLogin', {email: this.email, password: this.password})
      }  
    },
    signup() {
      if(this.errors.any() == false){
        //No errors so sign the user up
        this.$store.dispatch('user/signup', {email: this.email, password: this.confirm_password})
      }
    },
    sendRecoveryEmail() {
      this.$store.dispatch('user/forgotPassword', {email: this.recovery.email}).then(x => {
        this.showModal = false
        this.recovery.email = ''
      }).catch(error => {
        this.showModal = false
        this.forgot_password_error = error.message
        this.showForgotPasswordModal = true
      })
    },
    openModal() { 
     this.showModal = true; 
    },
    closeModal() {
     this.showModal = false;
    },
  },
}
</script>
<style scoped>

.modal-actions .md-button{
    min-width: 64px;
    margin: 0;
    padding: 0 8px;
}

.forgot-password {
  color: rgba(0,0,0,.54);
  width:auto;
  font-size:12px;
}

.forgot-password-container {
  width:auto;
  position: absolute;
  bottom:-22px;
  right: 0px;
  font-size:12px;
  font-weight:normal;
  height:20px;
}

.nc-login.nc-login__container{
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.nc-login__input{
  width:90%;
  margin-left:5% !important;
}

.tabs {
  width:100%;
}
.nc-login__login-button {
  width:90%;
  margin-right:5%;
  margin-left:5%;
  margin-bottom:5%;
}

.nc-tabs {
  width:100%;
  margin:0%;
  padding-top: 0.75em;
  padding-right: 0em;
  padding-bottom: 0.75em;
  padding-left: 0em;
  background-color: rgba(0,0,0,.12) !important;
}

.active {
  background-color: #1700fc !important;
}
.nonactive {
  color: rgba(0,0,0,.26) !important;
}

</style>
