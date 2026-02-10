import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ReceitaComponent } from '../receita/receita.component';
import { DespesaComponent } from '../despesa/despesa.component';
import { CategoriaComponent } from '../categoria/categoria.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    TableModule,
    TagModule,
    ReceitaComponent,
    DespesaComponent,
    CategoriaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  @ViewChild(ReceitaComponent)
  protected receitaComponent!: ReceitaComponent;

  @ViewChild(DespesaComponent)
  protected despesaComponent!: DespesaComponent;

  @ViewChild(CategoriaComponent)
  protected categoriaComponent!: CategoriaComponent;

  protected data: any;

  openDialogReceita() {
    this.receitaComponent.itsVisibleReceita();
  }

  openDialogDespesa() {
    this.despesaComponent.itsVisibleDespesa();
  }

  openDialogCategoria() {
    this.categoriaComponent.itsVisibleCategoria();
  }

  ngOnInit(): void {
    this.data = JSON.stringify({
      usuario: {
        id: 1,
        nome: 'João Silva',
        moeda: 'BRL',
      },
      resumo_mensal: {
        mes: '2026-01',
        receita_total: 5500.0,
        despesa_total: 4200.5,
        saldo: 1299.5,
      },
      transacoes: [
        {
          id: 101,
          data: '2026-01-05',
          tipo: 'receita',
          categoria: 'Salário',
          descricao: 'Salário mensal',
          valor: 5000.0,
        },
        {
          id: 102,
          data: '2026-01-10',
          tipo: 'receita',
          categoria: 'Freelance',
          descricao: 'Projeto website',
          valor: 500.0,
        },
        {
          id: 201,
          data: '2026-01-12',
          tipo: 'despesa',
          categoria: 'Aluguel',
          descricao: 'Aluguel do apartamento',
          valor: 1800.0,
        },
        {
          id: 202,
          data: '2026-01-15',
          tipo: 'despesa',
          categoria: 'Alimentação',
          descricao: 'Supermercado',
          valor: 650.5,
        },
        {
          id: 203,
          data: '2026-01-20',
          tipo: 'despesa',
          categoria: 'Transporte',
          descricao: 'Combustível',
          valor: 300.0,
        },
      ],
    });
  }
}
