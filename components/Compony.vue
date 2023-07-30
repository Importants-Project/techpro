<template>
  <div class="mb-10">
    <div class="contanier">
      <div class="productTitle my-20 text-center font-bold">
        <h2>Company news</h2>
      </div>
      <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div  v-for="(compony) in getnews.slice(0, 4)" :key="compony.id">
          <div class="compony-image mb-10 ">
           <nuxt-link style="font-size:13px" :to="'/news/detail/' + compony.id">
              <img style="height: 150px; width: 100%;"   :src="compony.image"  :alt="compony.title " />
            </nuxt-link>
          </div>

          <div class="compony-text">
            <h5 >
              <nuxt-link :to="'/news/detail/' + compony.id">
                {{ compony.title }}
              </nuxt-link>
            </h5>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {

    async fetch() {
    await this.$store.dispatch("news/fetchAllNews");
  },

  computed: {
    ...mapGetters({
      getnews: "news/getNewes",
    }),
  },

};
</script>

