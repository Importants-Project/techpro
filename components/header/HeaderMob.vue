<template>
  <div class="mobileHeader showMob">
    <div class="flex items-center justify-between p-8">
      <div class="mobileHeader-logo">
        <a  href="/"
          ><img
            src="~/assets/images/Techproloqo2022.svg"
            class="w-80 h-12 pr-5"
            alt="Techprodc"
        /></a>
      </div>
      <div
        id="menu_toggle"
        @click="toggleActive"
        :class="isActive ? 'open' : ''"
      >
        <button></button>
      </div>
    </div>
    <div class="mobilHeader-box bg-brown">
      <div class="mobileHeader-list" :class="isActive ? 'open' : 'hide'">
        <ul>
          <li v-for="(headerList) in getMenues" :key="headerList.id" class="">
             <template  v-if="headerList.link.includes('http')">
                <a
                target="_blank"
                  class="p-5 text-white"
                  :class="headerList.activeClass"
                  :href="headerList.link"
                  >{{ headerList.name }}</a
                >
              </template>
              <!-- /${headerList.id} -->
              <template v-else>
                <NuxtLink
                  class="p-5 text-white"
                  :class="headerList.activeClass"
                  :to="`${headerList.link}`"
                  >{{ headerList.name }}</NuxtLink
                >
              </template>
          
          </li>
        </ul>

        <div class="mobileHeader-info p-10 ">
        <div class="items-baseline   mb-5 flex">
          <div class="mr-4 headerTop-icon">
            <i class="fa-solid fa-phone-flip"></i>
          </div>
          <div>
            <div
              class="headerTop-text text-white text-xs"
              v-html="settingsData.phone"
            ></div>
            <div
              class="headerTop-text text-white text-xs"
              v-html="settingsData.email"
            ></div>
          </div>
        </div>

        <div class="items-baseline mb-5 flex">
          <div class="mr-4 headerTop-icon">
            <i class="fa-solid fa-clock"></i>
          </div>
          <p class="headerTop-text text-white text-xs" v-html="settingsData.fax"> </p>
        </div>
        <div class="items-baseline mb-5 flex">
          <div class="mr-4 headerTop-icon">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div
            class="headerTop-text text-white"
            v-html="settingsData.address"
          ></div>
        </div>
      </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isActive: false,

    //   headerLists: [
    //     { path: "/", name: "Home" },
    //     {
    //       path: "/vendors",
    //       name: "Vendors",
    //     },
    //     {
    //       path: "/regions",
    //       name: "Regions",
    //     },
    //     {
    //       path: "/products",
    //       name: "Products",
    //     },
    //     {
    //       path: "/news",
    //       name: "News",
    //     },
    //     {
    //       path: "/about",
    //       name: "About",
    //     },
    //     {
    //       path: "/contacts",
    //       name: "Contacts",
    //     },
    //   ],
    };
  },
  async fetch() {
    await this.$store.dispatch("settings/fetchContent");
    await this.$store.dispatch('menu/fetchAllMenues');

  },
  computed: {
    ...mapGetters({
      settingsData: "settings/settingsData",
      getMenues: 'menu/getMenues'

    }),
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
