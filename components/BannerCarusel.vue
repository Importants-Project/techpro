<template>
  <div class="greyLightBg">
    <div class="contanier">
      <VueSlickCarousel
      :speed="getVendorsSetting.auto_play_speed"
        :autoplaySpeed="getVendorsSetting.auto_play_speed"
        style="height: 171px"
        class="bannerCarusel"
        v-bind="slickOptions"
        v-if="getVendors.length"
      >
        <div disabled v-for="vendor in getVendors" :key="vendor.id">
          <img
            class="bannerImg"
            style="width: 100%; height: 100px"
            draggable="false"
            :src="vendor.image"
            alt="bannerImg"
          />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import { mapGetters } from "vuex";

export default {
  name: "BannerCarusel",
  components: { VueSlickCarousel },
  data() {
    return {
      slickOptions: {
        arrows: false,
        dots: false,
        autoplay:true,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus:true,
        slidesToShow: 5,
        draggable: true,
        swipeToSlide: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 1120,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
  async fetch() {
    await this.$store.dispatch("vendors/fetchAllVendors");
    await this.$store.dispatch("vendors/fetchAllVendorsSetting");
  },
  computed: {
    ...mapGetters({
      getVendors: "vendors/getVendors",
      getVendorsSetting: "vendors/getVendorsSetting",
    }),
  },
};
</script>

<style  >
.bannerCarusel .slick-track {
  display: flex !important;
  align-items: center !important;
  margin: 1.5rem 0;
}

.bannerImg{
    width: 150px;
    height: 100px;
    object-fit: contain;
}
</style>
