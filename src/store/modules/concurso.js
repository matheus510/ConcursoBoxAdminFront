import types from '../types'
import axios from 'axios'

const namespaced = true

const state = {
  currentConcurso: {}
}

const getters = {
  [types.GET_CURRENT_CONCURSO]: state => state.currentConcurso
}

const actions = {
  [types.SET_CURRENT_CONCURSO]: ({ commit }, payload) => {
    axios.get(`http://localhost:5000/api/concursos/${payload.concursoId}`)
      .then(function (res) {
        commit(`${types.SET_CURRENT_CONCURSO}`, res.data)
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}

const mutations = {
  [types.SET_CURRENT_CONCURSO] (state, payload) {
    state.currentConcurso = Object.assign({}, payload)
    console.log(state.currentConcurso)
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
