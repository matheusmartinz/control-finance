import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-receita',
  standalone: true,
  imports: [ButtonModule, FloatLabelModule, DialogModule, AutoCompleteModule, DatePickerModule],
  templateUrl: './receita.component.html',
  styleUrl: './receita.component.css',
})
export class ReceitaComponent {
  protected visible = false;

  itsVisible() {
    this.visible = true;
  }

  onCancel() {
    this.visible = false;
  }
}
