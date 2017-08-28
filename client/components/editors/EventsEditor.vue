<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'Events'" />

    <line-editor :title="'Title'" v-model="titleText" @input="updateInput" />

    <div class="nc-edit__group">
      <button class="nc-edit__add-button" type="button" @click="addEvent" >Add Event</button>
    </div>

    <div class="nc-edit__group" v-for="(event, index) in events">


    <div class="nc-edit__group__left">
        <button class="nc-edit__remove-button__event nc-edit__remove-button" type="button" @click="removeEvent(index)" >X</button>
        <div class="nc-switch__container">
          <img class="nc-switch__icon"
            :hidden="events[index].imageOn"
            src="https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/camera1600.png?alt=media&token=83dc93a1-989f-43ad-9e32-873bc0a41989"
          />
          <span class="nc-switch__text">off</span>
          <label class="nc-switch" :for="'eventImageToggle-' + index">
            <input class="nc-switch__input" :id="'eventImageToggle-' + index" type="checkbox" v-model="events[index].imageOn"/>
            <span class="nc-switch__slider"></span>
          </label>
          <span class="nc-switch__text">on</span>
        </div>

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
      checkEventsImage: function () {
      //  return this.selectedLayout()[0].template.sections.events.imageOn
      }
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
        this.events.splice(index, 1)
      }
    },
    data: function(){
      return {
        ...mapGetters('layouts', ['selectedLayout']),
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
