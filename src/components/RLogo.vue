<script>
export default {
  name: 'RLogo',
};
</script>

<template>
  <router-link to="/"><img class="logo" src="@/assets/img/logo.png"/></router-link>
</template>

<style scoped>
  a {
    @apply inline-block;
  }
</style>