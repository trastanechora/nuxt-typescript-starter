// “The first step is to establish that something is possible; then probability will occur”
// - Elon Musk

import axios from 'axios'
import { Article, NewsapiResponse, NewsState } from '~/@types'

// =================================================
// State
// =================================================
export const state = (): NewsState => ({
  articles: [
    {
      author: 'https://www.facebook.com/13ericralph31',
      content:
        'A SpaceX Falcon 9 booster has broken a decades-old NASA Space Shuttle reuse record after successfully launching a South Korean military satellite and landing on drone ship Just Read The Instructions … [+3986 chars]',
      description:
        'A SpaceX Falcon 9 booster has broken a decades-old NASA Space Shuttle reuse record after successfully launching a South Korean military satellite and landing on drone ship Just Read The Instructions (JRTI). Meanwhile, CEO Elon Musk says that SpaceX also manag…',
      publishedAt: '2020-07-20T23:09:17Z',
      source: { id: null, name: 'Teslarati' },
      title:
        'SpaceX Falcon 9 breaks NASA Shuttle reuse record, catches full rocket nosecone - Teslarati',
      url:
        'https://www.teslarati.com/spacex-falcon-9-shuttle-record-nosecone-catch/',
      urlToImage:
        'https://www.teslarati.com/wp-content/uploads/2020/07/ANASIS-II-Falcon-9-B1058-LC-40-072020-SpaceX-JRTI-landing-2-c-1024x465.jpg'
    }
  ]
})

// =================================================
// Mutations
// =================================================
export const mutations = {
  setArticles(state: NewsState, param: Article[]): void {
    state.articles = param
  }
}

// =================================================
// Actions
// =================================================
export const actions = {
  async getNews(store: any): Promise<void> {
    await axios({
      method: 'GET',
      url: `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${process.env.NEWS_API_KEY}`
    })
      .then(async (response: NewsapiResponse) => {
        await store.commit('setArticles', response.data.articles)
        return true
      })
      .catch((error) => {
        return error.response
      })
  }
}
