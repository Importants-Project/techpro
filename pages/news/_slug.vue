<template>
  <div>

    <div class="contanier">
      <div class="grid grid-cols-6 md:grid-cols-2 gap-8 mt-10">
        <div class="col-start-1 col-end-7 lg:col-start-1 lg:col-end-3">
          <div v-for="newses in bringCategory" :key="newses.id">
             <nuxt-link  :to="'/news/detail/' + newses.id" >
            <h4 class="productSlug-title text-2xl" >{{ newses.title }}</h4>
             </nuxt-link>
            <span class="text-sm standart-color"
              ><i class="fa-solid fa-clock mr-3 primary-color"></i>
              {{ newses.created_at }}</span
            >
            <img class="mt-3" :src="newses.image" style="width: 100%" alt="" />

            <nuxt-link  :to="'/news/detail/' + newses.id" class="submit mt-5">
              Read More <i class="fa fa-chevron-right"></i>
            </nuxt-link>
            <div class="border-b py-5 mb-16"></div>
          </div>
        </div>
        <sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Sidebar from "../../components/news/sidebar/Sidebar.vue";

export default {
      name: "NewsPage",

  components: {
    Sidebar,
  },

  async asyncData({ params }) {
    const slug = params.bringCategory;
    return { slug };
  },

  async fetch({ route, store }) {
    await store.dispatch("news/getCategory", route.params.slug);
  },

  computed: {
    ...mapGetters({
      bringCategory: "news/bringCategory",
    }),
  },
};
</script>

<style>
.news-detail-text {
  color: #777;
  font-size: 15px;
  line-height: 28px;
  margin: 0 0 15px;
  font-weight: 400;
}
</style>
