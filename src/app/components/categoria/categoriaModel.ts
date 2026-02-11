export enum TipoCategoria {
  RECEITA = 'RECEITA',
  DESPESA = 'DESPESA',
}

export interface Categoria {
  uuid: string | undefined;
  descricao: string;
  tipo: TipoCategoria | undefined;
}
