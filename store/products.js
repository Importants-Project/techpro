export const state = () => ({
  products: [],
  article: [],
  productsHome:[],
  articleProduct:[]

})

export const actions = {

  fetchAllProducts({ commit }) {
    return this.$axios
      .$get(`/category/products`)
      .then((data) => {
        commit("setProducts", data.data);

      })
      .catch((err) => console.error(err));
  },
  getArticle({ commit }, id) {
    return this.$axios.$get("/category/products/" + id)
      .then((data) => {
        commit("updateArticle", data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  },


  getArticleProduct({ commit }, id) {
    return this.$axios.$get("/products/" + id)
      .then((data) => {
        commit("updateArticleProduct", data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  },

  fetchAllProductsHome({ commit }) {
    return this.$axios
      .$get(`/home/products`)
      .then((data) => {
        commit("setProductsHome", data.data);

      })
      .catch((err) => console.error(err));
  },
}


export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },

  updateArticle(state, article) {
    state.article = article;
  },

  updateArticleProduct(state, articleProduct){
    state.articleProduct = articleProduct;
  },
  setProductsHome(state, productsHome) {
    state.productsHome = productsHome;
  },

}


export const getters = {
  getProducts({ products }) {
    return products;
  },

  bringArticle({ article }) {
    return article;
  },

  bringArticleProducts({ articleProduct }) {
    return articleProduct;
  },
  getProductsHome({ productsHome }) {
    return productsHome;
  },
}
