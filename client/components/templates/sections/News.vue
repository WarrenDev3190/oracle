<template lang="html">

  <div :style="{
      'width':'100%'
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
    <news-group
      v-for="(group, index) in newsGroups"
      :key="index"
      :title="group.title"
      :articles="group.articles"
      :accentColor="accentColor"
    />
  </div>

</template>
<script type="text/javascript">
  import SectionTitle from "./SectionTitle.vue"
  import NewsGroup from "./NewsGroup.vue"
  export default {
    components: {
      SectionTitle,
      NewsGroup
    },
    computed: {
    },
    methods: {
    },
    props: {
      accentColor:{
        default:"#1700fc",
        type:String
      },
      barColorStart:{
        default:'blue',
        type:String
      },
      barColorEnd:{
        default:'black',
        type:String
      },
      barColorSolid:{
        default:'blue',
        type:String
      },
      titleText:{
        default:'news',
        type:String
      },
      newsGroups:{
        default: function(){
          return [
            {
              title: "NEWS GROUP 1",
              articles: [
                {
                  "author": "Fake Author",
                  "title": "Placeholder Article 1",
                  "titleAlt": "Placeholder Article 1",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                                "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                                "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                                "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                                "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                                "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
                  "descriptionAlt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                                "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                                "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                                "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                                "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                                "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
                  "url": "https://www.google.com",
                  "urlAlt": "http://www.google.com",
                  "urlToImage": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459",
                  "publishedAt": "1990-01-01T00:00:00Z",
                  "source": "fake-news-source",
                  "index": -1,
                  "selected": false
                },
                {
                  "author": "Fake Author",
                  "title": "Placeholder Article 2",
                  "titleAlt": "Placeholder Article 2",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                                "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                                "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                                "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                                "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                                "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
                  "descriptionAlt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                                "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                                "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                                "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                                "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                                "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
                  "url": "https://www.google.com",
                  "urlAlt": "http://www.google.com",
                  "urlToImage": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459",
                  "publishedAt": "1990-01-01T00:00:00Z",
                  "source": "fake-news-source",
                  "index": -1,
                  "selected": false
                }
              ]
            },
            {
              title: "NEWS GROUP 2",
              articles: [
                {
                  "author": "Fake Author",
                  "title": "Placeholder Article 1",
                  "titleAlt": "Placeholder Article 1",
                  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                                "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                                "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                                "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                                "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                                "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
                  "descriptionAlt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                                "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                                "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                                "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                                "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                                "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
                  "url": "https://www.google.com",
                  "urlAlt": "http://www.google.com",
                  "urlToImage": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459",
                  "publishedAt": "1990-01-01T00:00:00Z",
                  "source": "fake-news-source",
                  "index": -1,
                  "selected": false
                }
              ]
            }
          ]
        },
        type:Array
      }
    }
  }
</script>
