import axios from 'axios'
import types from '../types'
import axiosInstance from '../../plugins/axiosInstance'

const namespaced = true

const state = {
  nome: '',
  token: '',
  authorized: false,
  permissoes: []
}

const getters = {
  [types.GET_USER_INFO]: (state) => {
    return state
  },
  [types.GET_TOKEN]: state => state.token ? state.token : undefined
}

const actions = {
  [types.SET_TOKEN]: ({ commit }, payload) => {
    axiosInstance(payload.token).get('http://localhost:5000/api/usuarios/login')
      .then(function (response) {
        if (response.data.authorized) {
          commit(types.SET_TOKEN, response.data)
        }
      }
    )
    .catch(function (error) {
      console.log(error)
    })
  },
  [types.CREATE_USER]: ({ commit }, payload) => {
    axios.post('http://localhost:5000/api/usuarios/', `token=${payload.token}`)
    .then(function (response) {
      commit(types.SET_TOKEN, response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }
}

const mutations = {
  [types.SET_TOKEN] (state, payload) {
    state.token = payload.usuario.token
    state.nome = payload.usuario.token.split('@')[0]
    state.authorized = payload.authorized
  }
}
export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
