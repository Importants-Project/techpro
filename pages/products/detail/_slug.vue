<template>
  <div>

    <div class="contanier">
      <div
        v-for="detail in bringArticleProducts.content"
        :key="detail.key"
        class="productSlug"
      >
        <div class="my-10 grid gap-x-8 gap-y-10 grid-cols-1 md:grid-cols-2">
          <div>
            <img
              :src="
                'https://techprodc.com/storage/' +
                detail.attributes.image2
              "
              class="w-full"
              alt=""
            />
          </div>
          <div class="ml-6">
            <h1
              class="productSlug-title text-4xl"
            >
              {{ detail.attributes.title }}
            </h1>
            <div v-for="header in detail.attributes.header" :key="header.key">
              <h1
                class="my-5"
                style="
                  font-size: 25px !important;
                  line-height: 22px;
                  color: #2d2d2d !important;
                "
              >
                {{ header.attributes.item }}
              </h1>

              <ul class="productSlug-list">
                <li
                  class="productSlug-list_items"
                  v-for="list in header.attributes.header_items"
                  :key="list.key"
                >
                  <a target="_blank" :href="list.attributes.item_link">
                    <i class="fa-solid fa-diamond diamond-icon"></i>

                    {{ list.attributes.item }}</a
                  >
                </li>
              </ul>
            </div>

            <ul class="productSlug-list">
              <li
                class="productSlug-list_items"
                v-for="list in detail.attributes.item_list"
                :key="list.key"
              >
                <a target="_blank" :href="list.attributes.item_link">
                  <i class="fa-solid fa-diamond diamond-icon"></i>

                  {{ list.attributes.item }}</a
                >
              </li>
            </ul>
          </div>
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
    await store.dispatch("products/getArticleProduct", route.params.slug);
  },

  computed: {
    ...mapGetters({
      bringArticleProducts: "products/bringArticleProducts",
    }),
  },
};
</script>