<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'Events'" />

    <div class="nc-edit__group">
      <button class="nc-edit__add-button" type="button" @click="addEvent" >+New Event</button>
    </div>

    <div class="nc-edit__group" v-for="(event, index) in events">
      <event-editor class="nc-edit__group__left" v-model="events[index]" :editorId="'EventEditor-' + index" />
      <button class="nc-edit__group__right nc-edit__remove-button" type="button" @click="removeEvent(index)" >X</button>
    </div>
  </div>

</template>
<script type="text/javascript">
  import EditorTitle from './EditorTitle.vue'
  import LineEditor from './LineEditor.vue'
  import EventEditor from './EventEditor.vue'
  export default {
    components: {
      EditorTitle,
      LineEditor,
      EventEditor
    },
    computed: {
    },
    watch:{
      value(newValue){
        this.titleText = newValue.titleText,
        this.events = newValue.events
      }
    },
    methods: {
      updateInput: function(value){
        this.$emit('input', {
          titleText: this.titleText,
          events: this.events
        })
      },
      addEvent: function(){
        this.events.push({
          image:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/300%20x%20200.png?alt=media&token=c3bd2155-1d60-4745-b7dc-152b516066d0",
          title:"New Event",
          date:"Monday, January 1st",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci efficitur bibendum dapibus.",
          linkUrl:"http://google.com",
          linkText:"Event Link"
        })
      },
      removeEvent: function(index){
        this.events.splice(index, 1)
      }
    },
    data: function(){
      return {
        titleText: this.value.titleText,
        events: this.value.events
      }
    },
    props: {
      value: {
        default: function(){
          return {
            titleText: "",
            events: []
          }
        },
        type:Object
      },
      editorId: {
        default: "EventsEditor",
        type:String
      }
    }
  }
</script>
