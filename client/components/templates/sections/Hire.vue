<template>
  <table
    :style="{
      'width':'130px',
      'border-collapse':'collapse'
    }"
    width="130"
  >
    <tr style="text-align: left">
      <td>
        <img :style="{
            'width':'130px',
            'height':'130px'
          }"
            :src="img"
        />
      </td>
    </tr>
    <tr style="text-align: left">
      <td>
        <span style="font-weight: bold">{{name}}</span>
        <br/>
        <span>{{position}}</span>
        <br/>
        <span style="font-style: italic">{{location}}</span>
      </td>
    </tr>
  </table>
</template>

<script>
  export default {
    components:{},
    computed:{},
    methods:{},
    props:{
      name:{
        default:"Name",
        type: String
      },
      position:{
        default:'Position',
        type: String
      },
      location:{
        default:'Location',
        type: String
      },
      img:{
        default:'https://firebasestorage.googleapis.com/v0/b/projectoracle-b9c0e.appspot.com/o/hire_placeholder.png?alt=media&token=0b2ea8a2-2c1c-4f7b-af1f-0c2adcbf6fba',
        type: String
      }
    }


  }
</script>
