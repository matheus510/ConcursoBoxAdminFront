import createLogger from '../../../src/plugins/logger'
import concurso from './modules/concurso'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    concurso
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
