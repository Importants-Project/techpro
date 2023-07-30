<template>
  <div class=" block col-start-3 col-end-7">
    <div class="sidebar relative">
      <search-category />

      <category />
    </div>
  </div>
</template>

<script>
import SearchCategory from "./Search.vue";
import Category from "./Categoryes";
export default {
  components: { Category, SearchCategory },
};
</script>
