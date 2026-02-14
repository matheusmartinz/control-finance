import { ButtonModule } from 'primeng/button';
import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DatePickerModule } from 'primeng/datepicker';
import { Receita } from './receitaModel';
import { Categoria, TipoCategoria } from '../categoria/categoriaModel';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-receita',
  standalone: true,
  imports: [
    ButtonModule,
    FloatLabelModule,
    DialogModule,
    AutoCompleteModule,
    DatePickerModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
  ],
  templateUrl: './receita.component.html',
  styleUrl: './receita.component.css',
})
export class ReceitaComponent implements OnInit {
  protected visible = false;
  protected getCategoria: Categoria[] = JSON.parse(localStorage.getItem('categoria') || '[]');

  protected dataReceita: Receita = {
    uuid: undefined,
    descricao: '',
    valor: 0,
    data: new Date(),
    categoria: this.getCategoria, //precisa filtrar e aparecer somente as categorias com a descricao no dropDown
  };

  private resetReceita(): Receita {
    return {
      uuid: undefined,
      descricao: '',
      valor: 0,
      data: new Date(),
      categoria: this.getCategoria,
    };
  }

  itsVisibleReceita() {
    this.dataReceita = this.resetReceita();
    this.visible = true;
  }

  onClickSalvar() {
    console.log(this.dataReceita);
    console.log(this.getCategoria.map((value) => value.descricao));
  }

  ngOnInit(): void {}
}
