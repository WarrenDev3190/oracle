<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'Header'" />
    <image-editor :title="'Header Image'" v-model="logo" @input="updateInput" />
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
