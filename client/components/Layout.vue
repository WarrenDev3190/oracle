<template lang="html">
  <div>
      <navigation/>
      <main class="nc-container">
          <header class="nc-header">
              <h3>Layout</h3>
          </header>
          <div class="nc-inner-container nc-flex">
            <div class="nc-layout-card" @click="handleLayoutClick(index)" v-for="(layout, index) in layouts">
              <figure>
                <img :src="layout.imageURL" :class="{'nc-layout-card--selected': layout.selected}"/>
                <caption>{{layout.type}}</caption>
              </figure>
            </div>
          </div>
      </main>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
export default {
  components: {
    Navigation
  },
  data() {
    return {
      layouts: [
        {
          type: 'basic',
          imageURL: "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/basic-template.png?alt=media&token=5bf911c9-a5e6-49eb-952f-99a97d21ea9c",
          selected: false
        },
        {
          type: '1 2 1',
          imageURL: "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/1-2-1-template.png?alt=media&token=49f03fd3-92c4-42ab-82cd-a573adc61e7f",
          selected: false
        },
        {
          type: '1 1 2',
          imageURL: "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/1-1-2-template.png?alt=media&token=0ed4d797-79ac-44f1-b71a-165318825b93",
          selected: false
        }
      ]
    }
  },
  methods: {
    handleLayoutClick(index) {
      this.layouts[index].selected = !this.layouts[index].selected
    }
  }
}
</script>
<style lang="scss">
  .nc-layout-card {
    padding: .5em;
    &--selected {
      border: 3px solid #28f392;
    }

    figure {
      box-sizing: border-box;
    }

    figure img{
      padding-bottom: 1.5em;
    }

    figure img:hover {
      cursor: pointer;
    }
  }
  caption {
    display: block;
  }
</style>
