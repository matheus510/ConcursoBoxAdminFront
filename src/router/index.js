import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Concurso from '@/components/Concurso'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Concurso',
      name: 'Concurso',
      component: Concurso
    }
  ]
})
