<script>
  import CodeIcon from '@/assets/svg/code.svg?raw';
  export default {
    name: 'Homepage',
    data: () => ({
      CodeIcon,
    }),
  }
</script>
<template>
  <h1>Homepage</h1>
  <Vector :src="CodeIcon"/>
</template>