export const state = () => ({
 menues: [],
 article: [],
})

export const actions = {
  fetchAllMenues({ commit }, arr) {
    return this.$axios
      .$get("/menu",arr)
      .then((data) => {
        commit("setMenues", data.data);
      })
      .catch((err) => console.error(err));
  },

  getArticle({ commit }, id) {
    return this.$axios.$get("/menu/" + id)
      .then((data) => {
        commit("updateArticle", data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  },
}

export const mutations = {
  setMenues(state, menues) {
    state.menues = menues;
  },

  updateArticle(state, article) {
    state.article = article;
  },

}

export const getters = {
  getMenues({ menues }) {
    return menues;
  },

  bringArticle({ article }) {
    return article;
  },
}
