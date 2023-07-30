<template>
  <div>
    <div class="contanier">
    <img class="my-10"   style='width:100%' src="../assets/images/AboutMap.png" alt="">

      <div class="about grid gap-x-8 grid-cols-1  lg:grid-cols-21mt-20">
        <div class="about-info">
          <!-- <h2 class="aboutTitle text-left font-bold">About Us</h2> -->
           <div
            style="font-family: 'Open Sans', 'sans-serif'; text-align: justify; font-size: 16px"
            v-html="aboutData.content"
            class="text-sm inheritColor leading-7"
          ></div>
        </div>
        <!-- <div class="about-img">
          <img :src="aboutData.image" alt="" />
        </div> -->
      </div>
    
    </div>

  </div>
</template>

<style >
.gm-ui-hover-effect {
  display: none !important;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "About",
      mapHover: {},
      center: {
        lat: 47.376332,
        lng: 8.547511,
      },

      infoContent: null,
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },

  methods: {
    winFalse: function (i) {
      this.infoWinOpen = false;
      this.mapHover[i] = false;
    },
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
        this.$set(this.mapHover,idx,!this.mapHover[idx]);  
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.$set(this.mapHover,idx,true);  
        this.currentMidx = idx;
      }
    },
  },

  async fetch() {
    await this.$store.dispatch("about/fetchContent");
  },
  computed: {
    ...mapGetters({
      aboutData: "about/aboutData",
      getMarkers: "about/getMarkers",
    }),
  },
};
</script>
