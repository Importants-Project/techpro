export const state = () => ({
    slider: []
  });
  
  export const actions = {
    fetchContent({ commit }) {
        return this.$axios
            .$get("/slider/setting")
            .then(res => {
                commit('SET_CONTENT', res.data)
            })
            .catch(error => console.log(error));
    }
  };
  
  export const mutations = {
    SET_CONTENT(state, data) {
        state.slider = data;
    }
  };
  
  export const getters = {
    sliderData: s => s.slider,
    getSlider({ slider }) {
        return slider;
    }
  };
  