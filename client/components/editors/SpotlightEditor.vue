<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'Spotlight'" />
    <line-editor :title="'Title'" v-model="titleText" @input="updateInput" />
    <div class="nc-switch__container">
      <img class="nc-switch__icon"
        :hidden="checkSpotlightImage"
        src="https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/camera1600.png?alt=media&token=83dc93a1-989f-43ad-9e32-873bc0a41989"
      />
      <span class="nc-switch__text">off</span>
      <label class="nc-switch" for="spotlightImageToggle">
        <input class="nc-switch__input" id="spotlightImageToggle" type="checkbox" v-model="selectedLayout()[0].template.sections.spotlight.imageOn"/>
        <span class="nc-switch__slider"></span>
      </label>
      <span class="nc-switch__text">on</span>
    </div>
    <image-editor :hidden="!checkSpotlightImage" :title="'Image'" v-model="image" @input="updateInput" />
    <html-editor :title="'Text'" v-model="bodyHtml" @input="updateInput" />
  </div>

</template>
<script type="text/javascript">
  import {mapGetters} from 'vuex';
  import EditorTitle from './EditorTitle.vue'
  import ImageEditor from './ImageEditor.vue'
  import HtmlEditor from './HtmlEditor.vue'
  import LineEditor from './LineEditor.vue'
  export default {
    components: {
      EditorTitle,
      ImageEditor,
      HtmlEditor,
      LineEditor
    },
    computed: {
      checkSpotlightImage: function () {
       return this.selectedLayout()[0].template.sections.spotlight.imageOn
      }
    },
    watch:{
      value(newValue){
        this.titleText = newValue.titleText
        this.image = newValue.image
        this.bodyHtml = newValue.bodyHtml
      }
    },
    methods: {
      updateInput: function(value){
        this.$emit('input', {
          titleText: this.titleText,
          image: this.image,
          bodyHtml: this.bodyHtml
        })
      },
      toggleSpotlightImage: function () {
        this.$store.commit('layouts/TOGGLE_SPOTLIGHT_IMAGE')
      }
    },
    data: function(){
      return {
        ...mapGetters('layouts',['selectedLayout']),
        titleText: this.value.titleText,
        image: this.value.image,
        bodyHtml: this.value.bodyHtml
      }
    },
    props: {
      value: {
        default: {
          titleText: "",
          image: "",
          bodyHtml: ""
        },
        type: Object
      },
      editorId: {
        default: "SpotlightEditor",
        type: String
      }
    }
  }
</script>
