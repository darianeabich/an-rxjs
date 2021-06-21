// acoes herda infos de um array de acao
export interface Acoes extends Array<Acao> {}

export interface Acao {
  id:number;
  codigo:string;
  descricao:string;
  preco:number;
}

// entregas as infos por uma payload -> API
export interface AcoesAPI {
  payload:Acoes;
}
