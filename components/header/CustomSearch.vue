<template>
  <form class="pop-search-box_form search-form" @submit.prevent="goNews(term)">
    <input
      class="form-control"
      type="text"
      ref="input"
      autofocus
      placeholder="Search..."
      v-model="term"
    />
    <a type="button" class="cursor-pointer" @click="goNews(term)">
      <i class="fa-solid fa-magnifying-glass"></i>
    </a>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CustomSearch",
  data() {
    return {
      term: "",
    };
  },

  computed: {
    ...mapGetters({
      searchResult: "news/filteredNews",
    }),
  },
  methods: {
    ...mapActions({
      getSearchResults: "news/getSearchResults",
    }),
    goNews() {
      this.getSearchResults(this.term);
      this.$router.push("/news?fetch=false");

      this.term = ''

    },
  },
};
</script>
