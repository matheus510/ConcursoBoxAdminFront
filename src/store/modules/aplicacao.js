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

const getters = {
  getConcurso: state => state
}

export default {
  state,
  getters
}
