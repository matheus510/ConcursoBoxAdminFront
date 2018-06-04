<template>
  <div>
    {{ $route.params.id }}
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
  beforeCreate () {
    this.concursoId = this.$route.params.id
  }
}
</script>

<style>

</style>
