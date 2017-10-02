<template lang="html">

  <div class="nc-edit__component">
      <div class="nc-switch__container" v-show="toggleable">
        <img class="nc-switch__icon"
          v-show="!imageOn"
          src="https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/camera1600.png?alt=media&token=83dc93a1-989f-43ad-9e32-873bc0a41989"
        />
        <span class="nc-switch__text">off</span>
        <label class="nc-switch">
          <input class="nc-switch__input" type="checkbox" v-model="imageOn" @click="updateInput"/>
          <span class="nc-switch__slider"></span>
        </label>
        <span class="nc-switch__text">on</span>
      </div>
      <div class="nc-edit__file-drop" v-show="imageOn">
        <div class="nc-edit__file-drop__image-container">
          <img class="nc-edit__file-drop__image" src="https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/camera1600.png?alt=media&token=83dc93a1-989f-43ad-9e32-873bc0a41989" />
        </div>
        <div class="nc-edit__file-drop__text">
          <span v-if="!isSaving">{{message}}</span>
          <span v-if="isSaving">Uploading. Please wait....</span>
          <br/>
          <span class="nc-edit__file-drop__error" v-if="isFailed">Upload failed. Try again.</span>
        </div>
        <input
          class="nc-edit__file-drop__file"
          type="file"
          :name="editorId"
          :disabled="isSaving"
          @change="fileChange($event.target.files);
          fileCount = $event.target.files.length"
          accept="image/*"
        />
      </div>
  </div>

</template>
<script type="text/javascript">
  import { templatestorage } from '../../constants/fb'

  const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

  export default {
    components: {
    },
    computed: {
      isSaving: function(){
        return this.status === STATUS_SAVING
      },
      isFailed: function(){
        return this.status === STATUS_FAILED
      }
    },
    methods: {
      updateInput: function(){
        this.$emit('input', {imageUrl: this.imageUrl, imageOn: this.imageOn})
      },
      fileChange: function(files){
        if(files[0] != undefined && files[0] != null){
          this.status = STATUS_SAVING
          var d = new Date()
          templatestorage.ref().child(d.toUTCString() + "." + files[0].name.split('.').pop()).put(files[0])
          .then(this.fileUploaded)
          .catch(this.fileFailed)
        }
      },
      fileUploaded(success){
        this.status = STATUS_SUCCESS
        this.imageUrl = success.downloadURL
        this.updateInput()
      },
      fileFailed(err){
        this.status = STATUS_FAILED
      }
    },
    watch: {
      value(newValue){
        this.imageUrl = newValue.imageUrl
        this.imageOn = newValue.imageOn
      }
    },
    data: function(){
      return {
        imageUrl: this.value.imageUrl,
        imageOn: this.value.imageOn,
        status: this.STATUS_INITIAL
      }
    },
    props: {
      title:{
        default: "",
        type:String
      },
      message:{
        default: "Drag a file to upload or click to select a file.",
        type:String
      },
      value: {
        default: function(){
          return {
            imageUrl: "",
            imageOn: true
          }
        },
        type: Object
      },
      toggleable: {
        default: true,
        type: Boolean
      },
      editorId: {
        default: "ImageEditor",
        type: String
      }
    }
  }
</script>
