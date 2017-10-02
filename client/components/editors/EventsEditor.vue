<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'Events'" />

    <line-editor :title="'Title'" v-model="titleText" @input="updateInput" />

    <div class="nc-edit__group">
      <button class="nc-edit__add-button" type="button" @click="addEvent" >Add Event</button>
    </div>

    <div class="nc-edit__group" v-for="(event, index) in events">
      <div class="nc-edit__group__left">
        <button class="nc-edit__remove-button__event nc-edit__remove-button" type="button" @click="removeEvent(index)">X</button>
        <event-editor :index='index' v-model="events[index]" :editorId="'EventEditor-' + index" />
      </div>
    </div>
  </div>

</template>
<script type="text/javascript">
  import {mapGetters} from 'vuex'
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
        debugger;
        this.$emit('input', {
          titleText: this.titleText,
          events: this.events
        })
      },
      addEvent: function(){
        this.events.push({
          image:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/245%20x%20150.png?alt=media&token=9a72f27f-0478-4857-a237-f2585f19a36a",
          imageOn: true,
          title:"New Event",
          date:"Monday, January 1st",
          description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci efficitur bibendum dapibus.",
          linkUrl:"http://google.com",
          linkText:"Event Link"
        })
      },
      removeEvent: function(index){
        console.log("REMOVING")
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
