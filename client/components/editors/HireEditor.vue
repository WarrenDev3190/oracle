<template lang="html">

  <div class="nc-edit__fill-container">
    <line-editor :title="'Name'" v-model="name" @input="updateInput" />
    <line-editor :title="'Position'" v-model="position" @input="updateInput" />
  </div>

</template>
<script type="text/javascript">
  import LineEditor from './LineEditor.vue'
  export default {
    components: {
      LineEditor
    },
    computed: {
    },
    watch:{
      value(newValue){
        this.name = newValue.name,
        this.position = newValue.position
      }
    },
    methods: {
      updateInput: function(value){
        this.$emit('input', {
          name: this.name,
          position: this.position
        })
      }
    },
    data: function(){
      return {
        name: this.value.name,
        position: this.value.position
      }
    },
    props: {
      value: {
        default: function(){
          return {
            name: "",
            position: ""
          }
        },
        type:Object
      },
      editorId: {
        default: "HireEditor",
        type: String
      }
    }
  }
</script>
