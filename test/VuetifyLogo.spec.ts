import { mount, Wrapper } from '@vue/test-utils'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

describe('VuetifyLogo', () => {
  test('is a Vue instance', () => {
    const wrapper: Wrapper<Vue> = mount(VuetifyLogo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
