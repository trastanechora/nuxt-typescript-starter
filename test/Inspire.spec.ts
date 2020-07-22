import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import InspirePage from '~/pages/inspire.vue'

Vue.use(Vuetify)

describe('InspirePage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(InspirePage, {
      vuetify: new Vuetify()
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
