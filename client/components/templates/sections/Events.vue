<template lang="html">

  <div :style="{
      'width':'100%',
      'padding-top':'20px'
    }"
  >
    <section-title
      :style="{
        'margin-left':'30px',
        'margin-right':'30px',
        'overflow-x':'hidden',
        'max-width':'540px'
      }"
      :barColorStart="barColorStart"
      :barColorEnd="barColorEnd"
      :titleText="titleText"
    />
    <table :style="{
        'width':'100%',
        'border-collapse':'true'
      }"
    >
      <tr v-for="n in Math.ceil(events.length / 2, 10)">
          <td v-if="events[(n-1)*2]"
            :style="{
              'padding-bottom':'20px',
              'padding-left':'30px'
            }"
          >
            <div v-if="selectedLayout()[0].template.sections.events.imageOn">
              <event
                :accentColor="accentColor"
                :key="(n-1)*2"
                :image="events[(n-1)*2].image"
                :title="events[(n-1)*2].title"
                :date="events[(n-1)*2].date"
                :description="events[(n-1)*2].description"
                :linkUrl="events[(n-1)*2].linkUrl"
                :linkText="events[(n-1)*2].linkText"
              />
            </div>
            <div v-else>
              <EventNoImg
                :accentColor="accentColor"
                :key="(n-1)*2"
                :title="events[(n-1)*2].title"
                :date="events[(n-1)*2].date"
                :description="events[(n-1)*2].description"
                :linkUrl="events[(n-1)*2].linkUrl"
                :linkText="events[(n-1)*2].linkText"
              />
            </div>
        </td>
        <td v-if="events[(n-1)*2+1]"
          :style="{
            'padding-bottom':'20px',
            'padding-right':'30px'
          }"
        >
          <div v-if="selectedLayout()[0].template.sections.events.imageOn">
            <event
              :style="{'margin-left':'20px'}"
              :accentColor="accentColor"
              :key="(n-1)*2+1"
              :image="events[(n-1)*2+1].image"
              :title="events[(n-1)*2+1].title"
              :date="events[(n-1)*2+1].date"
              :description="events[(n-1)*2+1].description"
              :linkUrl="events[(n-1)*2+1].linkUrl"
              :linkText="events[(n-1)*2+1].linkText"
            />
          </div>
          <div v-else>
            <EventNoImg
              :style="{'margin-left':'20px'}"
              :accentColor="accentColor"
              :key="(n-1)*2+1"
              :title="events[(n-1)*2+1].title"
              :date="events[(n-1)*2+1].date"
              :description="events[(n-1)*2+1].description"
              :linkUrl="events[(n-1)*2+1].linkUrl"
              :linkText="events[(n-1)*2+1].linkText"
            />
          </div>
        </td>
      </tr>
    </table>
  </div>

</template>
<script type="text/javascript">
  import {mapGetters} from 'vuex'
  import SectionTitle from "./SectionTitle.vue"
  import Event from "./Event.vue"
  import EventNoImg from "./EventNoImg.vue"
  export default {
    components: {
      SectionTitle,
      Event,
      EventNoImg
    },
    computed: {
    },
    methods: {
    },
    data: function() {
      return {
        ...mapGetters('layouts',['selectedLayout'])
      }
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
      barColorSolid:{
        defualt:'blue',
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
      },
      accentColor:{
        default:"#1700fc",
        type:String
      }
    }
  }
</script>
