export const state = () => ({
  owls: [],
})

export const actions = {
  fetchAllOwls({commit}) {
    return this.$axios
    .$get("/sliders")
      .then((data) => {
        commit("setOwls", data.data);
      })
      .catch((err) => console.error(err));
  },
}

export const mutations = {
  setOwls(state, owls) {
    state.owls = owls;
  },

}

export const getters = {
  getOwls({owls}) {
    return owls;
  },
}
