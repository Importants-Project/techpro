<template>
  <div>
    <div class="contanier">
      <div
        class="
          my-10
          items-center
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-10
        "
      >
        <div
          v-for="detail in bringArticle.products"
          :key="detail.key"
          class="productSlug"
        >
          <template v-if="detail.link === null">
            <NuxtLink :to="`/products/detail/${detail.id}`">
              <img :src="detail.image" class="w-full" alt="" />
            </NuxtLink>
          </template>

            <template v-else>
         <a target="_blank" :href="detail.link" >
              <img :src="detail.image" class="w-full" alt="" />
          </a>
      </template>
       
        </div>
      </div>
    </div>
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
    await store.dispatch("products/getArticle", route.params.slug);
  },

  computed: {
    ...mapGetters({
      bringArticle: "products/bringArticle",
    }),
  },
};
</script>
