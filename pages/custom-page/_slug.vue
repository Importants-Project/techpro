<template>
  <div class="contanier">
    <div v-html="bringArticle.description"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {

      async asyncData({ params }) {
    const slug = params.bringArticle;
    return { slug };
  },

  async fetch({ route, store }) {
    await store.dispatch("menu/getArticle", route.params.slug);
  },

  computed: {
    ...mapGetters({
      bringArticle: "menu/bringArticle",
    }),
  },

}
</script>

<style>

</style>