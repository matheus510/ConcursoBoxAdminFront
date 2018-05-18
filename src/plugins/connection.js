import axios from 'axios'
import { mapGetters } from 'vuex'

const devEnv = process.env.NODE_ENV !== 'production'

export const instance = axios.create({
  baseURL: devEnv ? 'http://localhost:8000/' : '',
  headers: {'X-Custom-Header': 'foobar'}
})
