import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
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
    tipo: undefined,
  };

  protected tiposCategoria = [
    { label: 'Receita', value: TipoCategoria.RECEITA },
    { label: 'Despesa', value: TipoCategoria.DESPESA },
  ];

  protected filteredTipos: any[] = [];

  searchTipo(event: any) {
    const query = event.query.toLowerCase();

    this.filteredTipos = this.tiposCategoria.filter((tipo) =>
      tipo.label.toLowerCase().includes(query),
    );
  }

  private resetCategoria(): Categoria {
    return {
      uuid: undefined,
      descricao: '',
      tipo: undefined,
    };
  }

  itsVisibleCategoria() {
    this.dataCategoria = this.resetCategoria();
    this.visible = true;
  }

  onSave() {
    this.dataCategoria.uuid = crypto.randomUUID();
    let categoria: Categoria[] = JSON.parse(localStorage.getItem('categoria') || '[]');
    categoria.push(this.dataCategoria);
    localStorage.setItem('categoria', JSON.stringify(categoria));
    console.log(categoria);
  }
}
