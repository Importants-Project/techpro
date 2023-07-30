<template>
  <div class="contanier">
    <div class="about grid gap-x-8 grid-cols-1 lg:grid-cols-2 mb-20">
      <div class="about-info mb-5">
        <h2 class="aboutTitle text-left font-bold">About Us</h2>
        <div style="font-family: 'Open Sans';"  v-html="aboutData.short_content" class="text-sm inheritColor leading-7">
        </div>
        <a style="font-family: 'Open Sans', sans-serif; " class="hover:underline hover:underline-offset-4 text-sm brownColor leading-7  font-bold" href="/about">More</a>
      </div>
      <div class="about-img mt-14">
        <img :src="aboutData.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  async fetch() {
    await this.$store.dispatch("about/fetchContent");
  },
  computed: {
    ...mapGetters({
      aboutData: "about/aboutData",
    }),
  },
};
</script>
