<template>
  <footer class="footer">
    <div class="contanier">
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-4 gap-x-8
          relative
          pt-10
        "
      >
        <div class="footer-info">
          <img src="../../assets/images/Techproloqo2022.svg" alt="" />
          <p  class="footer-info_about">
            {{ footerData.content }}
            <a href="/about">Read more</a>
          </p>
        </div>
        <div class="footer-recent">
          <h4 class="footer-title">
            Recent news
          </h4>
          <div
            v-for="footerNews in getNewsFooter.slice(0, 2)"
            :key="footerNews.id"
            class="my-6"
          >
            <nuxt-link

              :to="'/news/detail/' + footerNews.id"
            >
              {{ footerNews.title }}
            </nuxt-link>
          </div>
        </div>
        <div class="footer-links">
          <h4  class="footer-title">
            Extra links
          </h4>

          <div class="grid grid-cols-2 gap-4 gap-x-8 my-6">
            <div v-for="link in getMenues" :key="link.id">
              <template  v-if="link.link.includes('http')">
                <a target="_blank"  :href="link.link">
                  <i
                    class="fa-solid fa-angle-right"
                    style="font-size: 20px"
                  ></i>
                  <span >{{
                    link.name
                  }}</span>
                </a>
              </template>
              <!-- /${link.id} -->
              <template v-else>
                <NuxtLink  :to="`${link.link}`">
                  <i
                    class="fa-solid fa-angle-right"
                    style="font-size: 20px"
                  ></i>
                  <span>{{
                    link.name
                  }}</span>
                </NuxtLink>
              </template>
            </div>
          </div>
        </div>
        <div class="footer-contacts">
          <h4

            class="footer-title mb-6"
          >
            Contacts
          </h4>

          <div class="items-baseline flex mb-5">
            <div class="mr-4 headerTop-icon">
              <img
                src="../../assets/svg/footer/location.svg"
                style="width: 20px"
                alt=""
              />
            </div>
            <div class="headerTop-text secondery">
              <div
                class="text-sm"
                v-html="settingsData.footer"
              ></div>
            </div>
          </div>

          <div class="items-center flex mb-5">
            <div class="mr-4 headerTop-icon">
              <img
                src="../../assets/svg/footer/smartphone.svg"
                style="width: 20px"
                alt=""
              />
            </div>
            <div class="headerTop-text secondery">
              <div
                class="text-sm"
                style="Open Sans, sans-serif"
                v-html="settingsData.phone"
              ></div>
            </div>
          </div>

          <div class="items-center flex mb-5">
            <div class="mr-4 headerTop-icon">
              <img
                src="../../assets/svg/footer/envelope.svg"
                style="width: 20px"
                alt=""
              />
            </div>
            <div class="headerTop-text secondery">
              <a
                target="_blank"
                :href="`mailto:${settingsData.email}`"
                class="text-sm"
                v-html="settingsData.email"
              ></a>
            </div>
          </div>
        </div>
      </div>

      <div class="block sm:flex items-center justify-between copyrightRow">
        <div class="footer-copyright w-full text-center sm:w-3/6 sm:text-left">
          Copyright © 2023 TECHPRO DC. All rights reserved
        </div>
        <div class="footer-socials flex">
          <a
            :href="settingsData.fb_link"
            target="_blank"
            class="footer-socials_facebook mr-3"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            :href="settingsData.insta_link"
            target="_blank"
            class="footer-socials_instagram mr-3"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            :href="settingsData.linkedin"
            target="_blank"
            class="footer-socials_linkdin mr-3"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "footer-component",

  async fetch() {
    await this.$store.dispatch("settings/fetchContent");
    await this.$store.dispatch("news/fetchNewsFooter");
    await this.$store.dispatch("menu/fetchAllMenues");
  },
  computed: {
    ...mapGetters({
      footerData: "sentence/footerData",
      settingsData: "settings/settingsData",
      getNewsFooter: "news/getNewsFooter",
      getMenues: "menu/getMenues",
    }),
  },
};
</script>
