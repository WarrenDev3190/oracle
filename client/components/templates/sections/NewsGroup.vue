<template lang="html">

  <div :style="{
      'margin-bottom':'20px'
    }"
  >
    <div :style="{
        'font-family':'Arial,Helvetica,sans-serif',
        'font-size':'11px',
        'font-weight':'bold',
        'text-align':'left',
        'margin-bottom':'20px'
      }"
    >
      {{title}}
    </div>
    <news-story
      v-for="article in articles"
      :key="article.index"
      :title="article.title"
      :subtitle="articleSubtitle(article)"
      :link="article.url"
      :blurb="article.description"
      :accentColor="accentColor"
    />
  </div>

</template>
<script type="text/javascript">
  import { newsSourceString, monthDayString } from "../../../utils"
  import SectionTitle from "./SectionTitle.vue"
  import NewsStory from "./NewsStory.vue"
  export default {
    components: {
      SectionTitle,
      NewsStory
    },
    computed: {
    },
    methods: {
      articleSubtitle: function(article) {
        return newsSourceString(article.source) + ", " + monthDayString(article.publishedAt) + ", By " + article.author
      }
    },
    props: {
      accentColor:{
        default:"#1700fc",
        type:String
      },
      title:{
        default:'GROUP TITLE',
        type:String
      },
      articles:{
        default: function(){
          return [
            {
              "author": "Fake Author",
              "title": "Placeholder Article 1",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                            "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                            "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                            "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                            "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                            "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
              "url": "https://www.google.com",
              "urlToImage": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459",
              "publishedAt": "1990-01-01T00:00:00Z",
              "source": "fake-news-source",
              "index": -1,
              "selected": false
            },
            {
              "author": "Fake Author",
              "title": "Placeholder Article 2",
              "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique orci " +
                            "efficitur bibendum dapibus. Morbi imperdiet interdum arcu et euismod. Maecenas " +
                            "a felis dolor. Vivamus dictum magna in dolor tristique, sit amet faucibus ante " +
                            "volutpat. Aliquam maximus id ex eu viverra. Vivamus volutpat, mauris sit amet " +
                            "tincidunt semper, enim leo vestibulum mauris, nec iaculis velit justo non risus. " +
                            "Suspendisse viverra nisi quam. Vestibulum iaculis est vitae mauris tincidunt euismod.",
              "url": "https://www.google.com",
              "urlToImage": "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/nc-cart.png?alt=media&token=7ca57692-21ed-4246-b843-1a8e3515e459",
              "publishedAt": "1990-01-01T00:00:00Z",
              "source": "fake-news-source",
              "index": -1,
              "selected": false
            }
          ]
        },
        type:Array
      }
    }
  }
</script>
