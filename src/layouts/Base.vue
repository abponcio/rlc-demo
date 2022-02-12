<script>
import Download from '@/assets/svg/download.svg?raw';
import RLogo from '@/components/RLogo.vue';
import Vector from '@/components/Vector.vue';
export default {
  name: 'Base',
  components: {
    RLogo,
    Vector
  },
  data: () => ({
    Download,
  }),
};
</script>

<template>
  <!-- <nav>Nav</nav> -->
  <main id="main-content">
    <slot/>
  </main>
  <footer class="grid grid-cols-4 px-[4rem] py-[7rem] bg-rlc-blue text-white gap-[7rem]">
    <div>
      <RLogo class="max-w-[22rem]"/>

      <div class="text-[2.5rem] mt-[2rem] leading-none">
        Annual Report<br/>
        <span class="text-rlc-cyan">2021</span>
      </div>
    </div>
    <div>
      <ul>
        <li class="py-[0.5rem]">Company Profile</li>
        <li class="py-[0.5rem]">Message to Shareholders</li>
        <li class="py-[0.5rem]">Our Business Units</li>
        <li class="py-[0.5rem]">Corporate Social Responsibility</li>
      </ul>
    </div>
    <div>
      <ul>
        <li class="py-[0.5rem]">Corporate Governance</li>
        <li class="py-[0.5rem]">Board of Directors</li>
        <li class="py-[0.5rem]">Audited Financial Statements</li>
      </ul>
    </div>
    <div>
      <ul>
        <li class="py-[0.5rem] flex gap-[1.8rem]"><Vector :src="Download" svg-class="w-[2rem]"/>2020 Annual Report (pdf)</li>
        <li class="py-[0.5rem] flex gap-[1.8rem]"><Vector :src="Download" svg-class="w-[2rem]"/>2021 Definitive Information Statement (pdf)</li>
        <li class="py-[0.5rem] flex gap-[1.8rem]"><Vector :src="Download" svg-class="w-[2rem]"/>Sustainability Report (pdf)</li>
      </ul>
    </div>
  </footer>
</template>