import types from '../types'
import axios from 'axios'

const state = {
  nomeConcurso: '',
  realizadores: [],
  patrocinadores: [],
  contatoRealizador: {
    nomeResponsável: '',
    telefone: '',
    email: ''
  },
  regulamentoUrl: '',
  datas: {
    inicioInscricao: '',
    fimInscricao: '',
    divulgacaoPremio: ''
  },
  fasesDeAvaliacao: [],
  camposParticipantes: {}
}

const getters = {
  [types.GET_CURRENT_CONCURSO]: state => state
}

const actions = {
  [types.SET_CURRENT_CONCURSO] ({ commit, payload }) {
    axios.get('/user?ID=12345')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    commit(`${types.SET_CURRENT_CONCURSO}`, payload)
  }
}

const mutations = {
  [types.SET_CURRENT_CONCURSO] (state, concurso) {
    state = concurso
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
