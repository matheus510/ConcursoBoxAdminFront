<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap class="py-4 px-4">
      <v-flex d-flex xs12 sm10 class="py-4">
        <v-layout row wrap class="px-4">
          <v-flex sm10 d-flex>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-flex sm12 d-flex>
                <span class="display-1 py-4">
                  Informações do Concurso
                </span>
              </v-flex>
              <v-text-field
                v-model="nome"
                :rules="nomeRules"
                :counter="10"
                label="Nome do concurso"
                required
              ></v-text-field>
              <span class="title py-4">
                Realizadores
              </span>
              <v-divider class="my-4"></v-divider>
              <div v-for="(realizador, index) in realizadores" :key="realizador">
                <v-text-field
                  :value="realizador"
                  :label="'Realizador ' + (index + 1)"
                  :v-model="realizadores[index]"
                  readonly
                ></v-text-field>
              </div>
              <v-layout row wrap>
                <v-flex sm11 d-flex>
                  <v-text-field
                    v-model="realizadorAtual"
                    :label="`Novo Realizador`"
                  ></v-text-field>
                </v-flex>
                <v-flex sm1 d-flex>
                  <v-btn fab small dark color="indigo" @click="addRealizador(realizadorAtual)">
                    <v-icon dark>add</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
              <span class="title py-4">
                Patrocinadores
              </span>
              <v-divider class="my-4"></v-divider>
              <div v-for="(patrocinador, index) in patrocinadores" :key="patrocinador">
                <v-text-field
                      :value="patrocinador"
                      :label="'Patrocinador ' + (index + 1)"
                      :v-model="patrocinadores[index]"
                      readonly
                ></v-text-field>
              </div>
              <v-layout row wrap>
                <v-flex sm11 d-flex>
                  <v-text-field
                    v-model="patrocinadorAtual"
                    :label="`Novo Patrocinador`"
                  ></v-text-field>
                </v-flex>
                <v-flex sm1 d-flex>
                  <v-btn fab small dark color="indigo" @click="addPatrocinador(patrocinadorAtual)">
                    <v-icon dark>add</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
<v-text-field
                v-model="nome"
                :rules="nomeRules"
                :counter="10"
                label="Nome do concurso"
                required
              ></v-text-field>
              <v-flex sm12 d-flex>
                <span class="display-1 py-4">
                  Informações do Concurso
                </span>
              </v-flex>
              <span class="title py-4">
                Realizadores
              </span>
              <v-divider class="my-4"></v-divider>
              <div v-for="(realizador, index) in realizadores" :key="realizador">
                <v-text-field
                  :value="realizador"
                  :label="'Realizador ' + (index + 1)"
                  :v-model="realizadores[index]"
                  readonly
                ></v-text-field>
              </div>
              <v-layout row wrap>
                <v-flex sm11 d-flex>
                  <v-text-field
                    v-model="realizadorAtual"
                    :label="`Novo Realizador`"
                  ></v-text-field>
                </v-flex>
                <v-flex sm1 d-flex>
                  <v-btn fab small dark color="indigo" @click="addRealizador(realizadorAtual)">
                    <v-icon dark>add</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
              <span class="title py-4">
                Patrocinadores
              </span>
              <v-divider class="my-4"></v-divider>
              <div v-for="(patrocinador, index) in patrocinadores" :key="patrocinador">
                <v-text-field
                      :value="patrocinador"
                      :label="'Patrocinador ' + (index + 1)"
                      :v-model="patrocinadores[index]"
                      readonly
                ></v-text-field>
              </div>
              <v-layout row wrap>
                <v-flex sm11 d-flex>
                  <v-text-field
                    v-model="patrocinadorAtual"
                    :label="`Novo Patrocinador`"
                  ></v-text-field>
                </v-flex>
                <v-flex sm1 d-flex>
                  <v-btn fab small dark color="indigo" @click="addPatrocinador(patrocinadorAtual)">
                    <v-icon dark>add</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
              <v-btn :disabled="!valid" @click="submit">Avançar</v-btn>
              <v-btn @click="clear">clear</v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      valid: true,
      nome: '',
      nomeRules: [
        v => !!v || 'nome is required'
      ],
      patrocinadores: [],
      patrocinadorAtual: '',
      patrocinadorRules: [],
      realizadores: [],
      realizadorAtual: '',
      realizadorRules: []
    }),

    methods: {
      addPatrocinador (patrocinadorAtual) {
        if (patrocinadorAtual && patrocinadorAtual !== '') {
          this.patrocinadores.push(patrocinadorAtual)
          this.patrocinadorAtual = ''
        }
      },
      addRealizador (realizadorAtual) {
        if (realizadorAtual && realizadorAtual !== '') {
          this.realizadores.push(realizadorAtual)
          this.realizadorAtual = ''
        }
      },
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('/api/submit', {
            name: this.name,
            email: this.email,
            select: this.select,
            checkbox: this.checkbox
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style>

</style>
