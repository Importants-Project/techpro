<template>
  <div>
    <div class="contanier">
      <div class="mt-20">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div v-for="product in getProducts" :key="product.id">
            <template v-if='product.image !== "" '>
            <NuxtLink  class="card" :to="`/products/${product.id}`">
            <img
            class="productCategoryImg"
              :src="product.image"
              alt=""
            />
              <div class="productCategoryBox">
                <a href="#"> {{ product.name }}</a>
              </div>
            </NuxtLink>
            </template>
            <template v-else>
                   <NuxtLink  class="card" :to="`/products/${product.id}`">
        
              <div class="productCategoryBox">
                <a href="#"> {{ product.name }}</a>
              </div>
            </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style >

.productCategoryImg{
height: 250px;
 width: 100%;
  object-fit: cover
}
.productCategoryBox {
  border: 1px solid brown;
  padding: 1rem;
  margin: 10px 0;
  background: transparent;
  text-align: center;
  color: brown;
  transition: all .5s ease-in-out;
  border-radius: 4px;
}

.productCategoryBox a {
  font-weight: bold;
  font-size: 18px;
}


.card:hover  .productCategoryBox{
  border: 1px solid brown;
  padding: 1rem;
  margin: 10px 0;
  background: brown;
  color: white;

  text-align: center;
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "Products",
    };
  },

  async fetch() {
    await this.$store.dispatch("products/fetchAllProducts");
  },
  computed: {
    ...mapGetters({
      getProducts: "products/getProducts",
    }),
  },
};
</script>

