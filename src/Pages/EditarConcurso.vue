<template>
  <div>
    {{ currentConcurso ? currentConcurso : 'nao tem nada aqui' }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      concursoId: '',
      concurso: {}
    }
  },
  computed: {
    currentConcurso () {
      return this.$store.store.getters['concurso/GET_CURRENT_CONCURSO']
    }
  },
  created () {
    const currentConcursoId = {
      concursoId: this.$route.params.id
    }
    debugger
    this.$store.store.dispatch('concurso/SET_CURRENT_CONCURSO', currentConcursoId)
  }
}
</script>

<style>

</style>
