<template>
  <div v-if="getPagination.lastPage > 1" class="flex items-center">
    <div
      v-if="getPagination.currentPage > 1"
      @click="gotoPage(getPagination.currentPage - 1)"
    >
      <a href="#top" class="pagination">
        <i class="fa-solid fa-angle-left"></i>
      </a>
    </div>

    <div
      class="pagination mx-3"
      v-for="(pageNumber, i) in getPagination.lastPage"
      :class="{ 'current-page': getPagination.currentPage === pageNumber }"
      :key="i"
      @click="gotoPage(pageNumber)"
    >
      <a href="#top" class="page-numbers">{{ pageNumber }}</a>
    </div>

    <div
      v-if="getPagination.lastPage > getPagination.currentPage"
      @click="gotoPage(getPagination.currentPage + 1)"
    >
      <a href="#top" class="pagination">
        <i class="fa-solid fa-angle-right"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    // async pager(page) {
    //     await this.$store.dispatch("news/fetchAllNews", page);
    // },
    async gotoPage(page) {
      await this.$store.dispatch("news/fetchAllNews",page);
      await this.$router.push(`/news?page=${page}`);
    },
  },
  computed: {
    ...mapGetters({
      getPagination: "news/getPagination",
    }),
  },
  
};
</script>
