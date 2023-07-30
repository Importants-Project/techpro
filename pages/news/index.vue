<template>
  <div id="top">

    <div class="contanier">
      <div class="grid grid-cols-6 md:grid-cols-2 gap-8 mt-10">
        <div class="col-start-1 col-end-3">
          <div v-for="newses in getnews" :key="newses.id">
              <h4
              class="productSlug-title text-base md:text-2xl"
            >
             <nuxt-link  :to="'/news/detail/' + newses.id" >
          
              {{ newses.title }}
            </nuxt-link>
            </h4>

            <span class="text-sm standart-color"
              ><i class="fa-solid fa-clock mr-3 primary-color"></i>
              {{ newses.created_at }}</span
            >
            <img class="mt-3" :src="newses.image" style="width: 100%" alt="" />

            <nuxt-link :to="'/news/detail/' + newses.id" class="submit mt-5">
              Read More <i class="fa fa-chevron-right"></i>
            </nuxt-link>
            <div class="border-b py-5 mb-16"></div>
          </div>
        </div>
        <sidebar />
      </div>
      <pagination />
    </div>
  </div>
</template>

<script>
import Sidebar from "../../components/news/sidebar/Sidebar.vue";
import Pagination from "../../components/news/Pagination.vue";

import { mapGetters } from "vuex";

export default {
  components: {  Sidebar, Pagination },
  name: "NewsPage",
  methods: {},
  data() {
    return {
      title: "News",
    };
  },

  async fetch({ store, route }) {
    if (route.query.fetch != "false" || process.server)
      if (route.query && route.query.page) {
        await store.dispatch("news/fetchAllNews",route.query.page);
      } else {
          await store.dispatch("news/fetchAllNews");
      }
  },

  computed: {
    ...mapGetters({
      getnews: "news/getNewes",
    }),
  },
};
</script>
