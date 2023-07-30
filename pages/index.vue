<template>
  <div>
    <carusel />
    <banner-carusel />
    <banner/>
    <home-products />
    <paralax />
    <home-about />
    <info />
    <compony />
    <call-back />
  </div>
</template>

<script>
import Carusel from "../components/Carusel.vue";
import BannerCarusel from "../components/BannerCarusel.vue";
import Banner from "../components/Banner.vue";

import HomeProducts from "../components/HomeProducts.vue";
import Paralax from "../components/Paralax.vue";
import HomeAbout from "../components/HomeAbout.vue";
import Info from "../components/Info.vue";
import Compony from "../components/Compony.vue";
import CallBack from "../components/CallBack.vue";



export default {
  name: "IndexPage",
  components: {
    Carusel,
    BannerCarusel,
    Banner,
    HomeProducts,
    Paralax,
    HomeAbout,
    Info,
    Compony,
    CallBack,
  },
};
</script>
