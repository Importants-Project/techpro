<template>
  <div class="product">
    <div class="contanier">
      <div class="productTitle my-20 text-center font-bold">
        <h2>Our products</h2>
      </div>
      <div>
        <div
          class="
            grid
            gap-x-8 gap-y-10
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
          "
        >
          <a
            :href="product.link"
            v-for="product in getProductsHome"
            :key="product.id"
          >
            <div class="flex items-baseline productGird">
              <div
                class="
                  border
                  productGird-icon
                  py-3
                  items-center
                  px-4
                  mr-6
                  text-center
                "
              >
              <img src="../assets/svg/circle.svg" alt="">
                <i :class="product.icon"></i>
              </div>
              <div class="productGird">
                <h4 class="productGird-title">{{ product.home_name }}</h4>
                <!-- style="font-family:Raleway, 'Open Sans','Helvetica Neue','Helvetica','sans-serif';" -->
                <p class="productGird-text">{{ product.home_content }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  async fetch() {
    await this.$store.dispatch("products/fetchAllProductsHome");
  },
  computed: {
    ...mapGetters({
      getProductsHome: "products/getProductsHome",
    }),
  },
};
</script>
