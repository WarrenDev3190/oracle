<template>
  <div
    :style="{
      'width':'130px'
    }"
  >
    <div style="text-align: left">
      <img :style="{
          'width':'130px',
          'height':'130px'
        }"
           :src="img"
      />
    </div>
    <div style="text-align: left">
      <span style="font-weight: bold">{{name}}</span>
      <br/>
      <span>{{position}}</span>
      <br/>
      <span style="font-style: italic">{{location}}</span>
    </div>
  </div>
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
