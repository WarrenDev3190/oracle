<template lang="html">

  <div class="nc-spotlight">

    <section-title :barColorStart="barColorStart" :barColorEnd="barColorEnd" :titleText="titleText"/>

    <div class="nc-spotlight__body">
      <img class="nc-spotlight__body__image" :src="image"/>
      <div class="nc-spotlight__body__text" v-html="bodyHtml"></div>
    </div>

  </div>

</template>
<script type="text/javascript">
  import SectionTitle from "./SectionTitle.vue"
  export default {
    components: {
      SectionTitle
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
        default:'spotlight',
        type:String
      },
      bodyHtml:{
        default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere est quis purus aliquet aliquet. Donec eget erat lobortis, porttitor urna eu, pulvinar leo. Nam risus odio, feugiat id lacinia non, ullamcorper in ante. Mauris cursus quis purus a tempor. Duis sit amet velit sapien. In turpis risus, mattis ac justo auctor, luctus pulvinar tellus. Pellentesque interdum, ex sed euismod maximus, orci elit posuere erat, vel pretium mauris justo dignissim nisl. Cras ut aliquet purus. Aenean tincidunt mi ut elementum faucibus. <strong><a href='http://www.google.com' >Link to Google </a></strong>",
        type:String
      },
      image:{
        default:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459",
        type:String
      }
    }
  }
</script>
