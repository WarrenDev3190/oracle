<template lang="html">

  <div class="nc-edit__component">
    <div class="nc-edit__subtitle">{{title}}</div>
      <div class="nc-edit__file-drop">
        <div class="nc-edit__file-drop__image-container">
          <img class="nc-edit__file-drop__image" :src="imageUrl" />
        </div>
        <div class="nc-edit__file-drop__text">
          <span v-if="!isSaving">{{message}}</span>
          <span v-if="isSaving">*Uploading. Please wait....</span>
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
        this.$emit('input', this.imageUrl)
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
        this.imageUrl = newValue
      }
    },
    data: function(){
      return {
        imageUrl: this.value,
        status: this.STATUS_INITIAL
      }
    },
    props: {
      title:{
        default: "",
        type:String
      },
      message:{
        default: "*Drag a file to upload or click to select a file.",
        type:String
      },
      value: {
        default: "",
        type: String
      },
      editorId: {
        default: "ImageEditor",
        type: String
      }
    }
  }
</script>
