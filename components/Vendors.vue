<template>
  <div class="vendors">
    <div class="contanier">
      <div v-for="vendor in getVendors" :key="vendor.id" class="block my-20">
        <div
          class="vendors-images md:float-left mr-0 mb-20 md:mr-7 md:mb-0"
          style="box-shadow: 0 2px 7px rgb(0 0 0 / 17%);padding:1rem"
        >
          <img style="width:203px; height:118px; object-fit: contain; " :src="vendor.image" alt=""/>
        </div>
        <div class="vendors-info">
          <h3>
            <a target="_blank" :href="vendor.link">
              {{ vendor.title }}
            </a>
          </h3>
          <p style="font-family: 'Open Sans';" class="description">
            <span v-if="showFullDescription[vendor.id]">{{ vendor.description }}</span>
            <span v-else>{{ vendor.description.substring(0, 100) }}...</span>
            <br>
            <button class="description__button" type="button" @click="toggleShowDescription(vendor.id)">
              {{ showFullDescription[vendor.id] ? 'Show less' : 'Show more' }}
            </button>
          </p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {

  async fetch() {
    await this.$store.dispatch('vendors/fetchAllVendors')
  },

  methods: {
    toggleShowDescription(vendorId) {
      this.showFullDescription = {
        ...this.showFullDescription,
        [vendorId]: !this.showFullDescription[vendorId],
      };
    },
  },
  computed: {
    ...mapGetters({
      getVendors: 'vendors/getVendors'
    }),
  },
  data() {
    return {
      title: "vendors",
      showFullDescription: {},

    };
  },
};
</script>


<style>
.description__button {
  color: #781610;
  text-decoration: underline;
}

.description__button:focus{
  outline: none;
}
</style>
