<script>
export default {
  name: 'Hamburger',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['toggle'],
  methods: {
    toggleBurger() {
      this.$emit('toggle');
    },
  },
};
</script>
<template>
  <div id="nav-icon3" :class="{'open': open}" @click="toggleBurger">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
  #nav-icon3 {
    width: 3rem;
    height: 2.5rem;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
  }

  #nav-icon3 span {
    @apply rounded-full;
    display: block;
    position: absolute;
    height: 0.3rem;
    width: 100%;
    background: #fff;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
  #nav-icon3 span:nth-child(1) {
    top: 0;
  }

  #nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
    top: 1rem;
  }

  #nav-icon3 span:nth-child(4) {
    top: 2rem;
  }

  #nav-icon3.open span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  #nav-icon3.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon3.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon3.open span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
</style>