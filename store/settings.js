export const state = () => ({
  content: []
});

export const actions = {
  fetchContent({ commit }) {
      return this.$axios
          .$get("/settings")
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
  settingsData: s => s.content,
  getContent({ content }) {
      return content;
  }
};
