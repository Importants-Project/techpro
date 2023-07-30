export const state = () => ({
  content: [],
  markers:[]
});

export const actions = {
  fetchContent({ commit }) {
      return this.$axios
          .$get("/about_us")
          .then(res => {
              commit('SET_CONTENT', res.data)
          })
          .catch(error => console.log(error));
  }
};

export const mutations = {
  SET_CONTENT(state, data) {
      state.content = data;
      data.map_description.forEach(element => {
        state.markers.push(

            {
                position: {
                  lat: Number(element.attributes.lat),
                  lng: Number(element.attributes.lng),
                },
                infoText: element.attributes.detail,
              },
        )
      });
  }
};

export const getters = {
  aboutData: s => s.content,
  getContent({ content }) {
      return content;
  },

  getMarkers({ markers }) {
    return markers;
}
};
