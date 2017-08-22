<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'Spotlight'" />
    <line-editor :title="'Title'" v-model="titleText" @input="updateInput" />
    <div class="nc-design__section__container">
      <input class="nc-design__section__checkbox" id="spotlightImageToggle" type="checkbox" v-model="selectedLayout()[0].template.sections.spotlight.imageOn"/>
      <label class="nc-design__section__title hoverable" for="spotlightImageToggle">
        <span v-if="checkSpotlightImage">Image On</span>
        <span v-else>Image Off</span>
      </label>
    </div>
    <image-editor :title="'Image'" v-model="image" @input="updateInput" />
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
