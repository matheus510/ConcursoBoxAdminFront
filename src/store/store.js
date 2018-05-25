import createLogger from '../plugins/logger'
import concurso from './modules/concurso'
import usuario from './modules/usuario'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state: {
    activeConcursos: [],
    finishedConcursos: []
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
