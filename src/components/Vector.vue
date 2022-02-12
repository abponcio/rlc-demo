<script>

export default {
  props: {
    src: {
      required: true,
      type: String,
    },
    svgClass: {
      type: String,
      default: '',
    },
  },
  watch: {
    svgClass() {
      if (this.svgClass) {
        this.applyClass();
      }
    },
  },
  mounted() {
    if (this.svgClass) { this.applyClass(); }
  },
  methods: {
    applyClass() {
      let classes = [];

      if (this.svgClass) { classes = classes.concat(this.svgClass.split(' ')); }

      while (this.$el.firstChild.classList.length > 0) { this.$el.firstChild.classList.remove(this.$el.firstChild.classList[0]); }

      this.$el.firstChild.classList.add(...classes);
    },
  },
};

</script>

<template>
  <span v-html="src" v-bind="$attrs"/>
</template>


<style>
span {
  display: inline-block;
}
</style>