import { mount } from '@vue/test-utils'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

describe('VuetifyLogo', () => {
  test('is a Vue instance', () => {
    const wrapper: any = mount(VuetifyLogo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
