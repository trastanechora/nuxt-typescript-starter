/*
 * This is the root of store which are other files as vuex store module
 * define related state unique name in each files
 *
 * https://nuxtjs.org/guide/vuex-store#modules-mode
 */

// The highest-performing engineers are 1.5 times more likely to have easy-to-use tools.”
// - State of DevOps 2019 Summit

// state defined as function
export const state = () => ({
  pageTitle: ''
})

// mutations defined as object
export const mutations = {
  setPageTitle(state: any, param: string) {
    state.pageTitle = param
  }
}

// this is root of store, mutations defined must unique
export const actions = {
  setPageTitle(store: any, param: string) {
    store.commit('setPageTitle', param)
  }
}
