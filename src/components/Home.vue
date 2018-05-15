<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap class="py-4 px-4">
      <v-flex d-flex xs12>
        <v-layout row wrap>
          <v-flex d-flex>
            <span class="display-2 pt-4 px-4">
              Bem vindo,
            </span>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm10 class="py-4">
        <v-layout row wrap class="px-4">
          <v-flex sm5 d-flex>
            <span class="display-1 py-4">
              Concursos em Andamento
            </span>
          </v-flex>
          <v-flex sm7 d-flex>
            <v-data-table
              :headers="concursosEmAndamentoHeaders"
              :items="concursosEmAndamento"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.dataInicio }}</td>
                <td class="text-xs-right">{{ props.item.dataTermino }}</td>
                <td class="text-xs-right">{{ props.item.participantes }}</td>
                <td class="text-xs-right">{{ props.item.editar }}</td>
                <td class="text-xs-right">{{ props.item.excluir }}</td>
              </template>
            </v-data-table>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex sm2 xs12>
        <div class="px-4 py-4">
          <v-btn fab dark color="primary">
            <v-icon dark>add_circle_outline</v-icon>
          </v-btn>
          <label>Criar novo concurso</label>
        </div>
      </v-flex>
      <v-flex d-flex xs12 sm10 class="py-4">
        <v-layout row wrap class="px-4">
          <v-flex sm5 d-flex>
            <span class="display-1 py-4">
              Concursos Terminados
            </span>
          </v-flex>
          <v-flex sm7 d-flex>
            <v-data-table
              :headers="concursosTerminadosHeaders"
              :items="concursosTerminados"
              hide-actions
              class="elevation-1"
            >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.dataInicio }}</td>
                <td class="text-xs-right">{{ props.item.dataTermino }}</td>
                <td class="text-xs-right">{{ props.item.participantes }}</td>
                <td class="text-xs-right">{{ props.item.editar }}</td>
                <td class="text-xs-right">{{ props.item.excluir }}</td>
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
          value: 'name'
        },
        { text: 'dataInicio', value: 'dataInicio', sortable: false },
        { text: 'dataTermino', value: 'dataTermino', sortable: false },
        { text: 'participantes', value: 'participantes', sortable: false },
        { text: 'editar', value: 'editar', sortable: false },
        { text: 'excluir', value: 'excluir', sortable: false }
      ],
      concursosEmAndamento: [
        {
          value: false,
          name: 'Concurso SOS Mata Atlântica',
          dataInicio: '01/01/2022',
          dataTermino: '01/01/2023',
          participantes: 568,
          editar: '',
          excluir: ''
        },
        {
          value: false,
          name: 'Concurso SOS Cerrado',
          dataInicio: '01/01/2022',
          dataTermino: '01/01/2023',
          participantes: 568,
          editar: '',
          excluir: ''
        }
      ],
      concursosTerminadosHeaders: [
        {
          text: 'Concursos',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'dataInicio', value: 'dataInicio', sortable: false },
        { text: 'dataTermino', value: 'dataTermino', sortable: false },
        { text: 'participantes', value: 'participantes', sortable: false },
        { text: 'editar', value: 'editar', sortable: false },
        { text: 'excluir', value: 'excluir', sortable: false }
      ],
      concursosTerminados: [
        {
          value: false,
          name: 'Concurso SOS Mata Atlântica',
          dataInicio: '01/01/2022',
          dataTermino: '01/01/2023',
          participantes: 568,
          editar: '',
          excluir: ''
        },
        {
          value: false,
          name: 'Concurso SOS Cerrado',
          dataInicio: '01/01/2022',
          dataTermino: '01/01/2023',
          participantes: 568,
          editar: '',
          excluir: ''
        }
      ]
    }
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
