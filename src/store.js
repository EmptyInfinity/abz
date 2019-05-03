import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 0,
    users: [],
    isMoreUsers: true,
    errMessage: '',
    total_pages: null
  },
  mutations: {
    pageIncr (state) {
      state.page++
    },
    addUser (state, user) {
      state.users.push(user)
    },
    setIsMoreStatus (state, status) {
      status ? state.isMoreUsers = true : state.isMoreUsers = false
    },
    setTotalPages (state, pages) {
      state.total_pages = pages - 1
    },
    setToken (state, token) {
      state.token = token
    },
    reset (state) {
      state.users = []
      state.page = 0
    },
    setErrMessage (state, message) {
      state.errMessage = message
    },
    resetErrMessage (state) {
      state.errMessage = ''
    }
  },
  actions: {
    async getPages ({ commit, state }) {
      await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users')
        .then(response => response.json())
        .then(data => commit('setTotalPages', data.total_pages))
    },
    async getUsers ({ commit, dispatch, state }) {
      commit('pageIncr')
      await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=' + state.page + '&count=6')
        .then(response => response.json())
        .then(data => {
          data.users.forEach(user => commit('addUser', user))
          commit('setIsMoreStatus', data.links.next_url)
        })
        .catch(err => console.log(err))
      if (state.isMoreUsers) {
        await dispatch('getUsers')
      }
    },
    async getToken ({ commit }) {
      await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        .then(response => response.json())
        .then(data => commit('setToken', data.token))
        .catch(err => console.log(err))
    },
    async addUser ({ state, commit, dispatch }, user) {
      let formData = new FormData()
      let fileField = document.querySelector('#file')
      formData.append('position_id', user.position)
      formData.append('name', user.name)
      formData.append('email', user.email)
      formData.append('phone', user.phone)
      formData.append('photo', fileField.files[0])

      await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
        method: 'POST',
        body: formData,
        headers: {
          'Token': state.token
        }
      })
        .then(response => response.json())
        .then(data => {
          if (!data.success) commit('setErrMessage', data.message)
        })
        .catch(err => console.log(err))

      await commit('reset')
      Vue.nextTick()
        .then(() => dispatch('getUsers'))
    }
  },
  getters: {
    userNumber: (state) => (id) => {
      return state.users[id]
    }
  }
})
