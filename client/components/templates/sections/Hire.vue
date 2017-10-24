<template>
  <div
    :style="{
      'width':'130px'
    }"
    width="130"
  >
    <div style="text-align: left">
      <img :style="{
          'width':'130px',
          'height':'130px'
        }"
           width="130"
           height="130"
           :src="img"
      />
    </div>
    <div style="text-align: left"
         :style="{
          'width':'130px'
        }"
         width="130"
    >


      <table style="margin: 0; padding: 0">

        <tr><td width="130">
        <div style="max-width:130px; margin:0 auto;"
             :style="{
            'width':'130px'
          }"
        >
          <span width="130" style="font-weight: bold;margin: 0;padding: 0;">{{name}}</span>
        </div>
        </td></tr>

        <tr><td width="130">
      <div style="max-width:130px; margin:0 auto;"
           :style="{
          'width':'130px'
        }"
      >
        <span width="130" style="margin: 0;padding: 0;">{{position}}</span>
      </div>
        </td></tr>

        <tr><td width="130">
      <div style="max-width:130px; margin:0 auto;"
           :style="{
          'width':'130px'
        }"
      >
        <span width="130" style="font-style: italic;margin: 0;padding: 0;">{{location}}</span>
      </div>
        </td></tr>
      </table>

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
