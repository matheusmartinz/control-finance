import { DialogModule } from 'primeng/dialog';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Categoria, TipoCategoria } from './categoriaModel';

@Component({
  selector: 'app-categoria',
  imports: [
    FormsModule,
    DialogModule,
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    AutoCompleteModule,
    FormsModule,
  ],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css',
})
export class CategoriaComponent {
  protected visible = false;

  protected dataCategoria: Categoria = {
    uuid: undefined,
    descricao: '',
    tipo: TipoCategoria.RECEITA,
  };

  private resetCategoria(): Categoria {
    return {
      uuid: undefined,
      descricao: '',
      tipo: TipoCategoria.RECEITA,
    };
  }

  itsVisibleCategoria() {
    this.dataCategoria = this.resetCategoria();
    this.visible = true;
  }
}
