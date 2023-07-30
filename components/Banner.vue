<template>
  <div class="contanier">
    <div class="my-20">
      <template v-if="bannerData.link !== null">
        <a target="_blank" :href="bannerData.link">
          <img :src="bannerData.image" alt="" />
        </a>
      </template>
      <template v-else>
        <nuxt-link to="/">
          <img :src="bannerData.image" alt="" />
        </nuxt-link>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  async fetch() {
    await this.$store.dispatch("banner/fetchContentBanner");
  },
  computed: {
    ...mapGetters({
      bannerData: "banner/bannerData",
    }),
  },
};
</script>
