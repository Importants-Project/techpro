<template>
  <aside class="sidebar-search mb-16">
    <form
      @submit.prevent="goNews(term)"
      class="pop-search-box_form_news search-form"
    >
      <input
        class="form-controlInput"
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
 
  </aside>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "search",
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
