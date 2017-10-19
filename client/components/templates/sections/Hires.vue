<template lang="html">

  <div :style="{
      'width':'100%',
      'font-family':'Arial,Helvetica,sans-serif',
      'font-size':'11px',
      'text-align':'left',
      'margin-bottom':'20px',
      'line-height':'1.5'
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
    <div :style="{
        'margin-left':'30px',
        'margin-right':'30px'
      }"
    >

    <!--This is original Coding-->
      <!--<div-->
        <!--v-for="(hire, index) in newHires"-->
        <!--:key="index"-->
        <!--class="col-md-4"-->
      <!--&gt;-->
      <!--<img :src="hire.img_url" :style="{-->
        <!--'width': '200px',-->
        <!--'height': '200px',-->
      <!--}"/>-->
      <!--<br>-->
        <!--<span :style="{-->
            <!--'font-size':'9pt',-->
            <!--'font-weight':'bold'-->
          <!--}"-->
        <!--&gt;-->
          <!--{{hire.name}}-->
        <!--</span>-->
        <!--,&nbsp;-->
        <!--<span :style="{-->
            <!--'font-size':'9pt'-->
          <!--}"-->
        <!--&gt;-->
          <!--{{hire.position}}-->
        <!--</span>-->
      <!--</div>-->

      <!--New Code to Dynamically render New Hires-->
       <table
        :style="{
        'width':'100%',

      }"
    >
      <tr v-for="n in Math.ceil(newHires.length / 3, 10)"

      >
        <td v-if="newHires[(n-1)*3]"
            :style="{
              'padding-bottom':'20px',
              'padding-left':'30px',

            }"
          >
            <div>
            <new-hire-card :name="newHires[(n-1)*3].name"
            :position="newHires[(n-1)*3].position"
            :img="newHires[(n-1)*3].image"
            />
            </div>
        </td>
        <td v-if="newHires[(n-1)*3+1]"
            :style="{
              'padding-bottom':'20px',
              'padding-left':'30px',

            }"
          >
            <div>
     <div>
            <new-hire-card :name="newHires[(n-1)*3+1].name"
            :position="newHires[(n-1)*3+1].position"
            :img="newHires[(n-1)*3+1].image"
            />
            </div>
            </div>
        </td>
        <td v-if="newHires[(n-1)*3+2]"
            :style="{
              'padding-bottom':'20px',
              'padding-left':'30px',

            }"
          >
             <div>
            <new-hire-card :name="newHires[(n-1)*3+2].name"
            :position="newHires[(n-1)*3+2].position"
            :img="newHires[(n-1)*3+2].image"
            />
            </div>
        </td>

      </tr>
    </table>



    </div>
  </div>

</template>
<script type="text/javascript">
  import SectionTitle from "./SectionTitle.vue"
  import NewHireCard from './NewHireCard.vue'
  export default {
    components: {
      SectionTitle,
      NewHireCard,
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
      barColorSolid:{
        default:'blue',
        type:String
      },
      titleText:{
        default:"new hires",
        type:String
      },
      newHires:{
        default:function(){
          return [
            {
              name:"Lucille J. Byrd",
              position:"Senior Communications Liason",
              img: "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg",
            },
            {
              name:"Steven A. Rew",
              position:"Dynamic Interactions Engineer",
              img: "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg",
            },
            {
              name:"Jose L. Wyatt",
              position:"Product Paradigm Liason",
              img: "https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg",
            },
            {
              name:"Felipe P. Zylstra",
              position:"National Web Agent",
              img:"https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg",
            },
            {
              name:"Sherman J. Rodriguez",
              position:"Central Creative Developer",
              img:"https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg",
            },
            {
              name:"Terry E. Tenney",
              position:"Legacy Marketing Architect",
              img:"https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg",
            },
            {
              name:"Gabrielle K. Farrell",
              position:"Customer Accounts Specialist",
              img:"https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg",
            }
          ]
        },
        type:Array
      }
    }
  }
</script>
