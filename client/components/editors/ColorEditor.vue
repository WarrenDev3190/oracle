<template lang="html">

  <div class="nc-edit__component nc-edit__inline">
      <div 
        class="nc-edit__color-box" 
        :style="{'background-color':color}" 
        @click="togglePicker" 
        v-click-outside="hidePicker">
      </div>
      <div class="nc-edit__color-title">{{title}}</div>
    <chrome-picker ref="color-picker" v-if="showPicker" class="nc-edit__picker-popup" :value="defaultColorProps" @input="updateColor" />
  </div>

</template>
<script type="text/javascript">
  import { Chrome } from 'vue-color'
  import ClickOutside from 'vue-click-outside'
  export default {
    mounted() {
      this.popupItem = this.$el
    },
    directives: {
      ClickOutside
    },
    components: {
      "chrome-picker": Chrome
    },
    computed: {
    },
    methods: {
      updateInput: function(){
        this.$emit('input', this.color)
      },
      updateColor: function(newValue){
        this.color = newValue.hex
        this.updateInput()
      },
      togglePicker: function(){
        this.showPicker = !this.showPicker
      },
      hidePicker: function(){
        this.showPicker = false
      }
    },
    watch: {
      value(newValue){
        this.color = newValue
      }
    },
    data: function(){
      return {
        color: this.value,
        defaultColorProps: {
          hex: this.value,
          a: 1
        },
        showPicker: false
      }
    },
    props: {
      title:{
        default: "",
        type:String
      },
      value: {
        default: "#00A7FF",
        type: String
      },
      editorId: {
        default: "ColorEditor",
        type: String
      }
    }
  }
</script>