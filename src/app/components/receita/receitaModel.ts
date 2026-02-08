import { Categoria } from '../categoria/categoriaModel';

export interface Receita {
  uuid: string | undefined;
  descricao: string;
  valor: number;
  categoria: Categoria[];
  data: Date;
}
