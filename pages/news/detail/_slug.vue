<template>
  <div>

    <div class="contanier">
      <div class="grid grid-cols-6 md:grid-cols-2 gap-8 mt-10">
        <div class="col-start-1 col-end-7 lg:col-start-1 lg:col-end-3 border-t">
          <span class="text-sm standart-color"
            ><i class="fa-solid fa-clock mr-3 mt-5 primary-color"></i>
            {{ bringArticle.created_at }}</span
          >
          <img class="mt-2 w-full" :src="bringArticle.image" alt="" />

          <div
            v-html="bringArticle.content"
            style="color: #777; line-height: 21pt;font-family: Helvetica, sans-serif;"
            class="my-10 detail-text"
          ></div>
        </div>
        <sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Sidebar from "../../../components/news/sidebar/Sidebar.vue";

export default {
      name: "NewsPage",

  components: {
    Sidebar,
  },

  async asyncData({ params }) {
    const slug = params.bringArticle;
    return { slug };
  },

  async fetch({ route, store }) {
    await store.dispatch("news/getArticle", route.params.slug);
  },

  computed: {
    ...mapGetters({
      bringArticle: "news/bringArticle",
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
