<template lang="html">

  <div :style="{
    'margin':'auto',
    'width':'100%',
    'height':'auto',
    'backgroundColor':backgroundColor,
    'margin-bottom':'20px'
    }"
  >
    <img :style="{
      'display':'block',
      'margin':'auto',
      'width':'100%',
      'height':'auto !important'
      }"
      :src="logo"
      alt="Logo"
    />
  </div>

</template>
<script type="text/javascript">
  export default {
    components: {
    },
    computed: {
    },
    methods: {
    },
    props: {
      backgroundColor: {
          default: '#1700fc',
          type: String
      },
      logo: {
        default: 'https://firebasestorage.googleapis.com/v0/b/newscart-a7f77.appspot.com/o/newscart-logo-white.png?alt=media&token=b98c8b73-0f14-46c0-b6ee-c85a05b00df4',
        type: String
      }
    }
  }
</script>
