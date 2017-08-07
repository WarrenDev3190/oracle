<template lang="html">

  <div>
    <navigation/>
    <div class="nc-share nc-container">
      <div class="nc-share__left">
        <div class="nc-share__preview">
          <div class="nc-share__preview__title">Preview</div>
          <component class="nc-share__preview__template-border" ref="template" :is="selectedLayout[0].component" v-bind="selectedLayout[0].template" />
        </div>
      </div>


      <div class="nc-share__right">
        <div class="nc-share__share-method-wrapper">
          <md-input-container class="nc-share__share-method-wrapper__share-method">
            <md-select class="nc-share__export__filetype-select" name="shareMethod" v-model="shareMethod" placeholder="Select sharing method">
              <md-option :value="type" :key="i" v-for="(type,i) in shareMethods">{{type}}</md-option>
            </md-select>
          </md-input-container>
        </div>
        <div class="nc-share__export" :hidden="isHiddenExport">
          <div class="nc-share__content-wrapper">
           <button class="nc-share__export__export-button" type="button" @click="exportFile">Export</button>
         </div>

        </div>
        <div class="nc-share__send-email" :hidden="isHiddenEmail">
          <div class="nc-share__content-wrapper">
            <input class="nc-share__send-email__email-input-full-width md-input-container" type="text" v-model="fromEmail" placeholder="From Email" />
            <input class="nc-share__send-email__email-input-full-width md-input-container" type="text" v-model="newsletterSubject" placeholder="Subject" />
            <div class="nc-share__send-email__email-input__container ">
              <input class="nc-share__send-email__email-input__email-input-field nc-share__send-email__add-email md-input-container" v-on:keydown.enter="addEmail" type="text" v-model="newEmail" placeholder="Email Recipients"
              /><button class="nc-share__send-email__add-button nc-share__send-email__add-email-btn" type="button" @click="addEmail">Add</button>
            </div>
            <br />
            <button ref="sendButton" class="nc-share__send-email__send-button" type="button" @click="sendEmails()">Send</button>
            <div class="nc-share__send-email__emails">
              <div class="nc-share__send-email__email" v-for="(email, index) in emails" :key="index">
                <div class="nc-share__send-email__email__text">{{email}}</div>
                <button class="nc-share__send-email__email__remove-button" type="button" @click="removeEmail(index)">X</button>
              </div>
            </div>
          </div>
        </div>
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
    ...mapGetters('layouts', ['selectedLayout']),
    isHiddenExport: function() {
      if (this.shareMethod === "Export to EML"){
        return false;
      }else{
        return true;
      }
    },
    isHiddenEmail: function() {
      if (this.shareMethod === "Email") {
        return false
      }else{
        return true;
      }
    }
  },
  methods: {
    resetSendButton: function(){
      this.$refs["sendButton"].innerHTML = "Send to Recipients"
    },
    addEmail: function(){
      if(this.newEmail != ""){
        this.newEmail.split(',')
        .map(email => email.trim())
        .filter(email => email != "")
        .map(email => this.emails.unshift(email));
        this.newEmail = ""
      }
    },
    removeEmail: function(index){
      this.emails.splice(index, 1)
    },
    sendEmails: function(){
      this.$refs["sendButton"].disabled = true
      this.$refs["sendButton"].innerHTML = "Sending..."
      var emailText = encodeURIComponent(this.preprocessTemplateHtml())
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
      emailText = emailText + "\n\n" + this.preprocessTemplateHtml()
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
    },
    preprocessTemplateHtml: function(){
      var template = this.$refs['template'].$el.cloneNode(true)
      var replaceEls = template.querySelectorAll('[name=image_replace]')
      for(var i=0; i < replaceEls.length; i++){
        var encodedHtml = encodeURI(replaceEls[i].innerHTML)
        while(replaceEls[i].firstChild){
          replaceEls[i].removeChild(replaceEls[i].firstChild)
        }
        var img = document.createElement("IMG")
        img.src = "https://newscart-imageconvert-micro.herokuapp.com/htmlToPng?html=" + encodedHtml
        console.log(img.src)
        replaceEls[i].appendChild(img)
      }
      return "<html><head></head><body>" + template.outerHTML + "</body></html>"
    }
  },
  data: function() {
      return {
        subject: "NewsCart Newsletter",
        newEmail: "",
        fileType: "EML",
        fileTypes: ["EML"],
        shareMethod: "",
        shareMethods: ["Export to EML", "Email"],
        fromEmail: '',
        newsletterSubject: '',
        emails: []
      }
  },
  props: {
  }
}
</script>
