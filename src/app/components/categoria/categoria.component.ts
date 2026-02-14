import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Categoria, TipoCategoria } from './categoriaModel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ControlFinanceService } from '../control-finance.service';

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
export class CategoriaComponent implements OnInit {
  constructor(private categoriaService: ControlFinanceService) {}

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
    this.categoriaService.postCategoria(this.dataCategoria).subscribe({
      next: (response) => {
        this.toastMessage.add({
          severity: 'success',
          summary: 'Categoria criada com sucesso',
          detail: `Categoria ${response.descricao} criada com sucesso!`,
        });
        this.visible = false;
      },
      error: (error) => {
        this.toastMessage.add({
          severity: 'error',
          summary: 'Erro ao criar categoria',
          detail: `Erro ao criar categoria: ${error.message}`,
        });
      },
    });
  }

  ngOnInit(): void {}
}
