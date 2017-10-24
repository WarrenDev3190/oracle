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

       <table
        :style="{
          'width':'100%',
          'border-collapse':'collapse'
        }"
    >
      <tr v-for="n in Math.ceil(newHires.length / 3, 10)"

      >
        <td
            align="left"
            valign="top"
            :style="{
              'padding-bottom':'20px',
              'word-wrap':'break-word'
            }"
          >
            <hire
              v-if="newHires[(n-1)*3]"
              :name="newHires[(n-1)*3].name"
              :position="newHires[(n-1)*3].position"
              :location="newHires[(n-1)*3].location"
              :img="newHires[(n-1)*3].image"
            />
            <div 
              v-else
              :style="{
                'width':'130px'
              }"
            >
            <!-- Placeholder to perserve column widths -->
            </div>
        </td>
        <td 
            align="center"
            valign="top"
            :style="{
              'padding-bottom':'20px',
              'word-wrap':'break-word'
            }"
          >
            <hire
              v-if="newHires[(n-1)*3+1]"
              :name="newHires[(n-1)*3+1].name"
              :position="newHires[(n-1)*3+1].position"
              :location="newHires[(n-1)*3+1].location"
              :img="newHires[(n-1)*3+1].image"
            />
            <div 
              v-else
              :style="{
                'width':'130px'
              }"
            >
            <!-- Placeholder to perserve column widths -->
            </div>
        </td>
        <td 
            align="right"
            valign="top"
            :style="{
              'padding-bottom':'20px',
              'word-wrap':'break-word'
            }"
          >
            <hire
              v-if="newHires[(n-1)*3+2]"
              :name="newHires[(n-1)*3+2].name"
              :position="newHires[(n-1)*3+2].position"
              :location="newHires[(n-1)*3+2].location"
              :img="newHires[(n-1)*3+2].image"
            />
            <div 
              v-else
              :style="{
                'width':'130px'
              }"
            >
            <!-- Placeholder to perserve column widths -->
            </div>
        </td>

      </tr>
    </table>

    </div>
  </div>

</template>
<script type="text/javascript">
  import SectionTitle from "./SectionTitle.vue"
  import Hire from './Hire.vue'
  export default {
    components: {
      SectionTitle,
      Hire
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
              location:"Customer Outreach",
              img: "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/hire_placeholder.png?alt=media&token=0b2ea8a2-2c1c-4f7b-af1f-0c2adcbf6fba",
            },
            {
              name:"Steven A. Rew",
              position:"Dynamic Interactions Engineer",
              location:"Employee Safety",
              img: "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/hire_placeholder.png?alt=media&token=0b2ea8a2-2c1c-4f7b-af1f-0c2adcbf6fba",
            },
            {
              name:"Jose L. Wyatt",
              position:"Product Paradigm Liason",
              location:"Product Testing",
              img: "https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/hire_placeholder.png?alt=media&token=0b2ea8a2-2c1c-4f7b-af1f-0c2adcbf6fba",
            },
            {
              name:"Felipe P. Zylstra",
              position:"National Web Agent",
              location:"IT",
              img:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/hire_placeholder.png?alt=media&token=0b2ea8a2-2c1c-4f7b-af1f-0c2adcbf6fba",
            },
            {
              name:"Sherman J. Rodriguez",
              position:"Central Creative Developer",
              location:"Idea Factory",
              img:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/hire_placeholder.png?alt=media&token=0b2ea8a2-2c1c-4f7b-af1f-0c2adcbf6fba",
            },
            {
              name:"Terry E. Tenney",
              position:"Legacy Marketing Architect",
              location:"Marketing",
              img:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/hire_placeholder.png?alt=media&token=0b2ea8a2-2c1c-4f7b-af1f-0c2adcbf6fba",
            },
            {
              name:"Gabrielle K. Farrell",
              position:"Customer Accounts Specialist",
              location:"Adjustments",
              img:"https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/hire_placeholder.png?alt=media&token=0b2ea8a2-2c1c-4f7b-af1f-0c2adcbf6fba",
            }
          ]
        },
        type:Array
      }
    }
  }
</script>
