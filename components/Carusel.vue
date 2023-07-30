<!-- Please remove this file from your project -->
<template>
  <div class="corusel" style="">
    <VueSlickCarousel
    ref="carousel"
      :arrows="true"
      :dots="false"
      :autoplay="true"
      :autoplaySpeed="sliderData.auto_play_speed"
      :fade="true"
      :pauseOnHover="true"
      :accessibility="true"
      :slidesToShow="1"
      v-if="getOwls.length"
    >
      <div v-for="owl in getOwls" :key="owl.id">
        <div class="sliderHeight">
          <div
            class="bgSliderHome"
            :style="{ 'background-image': 'url(' + owl.image + ')' }"
          ></div>
        </div>
      </div>



    </VueSlickCarousel>
    <span @click="showNext" class="prevSlider" ><i class="fa-solid fa-angle-left"></i></span>
    <span @click="showPrev" class="nextSlider"><i class="fa-solid fa-angle-right"></i></span>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import { mapGetters } from "vuex";

export default {
  name: "NuxtTutorial",
  components: { VueSlickCarousel },
  methods: {
      showNext() {
        this.$refs.carousel.next()
      },
        showPrev() {
        this.$refs.carousel.prev()
      },
    },
  async fetch() {
    await this.$store.dispatch("owls/fetchAllOwls");
        await this.$store.dispatch("slider/fetchContent");

  },
  computed: {
    ...mapGetters({
      getOwls: "owls/getOwls",
            sliderData: "slider/sliderData",

    }),
  },
};
</script>
