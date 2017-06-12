<template lang="html">

  <div class="nc-edit__component">
    <div class="nc-edit__subtitle">{{title}}</div>
    <input class="nc-edit__text-input" ref="textInput" type="text" :value="value" @input="updateInput()" />
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
        this.$emit('input', this.$refs.textInput.value)
      }
    },
    data: function(){
      return {}
    },
    props: {
      title:{
        default:"",
        type:String
      },
      value: {
        default: "",
        type: String
      }
    }
  }
</script>
