<!-- Please remove this file from your project -->
<template>
  <div class="headerTop pt-12 pb-9 showDesktop">
    <div class="contanier">
      <div class="headerTop-box flex justify-between items-center">
        <div class="headerTop-logo">
          <nuxt-link to="/">
            <img
              class="headerTop-img w-80 h-12"
              src="../../assets/images/Techproloqo2022.svg"
              alt=""
            />
          </nuxt-link>
        </div>

        <div class="items-baseline flex justify-between">
          <div class="items-baseline ml-10 flex">
            <div class="mr-4 headerTop-icon">
              <img
                src="../../assets/svg/header/location.svg"
                style="width: 20px"
                alt=""
              /> 
            </div>
            <div class="headerTop-text secondery">

              <div style="font-family: 'Open Sans';" class="text-xs" v-html="settingsData.address"></div>
            </div>
          </div>

          <div class="items-baseline ml-10 flex">
            <div class="mr-4 headerTop-icon">
              <img
                src="../../assets/svg/header/clock.svg"
                style="width: 20px"
                alt=""
              />
            </div>
            <div class="headerTop-text secondery">
              <div style="font-family: 'Open Sans';" class="text-xs" v-html="settingsData.fax"></div>
            </div>
          </div>

          <div class="items-baseline ml-10 flex">
            <div class="mr-4 headerTop-icon">
              <img
                src="../../assets/svg/header/telephone.svg"
                style="width: 20px"
                alt=""
              />
            </div>
            <div class="headerTop-text secondery">
              <div style="font-family: 'Open Sans';" class="text-xs" v-html="settingsData.phone"></div>
              <div style="font-family: 'Open Sans';" class="text-xs" v-html="settingsData.email"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NuxtHeaderTop",

  async fetch() {
    await this.$store.dispatch("settings/fetchContent");
  },
  computed: {
    ...mapGetters({
      settingsData: "settings/settingsData",
    }),
  },
};
</script>
