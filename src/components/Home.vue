<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap class="py-4 px-4">
      <v-flex d-flex>
        <v-layout row wrap>
          <v-flex d-flex>
            <span class="display-1 pt-4 px-4">
              Bem vindo,
            </span>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 class="py-4">
        <v-layout row wrap class="px-4">
          <v-flex d-flex>
            <span class="headline py-4">
              Concursos em Andamento
            </span>
          </v-flex>
          <v-flex xs12 d-flex>
            <v-data-table
              :headers="concursosEmAndamentoHeaders"
              :items="concursosAtivos"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.nome }}</td>
                <td>{{ props.item.dataInicio }}</td>
                <td>{{ props.item.dataTermino }}</td>
                <td>{{ props.item.participantes }}</td>
                <td class="layout px-0">
                  <v-btn icon class="mx-0" :to="`/Concurso/edit/${props.item.id}`">
                    <v-icon color="primary">edit</v-icon>
                  </v-btn>
                  <v-btn icon class="mx-0" @click="deleteConcurso(props.item.id)">
                    <v-icon color="secondary">delete</v-icon>
                  </v-btn>
                </td>
              </template>
            </v-data-table>
          </v-flex>
          <v-flex xs12>
            <div class="pa-4">
              <v-btn medium dark color="primary">
                Criar novo concurso
                <v-icon right dark>add_circle_outline</v-icon>
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 class="py-4">
        <v-layout row wrap class="px-4">
          <v-flex xs12 d-flex>
            <span class="headline py-4">
              Concursos Terminados
            </span>
          </v-flex>
          <v-flex xs12 d-flex>
            <v-data-table
              :headers="concursosTerminadosHeaders"
              :items="concursosVencidos"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.nome }}</td>
                <td>{{ props.item.dataInicio }}</td>
                <td>{{ props.item.dataTermino }}</td>
                <td>{{ props.item.participantes }}</td>
                <td>
                  <v-btn icon class="mx-0" @click="deleteConcurso(props.item.id)">
                    <v-icon color="secondary">delete</v-icon>
                  </v-btn>
                </td>
              </template>
            </v-data-table>
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
      concursosEmAndamentoHeaders: [
        {
          text: 'Concursos',
          align: 'left',
          sortable: false,
          value: 'nome'
        },
        { text: 'Data de Início', value: 'dataInicio', sortable: false },
        { text: 'Data de Término', value: 'dataTermino', sortable: false },
        { text: 'Participantes', value: 'participantes', sortable: false },
        { text: 'Ações', value: '', sortable: false }
      ],
      concursosEmAndamento: this.concursosAtivos,
      concursosTerminadosHeaders: [
        {
          text: 'Concursos',
          align: 'left',
          sortable: false,
          value: 'nome'
        },
        { text: 'Data de Início', value: 'dataInicio', sortable: false },
        { text: 'Data de Término', value: 'dataTermino', sortable: false },
        { text: 'Participantes', value: 'participantes', sortable: false },
        { text: 'Ações', value: '', sortable: false }
      ],
      concursosTerminados: this.concursosVencidos
    }
  },
  computed: {
    concursosAtivos () {
      return this.$store.store.getters['GET_CONCURSOS']
    },
    concursosVencidos () {
      return this.$store.store.getters['GET_FINISHED_CONCURSOS']
    }
  },
  methods: {
    editConcurso (concurso) {

    },
    deleteConcurso (id) {
      this.$store.store.dispatch('DELETE_CONCURSO', id)
      // Update state
      this.$store.store.dispatch('GET_CONCURSOS')
      this.$store.store.dispatch('GET_FINISHED_CONCURSOS')
    }
  },
  beforeCreate () {
    this.$store.store.dispatch('GET_CONCURSOS')
    this.$store.store.dispatch('GET_FINISHED_CONCURSOS')
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
