import { mount, RouterLinkStub } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import IndexPage from '~/pages/index.vue'

Vue.use(Vuetify)

describe('IndexPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IndexPage, {
      vuetify: new Vuetify(),
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
