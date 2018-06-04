import createLogger from '../plugins/logger'
import concurso from './modules/concurso'
import usuario from './modules/usuario'
import axios from 'axios'
import types from './types'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function axiosHelper (token) {
  if (token) {
    return axios.create({
      headers: {
        'authorization': token
      }
    })
  }
  if (!token) {
    let token = store.getters['usuario/GET_TOKEN']
    return axios.create({
      headers: {
        'authorization': token
      }
    })
  }
}

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state: {
    activeConcursos: [],
    finishedConcursos: []
  },
  actions: {
    [types.GET_CONCURSOS] ({commit}) {
      debugger
      axiosHelper().get('http://localhost:5000/api/concursos')
      .then((res) => {
        commit('SET_CONCURSOS', res.data)
      })
      .catch((err) => Promise.reject(err))
    }
  },
  mutations: {
    [types.SET_CONCURSOS] (state, payload) {
      state.activeConcursos = payload
    }
  },
  getters: {
    [types.GET_CONCURSOS]: (state) => {
      return state.activeConcursos
    }
  },
  modules: {
    concurso,
    usuario
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
export default {
  store
}
