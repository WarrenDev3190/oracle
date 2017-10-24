<template lang="html">

  <div class="nc-edit__fill-container">
    <image-editor :title="'Image'" v-model="imageObj" :image="image" @input="updateInput" :toggleable="false" />
    <line-editor :title="'Name'" v-model="name" @input="updateInput" />
    <line-editor :title="'Position'" v-model="position" @input="updateInput" />
    <line-editor :title="'Location'" v-model="location" @input="updateInput" />
  </div>

</template>
<script type="text/javascript">
  import LineEditor from './LineEditor.vue'
  import ImageEditor from './ImageEditor.vue'
  export default {
    components: {
      LineEditor,
      ImageEditor,
    },
    computed: {
      imageObj: {
        get: function(){
          return {
            imageUrl: this.image,
            imageOn: true
          }
        },
        set: function(newValue){
          this.image = newValue.imageUrl
        }
      }
    },
    watch:{
      value(newValue){
        this.name = newValue.name,
        this.position = newValue.position,
        this.location = newValue.location,
        this.image = newValue.image,
        this.imageOn = newValue.imageOn
      }
    },
    methods: {
      updateInput: function(value){
        this.$emit('input', {
          name: this.name,
          position: this.position,
          location: this.location,
          image: this.image,
        })
      }
    },
    data: function(){
      return {
        name: this.value.name,
        position: this.value.position,
        location: this.value.location,
        image: this.value.image,
      }
    },
    props: {
      value: {
        default: function(){
          return {
            name: "Name",
            position: "Position",
            location: "Location",
            image: "https://image.freepik.com/free-icon/business-person-silhouette-wearing-tie_318-49988.jpg",
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
