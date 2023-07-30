<template>
  <div class="navbar bg-brown full-width showDesktop" @click="close">
    <div class="contanier">
      <div class="flex items-center justify-between">
        <div>
          <ul
            class="flex items-center justify-between navbar-list h-16 nav-list"
            style="margin: 0 0 0 -20px"
          >
            <li
              v-for="headerList in getMenues"
              :key="headerList.id"
              class="relative text-sm font-bold nav-list_item"
            >
              <!-- @click="addActive($event)" -->
              <template v-if="headerList.link.includes('http')">
                <a
                  class="p-5 text-white"
                  target="_blank"
                  :class="headerList.activeClass"
                  :href="headerList.link"
                  >{{ headerList.name }}</a
                >
              </template>
              <template v-else>
                <NuxtLink
                  class="p-5 text-white"
                  :class="headerList.activeClass"
                  :to="headerList.link"
                  >{{ headerList.name }}</NuxtLink
                >
                
              </template>
              <!-- 
              <template v-else>
                 /${headerList.id} -->
              <!-- <a
                  class="p-5 text-white"
                  :class="headerList.activeClass"
                  :href="`${headerList.link}`"
                  
                  >{{ headerList.name }}</a
                >
              </template>  -->
            </li>
          </ul>
        </div>
        <div class="flex items-center justify-between relative">
          <div class="mr-3">
            <a
              class="navbar-sosial opacity-50 mr-3"
              target="_blank"
              :href="settingsData.fb_link"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a
              class="navbar-sosial opacity-50 mr-3"
              target="_blank"
              :href="settingsData.insta_link"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              class="navbar-sosial opacity-50"
              target="_blank"
              :href="settingsData.linkedin"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <div class="border-solid border-r mx-2 h-7 opacity-50"></div>
          <div class="navbar-search ml-3">
            <span
              class="navbar-sosial opacity-50"
              @click.stop="toggleActiveSearch"
              :class="iconActive ? 'text-white opacity-100' : ''"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <div
              @click.stop
              class="pop-search-box absolute"
              :class="
                isActiveSearch
                  ? 'pop-search-box_active'
                  : 'pop-search-box_close'
              "
            >
              <custom-search />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSearch from "./CustomSearch.vue";
import { mapGetters } from "vuex";

export default {
  name: "NuxtHeaderNavbar",
  components: {
    CustomSearch,
  },

  async fetch() {
    await this.$store.dispatch("menu/fetchAllMenues");
    await this.$store.dispatch("settings/fetchContent");
  },
  computed: {
    ...mapGetters({
      getMenues: "menu/getMenues",
      settingsData: "settings/settingsData",
    }),
  },

  data() {
    return {
      isActiveSearch: false,
      iconActive: false,
    };
  },

  methods: {
    toggleActiveSearch() {
      this.isActiveSearch = !this.isActiveSearch;
      this.iconActive = !this.iconActive;
    },

    addActive(e) {
      e.preventDefault();
      let items = document.querySelectorAll(".nav-list_item"),
        parent = e.target.parentElement;

      items.forEach((item) => {
        item.classList.remove("active");
      });
      parent.classList.add("active");
    },

    close() {
      this.isActiveSearch = false;
      this.iconActive = false;
    },
  },
};
</script>

<style scoped>
.nav-list_item.active a {
  color: #fd9b21 !important;
}
</style>
