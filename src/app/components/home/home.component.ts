import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ReceitaComponent } from '../receita/receita.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, ButtonModule, TableModule, TagModule, ReceitaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChild(ReceitaComponent)
  protected receitaComponent!: ReceitaComponent;

  openDialog() {
    this.receitaComponent.itsVisible();
  }
}
