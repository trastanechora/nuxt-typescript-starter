// “The first step is to establish that something is possible; then probability will occur”
// - Elon Musk

import axios from 'axios'

// =================================================
// State
// =================================================
export const state = () => ({
  articles: []
})

// =================================================
// Mutations
// =================================================
export const mutations = {
  setArticles(state: any, param: any) {
    state.articles = param
  }
}

// =================================================
// Actions
// =================================================
export const actions = {
  async getNews(store: any) {
    await axios({
      method: 'GET',
      url: `http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.NEWS_API_KEY}`
    })
      .then(async (response: any) => {
        await store.commit('setArticles', response.data.articles)
        return true
      })
      .catch((error) => {
        return error.response
      })
  }
}
