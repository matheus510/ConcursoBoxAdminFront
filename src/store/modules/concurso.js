const state = {
  nomeConcurso: '',
  realizadores: [],
  patrocinadores: [],
  contatoRealizador: {
    nomeResponsável: '',
    telefone: '',
    email: ''
  },
  regulamentoUrl: '',
  datas: {
    inicioInscricao: '',
    fimInscricao: '',
    divulgacaoPremio: ''
  },
  fasesDeAvaliacao: [],
  camposParticipantes: {}
}

const getter = {
  getConcurso: state => state
}

export default {
  state,
  getter
}
