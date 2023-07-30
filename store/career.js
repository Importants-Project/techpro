export const state = () => ({
    career: [],
    careerArticle: [],
  
  })
  
  export const actions = {
  
    fetchAllCareer({ commit }) {
      return this.$axios
        .$get(`/career`)
        .then((data) => {
          commit("setCareer", data.data);
  
        })
        .catch((err) => console.error(err));
    },
  
    getArticleProduct({ commit }, id) {
      return this.$axios.$get("/career/" + id)
        .then((data) => {
          commit("updateCareerArticle", data.data);
        })
        .catch((error) => {
          console.log(error);
        })
    },
  

  }
  
  
  export const mutations = {
    setCareer(state, career) {
      state.career = career;
    },
  
    updateCareerArticle(state, careerArticle) {
      state.careerArticle = careerArticle;
    },
  
  }
  
  
  export const getters = {
    getCareer({ career }) {
      return career;
    },
  
    careerArticle({ careerArticle }) {
      return careerArticle;
    },
  }
  