<template lang="html">

  <div class="nc-edit__component">
    <div ref="colorsDialog">
      <div class="nc-edit__template__column nc-edit__template__button nc-edit__template__color-picker hoverable" @click="toggleDialog" v-click-outside="hideDialog">Color Settings</div>
      <div v-if="showColorsDialog" class="nc-edit__template__popover__left">
        <div class="nc-edit__template__popover__body nc-flex--wrap">
          <div class="nc-edit__color" v-for="(color, index) in colors" @click="selectColor(color)" >
            <div class="nc-edit__color__title">{{color.title}}</div>
            <div :class="{'nc-edit__color__swatch':true, 'nc-edit__color__selected':color == selectedColor}" :style="{'background-color':color.hex}"></div>
          </div>
        </div>
        <chrome-picker ref="color-picker" class="nc-edit__color-picker" :value="defaultColorProps" @input="updateColor" />
      </div>
    </div>
  </div>

</template>
<script type="text/javascript">
  import { Chrome } from 'vue-color'
  import ClickOutside from 'vue-click-outside'
  export default {
    mounted() {
      this.popupItem = this.$refs["colorsDialog"]
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
        this.$emit('input', this.colors)
      },
      toggleDialog: function(){
        this.showColorsDialog = !this.showColorsDialog
      },
      hideDialog: function(){
        this.showColorsDialog = false
      },
      selectColor: function(color){
        this.selectedColor = color
      },
      updateColor: function(newValue){
        this.selectedColor.hex = newValue.hex
        this.updateInput()
      }
    },
    watch: {
      value(newValue){

      }
    },
    data: function(){
      return {
        defaultColorProps: {
          hex: this.value,
          a: 1
        },
        colors: this.value,
        selectedColor: null,
        showColorsDialog: false
      }
    },
    props: {
      value: {
        default: function() {
          return {}
        },
        type: Object
      },
      editorId: {
        default: "ColorEditor",
        type: String
      }
    }
  }
</script>
