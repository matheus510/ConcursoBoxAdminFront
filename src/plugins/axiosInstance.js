import axios from 'axios'
import { vm } from '../main'

export default function axiosInstance (token) {
  if (token) {
    return axios.create({
      headers: {
        'authorization': token
      }
    })
  }
  if (!token) {
    let token = vm.$store.store.getters['usuario/GET_TOKEN']
    return axios.create({
      headers: {
        'authorization': token
      }
    })
  }
}
