<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'Header'" />

    <image-editor :title="'Header Image'" :toggleable="false" v-model="imageObj" @input="updateInput" />
  </div>

</template>
<script type="text/javascript">
  import EditorTitle from './EditorTitle.vue'
  import ImageEditor from './ImageEditor.vue'
  export default {
    components: {
      EditorTitle,
      ImageEditor
    },
    computed: {
      imageObj: {
        get: function(){
          return {
            imageUrl: this.logo,
            imageOn: true
          }
        },
        set: function(newValue){
          this.logo = newValue.imageUrl
          this.imageOn = newValue.imageOn
        }
      }
    },
    watch:{
      value(newValue){
        this.logo = newValue.logo
        this.heroBackground = newValue.heroBackground
      }
    },
    methods: {
      updateInput: function(value){
        this.$emit('input', {
          logo: this.logo,
          heroBackground: this.heroBackground
        })
      }
    },
    data: function(){
      return {
        logo: this.value.logo,
        heroBackground: this.value.heroBackground
      }
    },
    props: {
      value: {
        default: {
          logo: "",
          heroBackground: ""
        },
        type: Object
      },
      editorId: {
        default: "HeroEditor",
        type: String
      }
    }
  }
</script>
