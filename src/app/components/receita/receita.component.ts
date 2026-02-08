import { ButtonModule } from 'primeng/button';
import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DatePickerModule } from 'primeng/datepicker';
import { Receita } from './receitaModel';
import { TipoCategoria } from '../categoria/categoriaModel';
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
  protected dataReceita: Receita = {
    uuid: undefined,
    descricao: '',
    valor: 0,
    data: new Date(),
    categoria: [
      {
        uuid: undefined,
        descricao: 'TESTE',
        tipo: TipoCategoria.RECEITA,
      },
      {
        uuid: undefined,
        descricao: 'TOMA NO CU',
        tipo: TipoCategoria.RECEITA,
      },
    ],
  };

  private resetReceita(): Receita {
    return {
      uuid: undefined,
      descricao: '',
      valor: 0,
      data: new Date(),
      categoria: [
        {
          uuid: undefined,
          descricao: 'TESTE',
          tipo: TipoCategoria.RECEITA,
        },
        {
          uuid: undefined,
          descricao: 'TOMA NO CU',
          tipo: TipoCategoria.RECEITA,
        },
      ],
    };
  }

  itsVisibleReceita() {
    this.dataReceita = this.resetReceita();
    this.visible = true;
  }

  onClickSalvar() {
    console.log(this.dataReceita);
  }

  ngOnInit(): void {}
}
