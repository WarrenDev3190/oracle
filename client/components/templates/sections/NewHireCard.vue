<template>
  <div>
    <div style="text-align: center">
      <img :style="{
          'width':'130px',
          'height':'130px'
        }"
           :src="img"
      />
    </div>
    <div style="text-align: center">
      <span>{{name}}</span>
      <br>
      <span>{{position}}</span>
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
        type: String,
      },
      position:{
        default:'Position',
        type: String,
      },
      img:{
        default:'https://image.freepik.com/free-icon/business-person-silhouette-wearing-tie_318-49988.jpg',
        type: String,
      }
    }


  }
</script>
