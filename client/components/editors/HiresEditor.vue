<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'Hires'" />
    
    <line-editor :title="'Title'" v-model="titleText" @input="updateInput" />

    <div class="nc-edit__group">
      <button class="nc-edit__add-button" type="button" @click="addHire" >+New Hire</button>
    </div>
    
    <div class="nc-edit__group" v-for="(hire, index) in hires">
      <hire-editor class="nc-edit__group__left" v-model="hires[index]" />
      <button class="nc-edit__group__right nc-edit__remove-button" type="button" @click="removeHire(index)" >X</button>
    </div>
  </div>

</template>
<script type="text/javascript">
  import EditorTitle from './EditorTitle.vue'
  import LineEditor from './LineEditor.vue'
  import HireEditor from './HireEditor.vue'
  export default {
    components: {
      EditorTitle,
      LineEditor,
      HireEditor
    },
    computed: {
    },
    watch:{
      value(newValue){
        this.titleText = newValue.titleText,
        this.hires = newValue.hires
      }
    },
    methods: {
      updateInput: function(value){
        this.$emit('input', {
          titleText: this.titleText,
          hires: this.hires
        })
      },
      addHire: function(){
        this.hires.push({name:"",position:""})
      },
      removeHire: function(index){
        this.hires.splice(index, 1)
      }
    },
    data: function(){
      return {
        titleText: this.value.titleText,
        hires: this.value.hires
      }
    },
    props: {
      value: {
        default: function(){
          return {
            titleText: "",
            hires: []
          }
        },
        type:Object
      },
      editorId: {
        default: "HiresEditor",
        type: String
      }
    }
  }
</script>
