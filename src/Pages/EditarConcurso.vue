<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap class="py-4 px-4">
      <v-flex d-flex xs12 class="py-4">
        <v-layout row wrap class="px-4">
          <v-flex xs12 d-flex>
            <span class="headline py-4">
              Novo Concurso
            </span>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex>
                <v-card ref="form">
                  <v-card-text>
                    <v-text-field
                      ref="nome"
                      v-model="concurso.nome"
                      :rules="[() => !!concurso.nome || 'Esse campo é obrigatório']"
                      label="Nome do concurso"
                      placeholder="Concurso #1"
                      required
                    ></v-text-field>
                    <v-text-field
                      ref="realizadores"
                      :rules="[() => !!concurso.realizadores || 'Esse campo é obrigatório']"
                      v-model="concurso.realizadores"
                      label="Realizadores"
                      required
                    ></v-text-field>
                    <v-text-field
                      ref="patrocinadores"
                      :rules="[() => !!concurso.patrocinadores || 'Esse campo é obrigatório']"
                      v-model="concurso.patrocinadores"
                      label="Patrocinadores"
                      required
                    ></v-text-field>
                    <v-text-field
                      ref="dataInicio"
                      v-model="concurso.dataInicio"
                      :rules="[() => !!concurso.dataInicio || 'Esse campo é obrigatório']"
                      label="Data de Início"
                      required
                    ></v-text-field>
                    <v-text-field
                      ref="dataTermino"
                      v-model="concurso.dataTermino"
                      :rules="[() => !!concurso.dataTermino || 'Esse campo é obrigatório']"
                      label="Data de Término"
                      required
                    ></v-text-field>
                  </v-card-text>
                  <v-divider class="mt-5"></v-divider>
                  <v-card-actions>
                    <v-btn flat>Cancel</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" flat @click="submit()">Submit</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      currentConcursoId: '',
      concurso: {
        nome: '',
        realizadores: [],
        patrocinadores: [],
        dataInicio: '',
        dataTermino: '',
        participantes: [],
        terminado: false
      }
    }
  },
  computed: {
    currentConcurso () {
      return this.$store.store.getters['concurso/GET_CURRENT_CONCURSO']
    }
  },
  methods: {
    submit () {
      console.log('submited!')
    }
  },
  created () {
    const currentConcursoId = {
      concursoId: this.$route.params.id
    }
    console.log(currentConcursoId)
    this.$store.store.dispatch('concurso/SET_CURRENT_CONCURSO', currentConcursoId)
  },
  mounted () {
    this.concurso = this.currentConcurso
  }
}
</script>

<style>

</style>
