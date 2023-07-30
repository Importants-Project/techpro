export const state = () => ({
  content: []
});

export const actions = {
  fetchContentBanner({ commit }) {
      return this.$axios
          .$get("/banners")
          .then(res => {
              commit('SET_CONTENT', res.data)
          })
          .catch(error => console.log(error));
  }
};

export const mutations = {
  SET_CONTENT(state, data) {
      state.content = data;
  }
};

export const getters = {
  bannerData: s => s.content.find(item => item.id === 1),
  getContent({ content }) {
      return content;
  }
};
