<template lang="html">
  <div>
    <navigation/>
    <main class="nc-container">
      <header class="nc-header">
        <h3>Select the topics you’d like to follow</h3>
      </header>
      <div class="nc-inner-container nc-flex nc-flex--wrap">
        <div v-if="$store.state.user.properties" v-for="(topic, index) in $store.state.user.properties.topics"
             class="nc-topic-card"
             :class="{'nc-topic-card--selected': topic.selected}"
             @click="handleTopicClick(index)"
             :style="{ 'backgroundImage' : `url(/static/imgs/nc-topic-images/${makeUrl(topic.name)}.png)`  }">
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
      makeUrl(topic){
        return topic.split(' ').map( topic => topic.toLowerCase()).join('-');
      },
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
    }
  }
</script>
