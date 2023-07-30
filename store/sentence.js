export const state = () => ({
  content: []
});

export const actions = {
  fetchContent({ commit }) {
      return this.$axios
          .$get("/static/sentence")
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
  footerData: s => s.content.find(item => item.id === 2),
  parallaxData: s => s.content.find(item => item.id === 1),
  infoData: s => s.content.find(item => item.id === 3),

  getContent({ content }) {
      return content;
  }
};
