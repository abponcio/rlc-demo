<script>
import RLogo from '@/components/RLogo.vue';

import RoundCircle from '@/assets/svg/round-circle.svg?raw';
import CircleWhite from '@/assets/svg/circle-white.svg?raw';
import Arrow from '@/assets/svg/arrow.svg?raw';
import Chevron from '@/assets/svg/chevron.svg?raw';

import MapPin from '@/assets/svg/map-pin.svg?raw';
import PHMap from '@/assets/svg/ph-map.svg?raw';
import MapAsia from '@/assets/svg/map-asia.svg?raw';
import CircleMap from '@/assets/svg/circle-map.svg?raw';
import Glow from '@/assets/svg/glow.svg?raw';

import Quote from '@/assets/svg/quote.svg?raw';
import RButton from '@/components/RButton.vue';

import ScrollMagic from 'scrollmagic';
import velocity from 'velocity-animate/velocity';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.velocity';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

export default {
  name: 'Homepage',
  data: () => ({
    RoundCircle,
    Quote,
    MapPin,
    PHMap,
    MapAsia,
    Glow,
    CircleMap,
    CircleWhite,
    Arrow,
    Chevron,
  }),
  components: {
    RLogo,
    RButton,
  },
  methods: {
    heroScene(controller) {
      new ScrollMagic.Scene({
        triggerElement: "#hero",
        triggerHook: 0, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
      })
      .setVelocity("#hero", {'background-color': '#ffffff'}, {duration: 400})
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
    },
  },
  mounted() {
    // init controller
    const controller = new ScrollMagic.Controller();

    this.heroScene(controller);

    // // build scenes


    // // build scenes
    // new ScrollMagic.Scene({
    //     triggerElement: "#message",
    //     triggerHook: 0, // show, when scrolled 10% into view
    //     duration: "160%", // hide 10% before exiting view (80% + 10% from bottom)
    //     offset: -600 // move trigger to center of element
    //   })
    //   .setClassToggle("#message", "visible") // add class to reveal
    //   .addIndicators() // add indicators (requires plugin)
    //   .addTo(controller);

    // const controller2 = new ScrollMagic.Controller({
    // 	globalSceneOptions: {
    // 		triggerHook: 'onLeave',
    // 		duration: "100%" // this works just fine with duration 0 as well
    // 	}
    // });

    // const slides = document.querySelectorAll("section");

    // // create scene for every slide
    // for (let i=0; i<slides.length; i++) {
    // 	new ScrollMagic.Scene({
    // 			triggerElement: slides[i]
    // 		})
    // 		.setPin(slides[i], {pushFollowers: false})
    // 		// .addIndicators() // add indicators (requires plugin)
    // 		.addTo(controller2);
    // }
  },
}
</script>
<template>
  <section id="hero" class="bg-white">
    <div class="container flex z-10">
      <div class="text-center">
        <RLogo class="max-w-[41rem] mb-[1.8rem]"/>
        <h1 class="text-big font-bold leading-[9.4rem] uppercase">Annual Report</h1>
        <div class="text-jumbo text-rlc-cyan leading-none">2021</div>
      </div>
    </div>
    <div class="absolute right-0 inset-y max-h-screen">
      <img src="@/assets/hero-collage/images-collage.png" class="max-h-screen object-cover" alt="">
    </div>
  </section>
  <section id="message">
    <div class="container max-w-[100rem] grid grid-cols-2 place-content-center gap-[6.2rem]">
      <div>
        <div class="flex items-center justify-center gap-[6rem]">
          <div class="relative">
            <img class="max-w-[24rem]" src="@/assets/img/owners/lance.png" alt="">
            <Vector :src="RoundCircle" class="absolute inset-0 scale-[1.5]"/>
          </div>
          <div>
            <h4 class="text-rlc-blue">Lance Y. Gokongwei</h4>
            <small>Chairman</small>
          </div>
        </div>
        <div class="flex flex-row-reverse items-center justify-center gap-[6rem]">
          <div class="relative">
            <img class="max-w-[24rem]" src="@/assets/img/owners/frederick.png" alt="">
            <Vector :src="RoundCircle" class="absolute inset-0 scale-[1.5] rotate-180"/>
          </div>
          <div>
            <h4 class="text-rlc-blue">Lance Y. Gokongwei</h4>
            <small>Chairman</small>
          </div>
        </div>
      </div>
      <div class="text-center max-w-[50rem]">
        <h1 class="mb-[5.6rem] text-rlc-blue">Message to Shareholders</h1>
        <div class="py-[4rem] px-[6rem] border border-black rounded-[1rem] text-justify leading-[3.1rem] relative">
          <Vector :src="Quote" class="absolute bottom-[-2rem] right-[-2rem] w-[7.3rem] p-[1rem] bg-white"/>
          <Vector :src="Quote" class="absolute top-[-2rem] left-[-2rem] w-[7.3rem] p-[1rem] rotate-180 bg-white"/>
          <p class="italic">
            On the back of a strong start in 2021, Robinsons Land Corporation (RLC) was poised for a record year. Like many companies,
            however, the business was confronted with unprecedented challenges in the face of compounding crises. The onslaught of natural
            calamities and the COVID- 19 pandemic disrupted supply chains, business operations, and workplace structures,
            forcing a shift in priorities and short-term strategies.
          </p>

          <div class="mt-[2rem] text-center">
            <RButton>See Full Message</RButton>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="presence" class="bg-rlc-blue text-white">
    <Vector :src="MapAsia" class="absolute inset-y-0 left-0" svg-class="h-screen w-screen"/>
    <div class="container max-w-[110rem] grid grid-cols-2 place-items-center gap-[9.2rem]">
      <div class="relative">
        <Vector :src="PHMap" class="map-bg relative z-10" svg-class="w-[45rem] h-[67rem]"/>
        <Vector :src="MapPin" class="z-20 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" svg-class="w-[6.5rem] h-[9.5rem]"/>
        <Vector :src="CircleMap" class="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
        <Vector :src="Glow" class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
      </div>
      <div>
        <h1 class="text-extra-big text-rlc-cyan leading-[10rem] uppercase text-bold">GROWING PRESENCE</h1>
        <p class="text-[3.6rem] pb-[2rem]">From Ilocos to South Cotabato</p>
        <div class="border-t pt-[2rem] border-rlc-cyan text-justify">
          Lifestyle Centers  |  Residences  |  Housing & Subdivisions  |  Offices  |  Hotels and Resorts  |  Destination Estates  |  Logistics & Industrial Facilities
        </div>
        <div class="mt-[2rem]">
          <RButton>
            <div class="flex items-center gap-[2rem]">
              View Map <Vector :src="Chevron" svg-class="w-[0.7rem] rotate-180"/>
            </div>
          </RButton>
        </div>
      </div>
    </div>
  </section>
  <section id="financial">
    <div class="container max-w-[100rem] self-start text-center py-[6rem]">
      <h1>Financial Highlights</h1>

      <div class="mt-[5.5rem] grid grid-cols-2 grid-rows-2 gap-[3rem] text-left">
        <div class="price-box">
          <div>
            <p class="text-[2rem] font-bold text-rlc-blue uppercase">Total Assets</p>
            <p class="price-text">₱215.20</p>
            <p class="text-[2rem] font-bold text-rlc-blue uppercase">Billion</p>
          </div>
          <div>icon</div>
        </div>
        <div class="price-box">
          <div>
            <p class="text-[2rem] font-bold text-rlc-blue uppercase">Gross Revenues</p>
            <p class="price-text">₱25.4</p>
            <p class="text-[2rem] font-bold text-rlc-blue uppercase">Billion</p>
          </div>
          <div>icon</div>
        </div>
        <div class="price-box">
          <div>
            <p class="text-[2rem] font-bold text-rlc-blue uppercase">Net Income</p>
            <p class="price-text">₱5.26</p>
            <p class="text-[2rem] font-bold text-rlc-blue uppercase">Billion</p>
          </div>
          <div>icon</div>
        </div>
        <div class="price-box">
          <div>
            <p class="text-[2rem] font-bold text-rlc-blue uppercase">STOCKHOLDERS' EQUITY</p>
            <p class="price-text">102.272</p>
            <p class="text-[2rem] font-bold text-rlc-blue uppercase">Billion</p>
          </div>
          <div>icon</div>
        </div>
      </div>
      <div class="text-center mt-[4rem]">
        <RButton>
          <div class="flex items-center gap-[2rem]">
            More Info <Vector :src="Chevron" svg-class="w-[0.7rem] rotate-180"/>
          </div>
        </RButton>
      </div>
    </div>
  </section>
  <section id="rcr">
    <img src="@/assets/img/image-rcr.png" alt="" class="absolute inset-0 object-cover">
    <div class="absolute inset-0 object-cover silver-gradient  z-10"></div>
    <div class="container max-w-[120rem] self-start text-center py-[6rem] z-20">
      <img class="mx-auto max-w-[28rem]" src="@/assets/img/rcr-logo.png" alt="">
      <p class="text-[2.4rem] text-rlc-blue mt-[2.5rem]">Made its trading debut on the Philippine Stock Exchange on September 2021 as the</p>
      <h2 class="text-[5.5rem] font-bold flex items-center justify-center gap-[2rem] text-rlc-blue">LARGEST<span class="text-[3rem]">•</span>BIGGEST<span class="text-[3rem]">•</span>WIDEST<span class="text-[3rem]">•</span>LONGEST</h2>

      <div class="flex items-center justify-center gap-[6rem] mt-[4rem]">
        <div class="circle rounded-full w-[20rem] p-[2rem] bg-white text-center aspect-square text-rlc-blue flex flex-col justify-center items-center relative">
          <Vector :src="CircleWhite" class="absolute inset-0 scale-[1.5]"/>
          <p class="font-bold text-[4.5rem] leading-none"><sup class="font-arial">₱</sup>64.2</p>
          <p class="font-bold text-[2.2rem]">Billion</p>
          <p class="uppercase text-[1.3rem]">Market capitalization*</p>
        </div>

        <div class="circle rounded-full w-[20rem] p-[2rem] bg-rlc-blue-500 text-center aspect-square text-white flex flex-col justify-center items-center relative">
          <Vector :src="CircleWhite" class="absolute inset-0 scale-[1.5]"/>
          <p class="font-bold text-[4.5rem] leading-none"><sup class="font-arial">₱</sup>64.2</p>
          <p class="font-bold text-[2.2rem]">Billion</p>
          <p class="uppercase text-[1.3rem]">Market capitalization*</p>
        </div>

        <div class="circle rounded-full w-[20rem] p-[2rem] bg-white text-center aspect-square text-rlc-blue flex flex-col justify-center items-center relative">
          <Vector :src="CircleWhite" class="absolute inset-0 scale-[1.5]"/>
          <p class="font-bold text-[4.5rem] leading-none"><sup class="font-arial">₱</sup>64.2</p>
          <p class="font-bold text-[2.2rem]">Billion</p>
          <p class="uppercase text-[1.3rem]">Market capitalization*</p>
        </div>

        <div class="circle rounded-full w-[20rem] p-[2rem] bg-rlc-blue-500 text-center aspect-square text-white flex flex-col justify-center items-center relative">
          <Vector :src="CircleWhite" class="absolute inset-0 scale-[1.5]"/>
          <p class="font-bold text-[4.5rem] leading-none"><sup class="font-arial">₱</sup>64.2</p>
          <p class="font-bold text-[2.2rem]">Billion</p>
          <p class="uppercase text-[1.3rem]">Market capitalization*</p>
        </div>
      </div>

      <div class="text-center mt-[6rem]">
        <RButton>
          <div class="flex items-center gap-[2rem]">
            More Info <Vector :src="Chevron" svg-class="w-[0.7rem] rotate-180"/>
          </div>
        </RButton>
      </div>
    </div>
  </section>
  <section id="businesses" class="text-white">
    <div class="mx-[4rem] self-start my-[6rem] relative z-10">
      <h1 class="absolute left-0 top-0">Our Businesses</h1>
    </div>
    <div class="flex justify-evenly gap-[0.5rem] bg-rlc-blue absolute inset-0 hoverable">
      <div class="flex-auto grid place-items-center relative">
        <img src="@/assets/img/businesses/b1.png" alt="" class="absolute inset-0 object-cover h-full w-full">
        <div class="content relative px-[2.2rem] text-center z-20">
          <p class="text-[2.2rem] mb-[2.2rem]">Commercial Centers</p>
          <Vector :src="Arrow" class="w-full" svg-class="w-[5.5rem] mx-auto"/>
        </div>
      </div>
      <div class="flex-auto grid place-items-center relative">
        <img src="@/assets/img/businesses/b2.png" alt="" class="absolute inset-0 object-cover h-full w-full">
        <div class="content relative px-[2.2rem] text-center z-20">
          <p class="text-[2.2rem] mb-[2.2rem]">Commercial Centers</p>
          <Vector :src="Arrow" class="w-full" svg-class="w-[5.5rem] mx-auto"/>
        </div>
      </div>
      <div class="flex-auto grid place-items-center relative">
        <img src="@/assets/img/businesses/b3.png" alt="" class="absolute inset-0 object-cover h-full w-full">
        <div class="content relative px-[2.2rem] text-center z-20">
          <p class="text-[2.2rem] mb-[2.2rem]">Commercial Centers</p>
          <Vector :src="Arrow" class="w-full" svg-class="w-[5.5rem] mx-auto"/>
        </div>
      </div>
      <div class="flex-auto grid place-items-center relative">
        <img src="@/assets/img/businesses/b4.png" alt="" class="absolute inset-0 object-cover h-full w-full">
        <div class="content relative px-[2.2rem] text-center z-20">
          <p class="text-[2.2rem] mb-[2.2rem]">Commercial Centers</p>
          <Vector :src="Arrow" class="w-full" svg-class="w-[5.5rem] mx-auto"/>
        </div>
      </div>
      <div class="flex-auto grid place-items-center relative">
        <img src="@/assets/img/businesses/b5.png" alt="" class="absolute inset-0 object-cover h-full w-full">
        <div class="content relative px-[2.2rem] text-center z-20">
          <p class="text-[2.2rem] mb-[2.2rem]">Commercial Centers</p>
          <Vector :src="Arrow" class="w-full" svg-class="w-[5.5rem] mx-auto"/>
        </div>
      </div>
      <div class="flex-auto grid place-items-center relative">
        <img src="@/assets/img/businesses/b6.png" alt="" class="absolute inset-0 object-cover h-full w-full">
        <div class="content relative px-[2.2rem] text-center z-20">
          <p class="text-[2.2rem] mb-[2.2rem]">Commercial Centers</p>
          <Vector :src="Arrow" class="w-full" svg-class="w-[5.5rem] mx-auto"/>
        </div>
      </div>
      <div class="flex-auto grid place-items-center relative">
        <img src="@/assets/img/businesses/b7.png" alt="" class="absolute inset-0 object-cover h-full w-full">
        <div class="content relative px-[2.2rem] text-center z-20">
          <p class="text-[2.2rem] mb-[2.2rem]">Commercial Centers</p>
          <Vector :src="Arrow" class="w-full" svg-class="w-[5.5rem] mx-auto"/>
        </div>
      </div>
    </div>
  </section>
  <section id="responsibility">
    <div class="container self-start py-[6rem] relative text-center">
      <h1 class="text-rlc-blue">Corporate Social Responsibility</h1>

      <div class="my-[10rem] max-w-[99rem] mx-auto px-[2rem] flex justify-center items-center relative r-circles">
        <Vector :src="Chevron" class="absolute left-0 top-[50%] translate-y-[-50%]" svg-class="w-[1.2rem]"/>
        <Vector :src="Chevron" class="absolute right-0 top-[50%] translate-y-[-50%]" svg-class="w-[1.2rem] rotate-180"/>
        <div class="w-[26rem] rounded-full aspect-square bg-slate-400 border-[0.6rem] border-rlc-gray"></div>
        <div class="w-[26rem] rounded-full aspect-square bg-slate-400 border-[0.6rem] border-rlc-gray active scale-[1.5]"></div>
        <div class="w-[26rem] rounded-full aspect-square bg-slate-400 border-[0.6rem] border-rlc-gray"></div>
      </div>
      <div class="text max-w-[50rem] mx-auto">
        <h3 class="text-[2.6rem] font-normal">RLove Program</h3>
        <p>
          The RLove Program spearheads various social welfare and advocacy projects through philanthropy, volunteerism, and partnerships.
          It supports meaningful causes in pursuit of enriching lives and shaping a better future for communities in which Robinsons Land Corporation (RLC) operates.
        </p>
        <div class="text-center mt-[6rem]">
          <RButton>
            <div class="flex items-center gap-[2rem]">
              Learn More <Vector :src="Chevron" svg-class="w-[0.7rem] rotate-180"/>
            </div>
          </RButton>
        </div>
      </div>
    </div>
  </section>
  <section id="governance" class="overflow-hidden">
    <div class="container self-start flex relative gap-[3rem] text-center">
      <div class="relative min-w-[34rem]">
        <img src="@/assets/img/building.png" class="object-contain h-screen object-bottom" alt="">
      </div>
      <div class="py-[6rem] text-left">
        <h1 class="text-rlc-blue">Corporate Governance</h1>
        <div class="mt-[5.5rem] grid grid-cols-2 grid-rows-2  gap-[3rem] text-left">
          <div class="price-box">
            <div>
              <img src="@/assets/img/governance/enterprise.png" class="max-w-[13.6rem]" alt="">
            </div>
            <div>
              <p class="text-[2.2rem] mb-[1.7rem] font-bold text-rlc-blue">Our Commitment to Good Governance</p>
              <div>
                <RButton>
                  <div class="flex items-center gap-[2rem]">
                    Learn More <Vector :src="Chevron" svg-class="w-[0.7rem] rotate-180"/>
                  </div>
                </RButton>
              </div>
            </div>
          </div>
          <div class="price-box">
            <div>
              <img src="@/assets/img/governance/enterprise.png" class="max-w-[13.6rem]" alt="">
            </div>
            <div>
              <p class="text-[2.2rem] mb-[1.7rem] font-bold text-rlc-blue">Our Commitment to Good Governance</p>
              <div>
                <RButton>
                  <div class="flex items-center gap-[2rem]">
                    Learn More <Vector :src="Chevron" svg-class="w-[0.7rem] rotate-180"/>
                  </div>
                </RButton>
              </div>
            </div>
          </div>
          <div class="price-box">
            <div>
              <img src="@/assets/img/governance/enterprise.png" class="max-w-[13.6rem]" alt="">
            </div>
            <div>
              <p class="text-[2.2rem] mb-[1.7rem] font-bold text-rlc-blue">Our Commitment to Good Governance</p>
              <div>
                <RButton>
                  <div class="flex items-center gap-[2rem]">
                    Learn More <Vector :src="Chevron" svg-class="w-[0.7rem] rotate-180"/>
                  </div>
                </RButton>
              </div>
            </div>
          </div>
          <div class="price-box">
            <div>
              <img src="@/assets/img/governance/enterprise.png" class="max-w-[13.6rem]" alt="">
            </div>
            <div>
              <p class="text-[2.2rem] mb-[1.7rem] font-bold text-rlc-blue">Our Commitment to Good Governance</p>
              <div>
                <RButton>
                  <div class="flex items-center gap-[2rem]">
                    Learn More <Vector :src="Chevron" svg-class="w-[0.7rem] rotate-180"/>
                  </div>
                </RButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="directors">
    <div>
      <div class="p-[4rem]">
        <h1 class="text-rlc-blue mb-[2rem]">Board of Directors</h1>
        <div class="flex flex-wrap justify-center gap-[2rem] items-center">
          <div class="max-w-[25.3rem] min-w-[25.3rem] p-[0.5rem] border-[0.2rem] border-rlc-cyan rounded-[2rem]">
            <img src="@/assets/img/board/board1.png" alt="">
          </div>
          <div class="max-w-[25.3rem] min-w-[25.3rem] p-[0.5rem] border-[0.2rem] border-rlc-cyan rounded-[2rem]">
            <img src="@/assets/img/board/board1.png" alt="">
          </div>
          <div class="max-w-[25.3rem] min-w-[25.3rem] p-[0.5rem] border-[0.2rem] border-rlc-cyan rounded-[2rem]">
            <img src="@/assets/img/board/board1.png" alt="">
          </div>
          <div class="max-w-[25.3rem] min-w-[25.3rem] p-[0.5rem] border-[0.2rem] border-rlc-cyan rounded-[2rem]">
            <img src="@/assets/img/board/board1.png" alt="">
          </div>
          <div class="max-w-[25.3rem] min-w-[25.3rem] p-[0.5rem] border-[0.2rem] border-rlc-cyan rounded-[2rem]">
            <img src="@/assets/img/board/board1.png" alt="">
          </div>
          <div class="max-w-[25.3rem] min-w-[25.3rem] p-[0.5rem] border-[0.2rem] border-rlc-cyan rounded-[2rem]">
            <img src="@/assets/img/board/board1.png" alt="">
          </div>
          <div class="max-w-[25.3rem] min-w-[25.3rem] p-[0.5rem] border-[0.2rem] border-rlc-cyan rounded-[2rem]">
            <img src="@/assets/img/board/board1.png" alt="">
          </div>
          <div class="max-w-[25.3rem] min-w-[25.3rem] p-[0.5rem] border-[0.2rem] border-rlc-cyan rounded-[2rem]">
            <img src="@/assets/img/board/board1.png" alt="">
          </div>
          <div class="max-w-[25.3rem] min-w-[25.3rem] p-[0.5rem] border-[0.2rem] border-rlc-cyan rounded-[2rem]">
            <img src="@/assets/img/board/board1.png" alt="">
          </div>
        </div>
      </div>

      <div class="audits py-[10rem] relative">
        <div class="absolute inset-0 fader"></div>
        <div class="place-items-center grid relative z-10">
          <div class="py-[5rem] px-[7rem] rounded-[2rem] audit-box">
            <h1 class="text-white">Audited Financial Statements</h1>
            <div class="text-center mt-[3.5rem]">
              <RButton round slim theme="red">
                <div class="flex items-center gap-[2rem]">
                  View Financial Statements <Vector :src="Chevron" class="arrow-white" svg-class="w-[0.7rem] rotate-180"/>
                </div>
              </RButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  section {
    @apply grid min-h-screen w-screen items-center relative;
  }

  #hero {
    @apply text-white px-[2rem] place-self-start ;

    background: linear-gradient(117.81deg, #41C4FF -25.81%, transparent 26.09%);
    background-color: #021B64;
    transition: all 1s ease-in-out;

    &.visible {
      background-color: #ffffff;
    }
  }

  #message {
    background: linear-gradient(121.77deg, #1656A3 -1.6%, transparent 36.35%);
  }

  #financial {
    background: linear-gradient(121.77deg, #1656A3 -1.6%, #EAF8FF 36.35%);

    .price-box {
      @apply rounded-[2rem] bg-white py-[2rem] px-[5rem] w-full min-h-[17rem] flex justify-between items-center;
      box-shadow: 0px 4px 54px rgba(0, 0, 0, 0.11);

      .price-text {
        @apply text-[7rem] leading-none font-bold font-arial;
        color: rgba(65, 196, 255, 0.7);
        text-shadow: 1px 4px 6px #def, 0 0 0 #5D95D6, 1px 5px 6px #def;
      }
    }
  }

  #governance {
    background: linear-gradient(121.77deg, #1656A3 -1.6%, transparent 36.35%);

    .price-box {
      @apply rounded-[2rem] bg-white py-[4rem] px-[3rem] border-[0.2rem] border-rlc-gray-800 w-full min-h-[17rem] flex justify-between items-center gap-[3rem];
      box-shadow: 0px 4px 54px rgba(0, 0, 0, 0.11);
    }
  }

  #rcr {
    @apply overflow-hidden;
    .silver-gradient {
      background: linear-gradient(106.39deg, rgba(175, 175, 175, 0.8) 13.55%, rgba(255, 255, 255, 0.8) 19.27%, rgba(234, 234, 234, 0.8) 24.22%, rgba(234, 234, 234, 0.8) 76.43%, rgba(255, 255, 255, 0.8) 80.17%, rgba(175, 175, 175, 0.8) 86.72%);
    }
  }

  #responsibility {
    .r-circles {
      .active {
        @apply border-rlc-cyan;
        box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.25);
      }
    }
  }

  .audit-box {
    background: linear-gradient(237.15deg, #001A5B 5.61%, #41C4FF 96.5%);
  }

  .audits {
    background: url(@/assets/img/graphs.png) no-repeat;
    background-size: cover;

    .fader {
      background: linear-gradient(0, transparent, #ffffff 100%),
    }
  }

  .arrow-white:deep(svg *) {
    fill: #ffffff;
  }

  .hoverable {
    .grid {
      @apply px-0 cursor-pointer;
      transition: all 500ms ease-in-out;

      &:hover {
        @apply px-[10rem];
      }
    }
  }

  @keyframes bluewhite {
    from {
      background-color: #021B64
    }
    to {
      background-color: #ffffff
    }
  }

  @keyframes whiteblue {
    from {
      background-color: #ffffff
    }
    to {
      background-color: #021B64
    }
  }
</style>