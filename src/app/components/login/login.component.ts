import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { Toast } from 'primeng/toast';
import { ControlFinanceService } from '../control-finance.service';
import { UsuarioDTO } from '../models/usuario.dto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    FloatLabelModule,
    PasswordModule,
    CommonModule,
    FormsModule,
    Toast,
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private service: ControlFinanceService,
  ) {}

  private messaService = inject(MessageService);

  protected usuarioDTO: UsuarioDTO = {
    uuid: '',
    email: '',
    senha: '',
  };

  protected isFirstAccess: boolean = true;

  onClickLogin(): void {
    if (this.isFirstAccess) {
      this.service.postCadastroUser(this.usuarioDTO).subscribe({
        next: (response: UsuarioDTO) => {
          localStorage.setItem('firstAccess', 'false');
          localStorage.setItem('userId', response.uuid);

          this.isFirstAccess = false;

          this.messaService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Login realizado com sucesso.',
          });

          this.router.navigate(['control-finance/home']);
        },
        error: (error) => {
          this.messaService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro em fazer seu primeiro login.',
          });
        },
      });
    } else {
      this.service.postLoginUser(this.usuarioDTO).subscribe({
        next: (response) => {
          this.messaService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Login realizado com sucesso.',
          });
          this.router.navigate(['control-finance/home']);
        },
        error: (error: any) => {
          this.messaService.add({
            severity: 'error',
            summary: 'Erro',
            detail: error.error?.message,
          });
        },
      });
    }
  }

  ngOnInit(): void {
    this.isFirstAccess = localStorage.getItem('firstAccess') !== 'false';
  }
}
