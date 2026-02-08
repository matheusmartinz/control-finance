import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { Component, ViewChild } from '@angular/core';
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
export class HomeComponent {
  @ViewChild(ReceitaComponent)
  protected receitaComponent!: ReceitaComponent;

  @ViewChild(DespesaComponent)
  protected despesaComponent!: DespesaComponent;

  @ViewChild(CategoriaComponent)
  protected categoriaComponent!: CategoriaComponent;

  openDialogReceita() {
    this.receitaComponent.itsVisibleReceita();
  }

  openDialogDespesa() {
    this.despesaComponent.itsVisibleDespesa();
  }

  openDialogCategoria() {
    this.categoriaComponent.itsVisibleCategoria();
  }
}
