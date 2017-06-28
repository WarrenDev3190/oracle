<template lang="html">
  <div>
    <navigation/>
    <main class="nc-container">
      <header class="nc-header">
        <h3>Topics</h3>
      </header>
      <div class="nc-inner-container nc-flex nc-flex--wrap">
        <div v-if="$store.state.user.properties" v-for="(topic, index) in $store.state.user.properties.topics"
             class="nc-topic-card"
             :style="{
                'background-image': 'url(' + getTopicImage(topic.name) + ')'
               }"
             :class="{'nc-topic-card--selected': topic.selected}"
             @click="handleTopicClick(index)">
          {{topic.name}}
        </div>
      </div>
    </main>
  </div>
</template>
<script type="text/javascript">
  import Navigation from './Navigation.vue'
  export default {
    components: {
      Navigation
    },
    methods: {
      handleTopicClick(topicIndex) {
        this.$store.commit('user/UPDATE_SELECTED_TOPICS', topicIndex)
      },
      getTopicImage(topic) {
        if(this.topicsImgs[topic] != undefined){
          return this.topicsImgs[topic]
        }
        else{
          return "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459"
        }
      }
    },
    data: function(){
      return {
        topicsImgs: {
            "Artificial Intelligence": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Artificial%20Intelligence.jpeg?alt=media&token=cbe81166-5670-46c2-b899-e2216af48129",
            "Brands": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Brands.jpg?alt=media&token=2583a487-60c3-4214-8266-b0cb1f3e48df",
            "Consumer Tech": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Consumer%20Tech.jpeg?alt=media&token=e8fe6c40-5461-4ae9-8086-b384a5f11f18",
            "Digital Advertising": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Digital%20Advertising.jpg?alt=media&token=7c8473da-a6f6-4806-a1f2-7fd043ddf985",
            "E-Commerce": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Digital%20Advertising.jpg?alt=media&token=7c8473da-a6f6-4806-a1f2-7fd043ddf985",
            "Mobile": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Mobile.jpeg?alt=media&token=64617f75-a2f0-427a-86b4-a0d1622c406f",
            "Native Advertising": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Native%20Advertising.jpg?alt=media&token=f5de5507-6420-4f8d-bf5b-982d92a8226f",
            "OTT": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/OTT.jpg?alt=media&token=cf932b69-af3f-4ec5-a484-d882b488f3ec",
            "Podcasting": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Podcasting.jpg?alt=media&token=56a6acfd-247a-4230-a5a7-f218b98b251e",
            "Programmatic Advertising": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Programmatic%20Advertising.jpeg?alt=media&token=bf29f497-92e7-47ab-a14d-1b87572117b3",
            "Publishers": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Publishers.jpg?alt=media&token=ca469ab0-b0db-4b47-8496-650eaa757cb5",
            "Social Impact": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Social%20Impact.jpg?alt=media&token=0a378e75-9924-458e-adde-b95180b02632",
            "Social Media": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Social%20Media.jpg?alt=media&token=d62445e2-8d13-45c1-9fd5-3d24bcc4e1fa",
            "Streaming Music": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Streaming%20Music.jpg?alt=media&token=c914c56b-d822-4947-bbdf-473e0f61a802",
            "Travel": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Travel.jpg?alt=media&token=dd8c48db-4ba2-4756-9fd6-964a8c0f8522",
            "Travel Insurance": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Travel%20Insurance.jpg?alt=media&token=0400cdd7-1a29-4755-85f4-9647b3955bf1",
            "TV": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/TV.jpg?alt=media&token=b2d46419-b9f2-4cb6-b4ff-8f2e67284f9f",
            "TV Advertising": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/TV%20Advertising.jpg?alt=media&token=31d7c6bd-6ea6-4b8b-ba48-140e415c7ab4",
            "Video": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Video.jpg?alt=media&token=4b32c34f-9c44-4b3d-817f-315328eae128",
            "Virtual Reality": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/Virtual%20Reality.jpg?alt=media&token=20535053-24d7-41c5-b4a5-f3f44703439a"
        }
      }
    }
  }
</script>
