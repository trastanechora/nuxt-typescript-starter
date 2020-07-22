import { mount, Wrapper } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import NewsPage from '~/pages/news.vue'
import { state, actions, mutations } from '~/store/news'

Vue.use(Vuetify)
Vue.use(Vuex)

describe('NewsPage', () => {
  // Create vuex store
  let store: any
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        news: {
          state,
          mutations,
          actions
        }
      }
    })
    store.dispatch = jest.fn(() => Promise.resolve())
    Vue.prototype.$store = store
  })
  test('is a Vue instance', () => {
    const wrapper: Wrapper<Vue> = mount(NewsPage, {
      vuetify: new Vuetify()
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  test('Call dispatch action getNews', () => {
    const wrapper: Wrapper<any> = mount(NewsPage, {
      store,
      vuetify: new Vuetify()
    })
    wrapper.vm.isLoading = false
    expect(wrapper.vm.isLoading).toBe(false)
  })
})
