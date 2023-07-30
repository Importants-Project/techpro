<template>
  <div class="contanier">
    <div v-html="bringArticle.description"></div>
    <div v-if="getCareer != ''">
      <table
        class="border-collapse border border-slate-500 w-full"
        style="margin-top: 60px"
      >
        <thead class="bg-brown">
          <tr class="">
            <th class="border py-3 border-slate-600 w-full md:w-5/6">
              Position
            </th>
            <th class="border border-slate-600"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="career in getCareer" :key="career.id">
            <td class="border border-slate-700 p-3">{{ career.name }}</td>
            <td class="border border-slate-700 p-2 text-center">
              <NuxtLink
                class="bg-brown hover:text-yellow-500 p-1 px-3"
                :to="`/careers/detail/${career.id}`"
                >More</NuxtLink
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  async fetch({ route, store, params }) {
    await store.dispatch("menu/getArticle", route.params.slug);
    await store.dispatch("career/fetchAllCareer");

    const slug = params.bringArticle;
    return { slug };
  },

  computed: {
    ...mapGetters({
      bringArticle: "menu/bringArticle",
      getCareer: "career/getCareer",
    }),
  },
};
</script>