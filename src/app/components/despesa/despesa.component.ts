import { InputTextModule } from 'primeng/inputtext';
import { Component, OnInit } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Despesa } from './despesaModel';
import { TipoCategoria } from '../categoria/categoriaModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-despesa',
  standalone: true,
  imports: [
    InputTextModule,
    DatePickerModule,
    FloatLabelModule,
    InputNumberModule,
    InputTextModule,
    AutoCompleteModule,
    CheckboxModule,
    ButtonModule,
    DialogModule,
    FormsModule,
  ],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.css',
})
export class DespesaComponent implements OnInit {
  protected visible = false;

  private resetDataDespesa(): Despesa {
    return {
      uuid: undefined,
      descricao: '',
      valor: 0,
      dataVencimento: new Date(),
      categoria: [
        {
          uuid: undefined,
          descricao: 'Empresa',
          tipo: TipoCategoria.RECEITA,
        },
      ],
      pagamento: false,
    };
  }

  protected dataDespesa: Despesa = {
    uuid: undefined,
    descricao: '',
    valor: 0,
    dataVencimento: new Date(),
    categoria: [
      {
        uuid: undefined,
        descricao: 'Empresa',
        tipo: TipoCategoria.RECEITA,
      },
    ],
    pagamento: false,
  };

  itsVisibleDespesa() {
    this.dataDespesa = this.resetDataDespesa();
    this.visible = true;
  }

  ngOnInit(): void {}
}
