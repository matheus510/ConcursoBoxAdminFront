import Vue from 'vue'
import Router from 'vue-router'
import NovoConcurso from '@/Pages/NovoConcurso'
import EditarConcurso from '@/Pages/EditarConcurso'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Concurso/:id',
      name: 'EditarConcurso',
      component: EditarConcurso
    },
    {
      path: '/Concurso/New/',
      name: 'Concurso',
      component: NovoConcurso
    }
  ]
})
