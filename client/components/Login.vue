<template>
<div class="nc-container nc-flex nc-fullscreen">

  <section class="nc-halfscreen nc-fullheight"></section>

  <section class="nc-halfscreen nc-flex nc-flex--center-children">

    <form class="nc-login nc-login__container" @submit.prevent>

      <figure class="nc-login__logo">
        <img src="#" class="nc-brand nc-brand--md" alt="NewCart Logo" />
      </figure>

    </form>

  </section>
</div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
