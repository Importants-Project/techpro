export const state = () => ({
  newes: [],
  newsFooter: [],

  filteredNews: [],
  newsCategories: [],
  article: {},
  category: {},
})

export const actions = {
  fetchAllNews({ commit }, query) {
    return this.$axios
      .$get(`/news?page=${query}`)
      .then((data) => {
        commit("setNewes", data.data);
        commit("setPagination", {

          firstPage: data.links.first,
          currentPage: data.meta.current_page,
          path: data.meta.path + "?page=",
          fromPage: data.meta.from,
          toPage: data.meta.to,
          nextPage: data.links.next,
          prevPage: data.links.prev,
          lastPage: data.meta.last_page,
          totalItem: data.meta.total,
          Perpage: data.meta.per_page,

        });

      })
      .catch((err) => console.error(err));
  },

  getSearchResults({ commit }, query = '') {
    return this.$axios
      .$get(`/news_search?keyword=${query}`)
      .then((data) => {
        commit('returnResults', data.data)
        commit("setPagination", {
          firstPage: data.links.first,
          currentPage: data.meta.current_page,
          path: data.meta.path + "?page=",
          fromPage: data.meta.from,
          toPage: data.meta.to,
          nextPage: data.links.next,
          prevPage: data.links.prev,
          lastPage: data.meta.last_page,
          totalItem: data.meta.total,
          Perpage: data.meta.per_page
        });

      })
      .catch((err) => console.error(err));
  },

  fetchNewsFooter({ commit }) {
    return this.$axios
      .$get(`/news`)
      .then((data) => {
        commit("setNewsFooter", data.data);
      })
      .catch((err) => console.error(err));
  },

  fetchAllNewesCategories({ commit }) {
    return this.$axios
      .$get("/news/categories")
      .then((data) => {
        commit("setNewesCategories", data.data);

      })
      .catch((err) => console.error(err));
  },

  getArticle({ commit }, id) {
    return this.$axios.$get("/news/detail/" + id)
      .then((data) => {
        commit("updateArticle", data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  },

  getCategory({ commit }, id) {
    return this.$axios.$get("/news/" + id)
      .then((data) => {
        commit("updateCategory", data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

}

export const mutations = {
  setNewes(state, newes) {
    state.newes = newes;
    state.filteredNews = newes;
  },

  setNewesCategories(state, newsCategories) {
    state.newsCategories = newsCategories;
  },

  returnResults(state, results) {
    if (results) {
      return state.filteredNews = results
    }
    return state.filteredNews = state.newes;
  },

  setNewsFooter(state, newsFooter) {
    state.newsFooter = newsFooter;
  },

  setPagination(state, news) {
    state.news = news;
  },

  updateArticle(state, article) {
    state.article = article;
  },
  
  updateCategory(state, category) {
    state.category = category;
  }
}

export const getters = {
  getNewes({ filteredNews }) {
    return filteredNews;
  },
  getPagination({ news }) {
    return news;
  },
  getNewesCategories({ newsCategories }) {
    return newsCategories;
  },
  bringArticle({ article }) {
    return article;
  },

  bringCategory({ category }) {
    return category;
  },

  getNewsFooter({ newsFooter }) {
    return newsFooter;
  },


}
