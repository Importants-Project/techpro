export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('sentence/fetchContent')
  }

}

