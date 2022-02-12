<script>
export default {
  name: 'RButton',
  props: {
    slim: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    wide: {
      type: Boolean,
      default: false,
    },
    absolute: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'cyan',
    },
    link: {
      type: String,
      default: '',
    },
  },
  computed: {
    selectedComponent() {
      if (!this.isLink) {
        return 'button';
      }

      return this.absolute ? 'a' : 'router-link';
    },
    isLink() {
      return this.link.length;
    },
    extraAttrs() {
      if (!this.isLink) {
        return {};
      }

      if (this.absolute) {
        return {
          href: this.link,
          taget: '_blank'
        };
      }

      return {
        to: this.link
      };
    },
  },
};
</script>

<template>
  <component :is="selectedComponent" v-bind="extraAttrs" class="button" :class="[theme, {'rounded-full': round}, {'wide': wide}, {'slim': slim}, {'ghost': ghost}]"><slot/></component>

</template>

<style scoped>
.button {
  @apply rounded-[1rem] font-semibold px-[3rem] py-[1.3rem] block w-full text-center;
}
.button.cyan {
  @apply bg-rlc-cyan text-rlc-blue;
}

.button.cyan:hover {
  @apply bg-rlc-cyan;
}

.button.red {
  @apply bg-rlc-red text-white;
}


.blue:not(.ghost):hover {
  @apply bg-rlc-blue;
}

.black.ghost {
  @apply border border-rlc-blue text-rlc-blue bg-transparent font-medium;
}

.black.ghost:hover {
  @apply bg-rlc-blue text-white;
}

.slim {
  @apply px-[1.2rem] py-[1rem];
}
.wide {
  @apply px-[5rem];
}

@screen md {
  .button {
    @apply inline-block w-auto;
  }
}
</style>