<template>
  <div>
    <div class="contact">
      <div class="contanier">
        <div class="grid grid-cols-6 gap-4 my-20">
          <div class="md:col-span-3 col-span-6">
            <div class="contact-info">
              <p>
                <span>
                  Please let us know if you have a question, want to leave a
                  comment, or would like further information about Techpro DC.
                </span>
              </p>
            </div>
            <div
              class="contact-detail"
              style="font-weight: 500; font-size: 14px"
            >
              <h4>CONTACT DETAILS</h4>
              <div class="items-baseline flex">
                <div class="mr-4 mb-10 headerTop-icon">
                  <img
                    src="../assets/svg/contact/pin.svg"
                    style="width: 20px"
                    alt=""
                  />
                </div>
                <div class="headerTop-text secondery">
                  <div class="" v-html="settingsData.contact"></div>
                </div>
              </div>

              <div class="items-center my-5 flex">
                <div class="mr-4 headerTop-icon">
                  <img
                    src="../assets/svg/contact/phone-call.svg"
                    style="width: 20px"
                    alt=""
                  />
                </div>
                <div class="headerTop-text secondery">
                  <div
                    class="text-md"
                    style="font-family: 'Open Sans', sans-serif"
                    v-html="settingsData.phone"
                  ></div>
                </div>
              </div>

              <div class="items-center flex">
                <div class="mr-4 headerTop-icon">
                  <img
                    src="../assets/svg/contact/email.svg"
                    style="width: 20px"
                    alt=""
                  />
                </div>
                <div class="headerTop-text secondery">
                  <div
                    class="text-md"
                    style="font-family: 'Open Sans', sans-serif"
                    v-html="settingsData.email"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <contact-form />
        </div>
      </div>

      <client-only>
        <gmap-map
          :center="center"
          :zoom="3"
          :options="{ minZoom: 3, maxZoom: 10 }"
          style="width: 100%; height: 500px"
        >
          <gmap-info-window
            :options="infoOptions"
            :position="infoWindowPos"
            :opened="infoWinOpen"
          >
            <div v-html="infoContent"></div>
          </gmap-info-window>

          <template>
            <gmap-marker
              :icon="
                mapHover[i]
                  ? { url: '/techproHover.svg' }
                  : { url: '/techpro.svg' }
              "
              :key="i"
              v-for="(m, i) in getMarkers"
              :position="m.position"
              :clickable="true"
              @mouseout="winFalse(i)"
              @mouseover="toggleInfoWindow(m, i)"
            >
            </gmap-marker>
          </template>
        </gmap-map>
      </client-only>
    </div>
  </div>
</template>

<script>
import ContactForm from "./ContactForm.vue";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      title: "contacts",
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
        this.$set(this.mapHover, idx, !this.mapHover[idx]);
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.$set(this.mapHover, idx, true);
        this.currentMidx = idx;
      }
    },
  },

  components: {
    ContactForm,
  },

  async fetch() {
    await this.$store.dispatch("settings/fetchContent");
    await this.$store.dispatch("about/fetchContent");
  },
  computed: {
    ...mapGetters({
      footerData: "sentence/footerData",
      settingsData: "settings/settingsData",
      getMarkers: "about/getMarkers",
    }),
  },
};
</script>