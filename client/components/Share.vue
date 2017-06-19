<template lang="html">

  <div class="nc-share nc-container">
      <navigation/>
      <div class="nc-share__top">
        <div class="nc-share__export">
          <div class="nc-share__subtitle">Export to EML or OFT File</div>
          <md-input-container class="nc-share__export__file-types">
           <md-select class="nc-share__export__filetype-select" name="fileType" v-model="fileType">
              <md-option :value="type" :key="i" v-for="(type,i) in fileTypes">{{type}}</md-option>
           </md-select>
         </md-input-container>
         <button class="nc-share__export__export-button" type="button" @click="exportFile">Export</button>
        </div>
        <div class="nc-share__send-email">
          <div class="nc-share__subtitle">Email to Contacts</div>
          <input class="nc-share__send-email__email-input" type="text" v-model="newEmail" />
          <button class="nc-share__send-email__add-button" type="button" @click="addEmail">Add</button>
          <br />
          <button class="nc-share__send-email__send-button" type="button">Send to Recipients</button>
          <div class="nc-share__send-email__emails">
            <div class="nc-share__send-email__email" v-for="(email, index) in emails" :key="index">
              <div class="nc-share__send-email__email__text">{{email}}</div>
              <button class="nc-share__send-email__email__remove-button" type="button" @click="removeEmail(index)">X</button>
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
    addEmail: function(){
      if(this.newEmail != ""){
        this.emails.push(this.newEmail)
        this.newEmail = ""
      }
    },
    removeEmail: function(index){
      this.emails.splice(index, 1)
    },
    exportFile: function(){
      var emailText = "Subject: " + this.subject + "\n"+
                      "Mime-version: 1.0\n"+
                      "Content-type: text/html;\n"+
                      "Content-transfer-encoding: quoted-printable\n"
      emailText = emailText + "\n\n" + this.$refs['template'].$el.outerHTML
      var file = new Blob([emailText], {type: this.fileType});
      var d = new Date()
      var fileName = "NewsCart Template " + d.toUTCString() + "." + this.fileType
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
        fileTypes: ["EML", "OFT"],
        emails: []
      }
  },
  props: {
  }
}
</script>
