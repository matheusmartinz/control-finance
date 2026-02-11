import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Categoria, TipoCategoria } from './categoriaModel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [
    FormsModule,
    DialogModule,
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    AutoCompleteModule,
    FormsModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css',
})
export class CategoriaComponent {
  protected visible = false;
  private toastMessage = inject(MessageService);

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

    const validaData: Categoria[] = JSON.parse(localStorage.getItem('categoria') || '[]');

    if (
      validaData.some(
        (value) =>
          value.descricao === this.dataCategoria.descricao ||
          value.uuid === this.dataCategoria.uuid,
      )
    ) {
      this.toastMessage.add({
        severity: 'error',
        summary: 'Erro de salvamento.',
        detail: 'Esta categoria já existe.',
      });
      console.log(categoria.some((value) => value.descricao == this.dataCategoria.descricao));
      return;
    } else {
      localStorage.setItem('categoria', JSON.stringify(categoria));
      this.toastMessage.add({
        severity: 'success',
        detail: 'Categoria salva com sucesso.',
      });
      this.visible = false;
    }
  }
}
