export const state = () => ({
  vendors: [],
  vendorsSetting:[]
})

export const actions = {
  fetchAllVendors({ commit }) {
    return this.$axios
      .$get("/vendors")
      .then((data) => {
        commit("setVendors", data.data);
      })
      .catch((err) => console.error(err));
  },


  fetchAllVendorsSetting({ commit }) {
    return this.$axios
      .$get("/vendor/setting")
      .then((data) => {
        commit("setVendorsSetting", data.data);
      })
      .catch((err) => console.error(err));
  },
}

export const mutations = {
  setVendors(state, vendors) {
    state.vendors = vendors;
  },
  setVendorsSetting(state,vendorsSetting){
    state.vendorsSetting = vendorsSetting;

  }

}

export const getters = {
  getVendorsSetting: s => s.vendorsSetting,
  
  getVendors({ vendors }) {
    return vendors;
  },


}
