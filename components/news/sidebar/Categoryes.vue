<template>
  <aside class="sidebar-archive">
    <h5 class="sidebar-archive_title" >Archive</h5>
    <ul class="sidebar-archive_list">
      <li v-for="category in getNewesCategories.slice().reverse()" :key="category.id">
        <nuxt-link :to="`/news/${category.id}`">{{ category.name }}</nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  async fetch() {
    await this.$store.dispatch("news/fetchAllNewesCategories");
  },
  computed: {
    ...mapGetters({
      getNewesCategories: "news/getNewesCategories",
    }),
  },
};
</script>
