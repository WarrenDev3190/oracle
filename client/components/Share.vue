<template lang="html">

  <div class="nc-share nc-container">
      <navigation/>
      <div class="nc-share__top">
        <div class="nc-share__export">
          <div class="nc-share__subtitle">Export to EML or OFT File</div>

          <div class="nc-share__content-wrapper">
            <md-input-container class="nc-share__export__file-types">
             <md-select class="nc-share__export__filetype-select" name="fileType" v-model="fileType">
                <md-option :value="type" :key="i" v-for="(type,i) in fileTypes">{{type}}</md-option>
             </md-select>
           </md-input-container>
           <button class="nc-share__export__export-button" type="button" @click="exportFile">Export</button>
         </div>

        </div>
        <div class="nc-share__send-email">
          <div class="nc-share__subtitle">Email to Contacts</div>
          <div class="nc-share__content-wrapper">
            <input class="nc-share__send-email__email-input-full-width md-input-container" type="text" v-model="fromEmail" placeholder="From Email" />
            <input class="nc-share__send-email__email-input-full-width md-input-container" type="text" v-model="newsletterSubject" placeholder="Subject" />
            <input class="nc-share__send-email__email-input md-input-container" type="text" v-model="newEmail" placeholder="Email Recipients" />
            <button class="nc-share__send-email__add-button" type="button" @click="addEmail">Add</button>
            <br />
            <button ref="sendButton" class="nc-share__send-email__send-button" type="button" @click="sendEmails()">Send to Recipients</button>
            <div class="nc-share__send-email__emails">
              <div class="nc-share__send-email__email" v-for="(email, index) in emails" :key="index">
                <div class="nc-share__send-email__email__text">{{email}}</div>
                <button class="nc-share__send-email__email__remove-button" type="button" @click="removeEmail(index)">X</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nc-share__bottom">
        <div class="nc-share__preview">
          <div class="nc-share__preview__title">Preview</div>
          <component ref="template" :is="selectedLayout[0].component" v-bind="selectedLayout[0].template" />
        </div>
      </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import cloudFunctions from '../services/cloudFunctions'
import Navigation from './Navigation.vue'
import TimeTemplate from './templates/TimeTemplate.vue'
export default {
  components: {
    Navigation,
    TimeTemplate
  },
  computed: {
    ...mapGetters('layouts', ['selectedLayout'])
  },
  methods: {
    resetSendButton: function(){
      this.$refs["sendButton"].innerHTML = "Send to Recipients"
    },
    addEmail: function(){
      if(this.newEmail != ""){
        this.newEmail.split(',').map(email => email.trim()).map(email => this.emails.push(email))
        this.newEmail = ""
      }
    },
    removeEmail: function(index){
      this.emails.splice(index, 1)
    },
    sendEmails: function(){
      this.$refs["sendButton"].disabled = true
      this.$refs["sendButton"].innerHTML = "Sending..."
      var emailText = encodeURIComponent("<html><head></head><body>" + this.$refs['template'].$el.outerHTML + "</body></html>")
      var emailB64 = window.btoa(emailText)
      cloudFunctions.post("/sendTemplate", {
        "from": this.fromEmail,
        "subject": this.newsletterSubject,
        "recipients": this.emails,
        "content": emailB64
      }).then(success => {
          this.$refs["sendButton"].disabled = false
          this.$refs["sendButton"].innerHTML = "Sent"
          setTimeout(this.resetSendButton, 5000)
        }
      ).catch(err => {
          this.$refs["sendButton"].disabled = false
          this.$refs["sendButton"].innerHTML = "Bombed"
          setTimeout(this.resetSendButton, 5000)
        }
      )

    },
    exportFile: function(){
      switch(this.fileType){
        case "EML":
          this.exportEmlFile()
          break;
        default:
          this.exportEmlFile()
          break;
      }
    },
    exportEmlFile: function(){
      var emailText = "Subject: " + this.subject + "\n" +
                      "X-Unsent: 1\n" +
                      "Content-type: text/html;\n"
      emailText = emailText + "\n\n<html><head></head><body>" + this.$refs['template'].$el.outerHTML + "</body></html>"
      var file = new Blob([emailText], {type: "eml"});
      var d = new Date()
      var fileName = "NewsCart Template " + d.toUTCString() + ".eml"
      if (window.navigator.msSaveOrOpenBlob)
          window.navigator.msSaveOrOpenBlob(file, fileName);
      else {
          var a = document.createElement("a"),
                  url = URL.createObjectURL(file);
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          setTimeout(function() {
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);
          }, 0);
      }
    }
  },
  data: function() {
      return {
        subject: "NewsCart Newsletter",
        newEmail: "",
        fileType: "EML",
        fileTypes: ["EML"],
        fromEmail: '',
        newsletterSubject: '',
        emails: []
      }
  },
  props: {
  }
}
</script>
