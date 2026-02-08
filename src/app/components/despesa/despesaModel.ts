import { Categoria as Categoria } from '../categoria/categoriaModel';

export interface Despesa {
  uuid: string | undefined;
  descricao: string;
  valor: number;
  dataVencimento: Date;
  categoria: Categoria[] | undefined;
  pagamento: boolean;
}
