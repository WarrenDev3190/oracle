<template lang="html">

  <div class="nc-events">

    <section-title :barColorStart="barColorStart" :barColorEnd="barColorEnd" :titleText="titleText"/>

    <div class="nc-events__container">
      <event v-for="(event, index) in events" :key="index" :image="event.image" :title="event.title" :date="event.date" :description="event.description" :linkUrl="event.linkUrl" :linkText="event.linkText"/>
    </div>

  </div>

</template>
<script type="text/javascript">
  import SectionTitle from "./SectionTitle.vue"
  import Event from "./Event.vue"
  export default {
    components: {
      SectionTitle,
      Event
    },
    computed: {
    },
    methods: {
    },
    props: {
      barColorStart:{
        default:'blue',
        type:String
      },
      barColorEnd:{
        default:'black',
        type:String
      },
      titleText:{
        default:"what's happening",
        type:String
      },
      events:{
        default:function(){
          return [
            {
              image:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459",
              title:"Event Title 1",
              date:"Monday, January 1st",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci efficitur bibendum dapibus.",
              linkUrl:"http://google.com",
              linkText:"Event Link"
            },
            {
              image:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459",
              title:"Event Title 2",
              date:"Monday, January 1st",
              description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci efficitur bibendum dapibus.",
              linkUrl:"http://google.com",
              linkText:"Event Link"
            }
          ]
        },
        type:Array
      }
    }
  }
</script>
