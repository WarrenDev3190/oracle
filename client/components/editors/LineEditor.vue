<template lang="html">

  <div class="nc-edit__component">
    <input :placeholder="title" class="nc-edit__text-input" type="text" v-model="text" @input="updateInput()" />
  </div>

</template>
<script type="text/javascript">
  export default {
    components: {
    },
    computed: {
    },
    methods: {
      updateInput: function(){
        this.$emit('input', this.text)
      }
    },
    watch: {
      value(newValue){
        this.text = newValue
      }
    },
    data: function(){
      return {
        text: this.value
      }
    },
    props: {
      title:{
        default: "",
        type:String
      },
      value: {
        default: "",
        type: String
      },
      editorId: {
        default: "LineEditor",
        type: String
      }
    }
  }
</script>
