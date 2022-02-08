<script>
export default {
  name: 'Base',
};
</script>

<template>
  <nav>Nav</nav>
  <main id="main-content">
    <slot/>
  </main>
  <footer>
    Footer
  </footer>
</template>