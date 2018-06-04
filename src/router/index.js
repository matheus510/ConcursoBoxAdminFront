import Vue from 'vue'
import Router from 'vue-router'
import NovoConcurso from '@/Pages/NovoConcurso'
import EditarConcurso from '@/Pages/EditarConcurso'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/concurso/edit/:id',
      name: 'EditarConcurso',
      component: EditarConcurso
    },
    {
      path: '/concurso/new/',
      name: 'Concurso',
      component: NovoConcurso
    }
  ]
})
