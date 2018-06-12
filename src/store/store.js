import createLogger from '../plugins/logger'
import concurso from './modules/concurso'
import usuario from './modules/usuario'
import axiosInstance from '../plugins/axiosInstance'
import types from './types'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state: {
    activeConcursos: [],
    finishedConcursos: []
  },
  actions: {
    [types.GET_CONCURSOS] ({commit}) {
      axiosInstance().get('http://ec2-34-203-198-65.compute-1.amazonaws.com:5000/api/concursos')
      .then((res) => {
        commit('SET_CONCURSOS', res.data)
      })
      .catch((err) => Promise.reject(err))
    },
    [types.GET_FINISHED_CONCURSOS] ({commit}) {
      axiosInstance().get('http://ec2-34-203-198-65.compute-1.amazonaws.com:5000/api/concursos/terminados')
      .then((res) => {
        commit('SET_FINISHED_CONCURSOS', res.data)
      })
      .catch((err) => Promise.reject(err))
    },
    [types.DELETE_CONCURSO] ({commit}, payload) {
      axiosInstance().delete(`http://ec2-34-203-198-65.compute-1.amazonaws.com:5000/api/concursos/${payload}`)
      .then((res) => {
        console.log(`concurso ${payload} deletado`)
      })
      .catch((err) => Promise.reject(err))
    }
  },
  mutations: {
    [types.SET_CONCURSOS] (state, payload) {
      state.activeConcursos = payload
    },
    [types.SET_FINISHED_CONCURSOS] (state, payload) {
      state.finishedConcursos = payload
    }
  },
  getters: {
    [types.GET_CONCURSOS]: (state) => {
      return state.activeConcursos
    },
    [types.GET_FINISHED_CONCURSOS]: (state) => {
      return state.finishedConcursos
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
