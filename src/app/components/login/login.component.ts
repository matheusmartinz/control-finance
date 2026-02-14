import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { UsuarioDTO } from '../models/usuario.dto';
import { FormsModule } from '@angular/forms';
import { ControlFinanceService } from '../control-finance.service';

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
    InputTextModule,
    CardModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private service: ControlFinanceService,
  ) {}

  protected usuarioDTO: UsuarioDTO = {
    uuid: '',
    email: '',
    senha: '',
  };

  protected isFirstAccess: boolean = false;

  onClickLogin() {
    // this.router.navigate(['control-finance/home']);
    // localStorage.setItem('firstAccess', 'false');
    if (this.isFirstAccess == false) {
      this.service.postCadastroUser(this.usuarioDTO).subscribe({
        next: (response) => {
          console.log('Cadastro realizado com sucesso:', response);
          localStorage.setItem('firstAccess', 'false');
          this.router.navigate(['control-finance/home']);
        },
        error: (error) => {
          console.error('Erro ao realizar cadastro:', error);
        },
      });
    }
  }

  validateAccess() {
    const access = localStorage.getItem('firstAccess');
    if (!access) {
      localStorage.setItem('firstAccess', 'true');
      this.isFirstAccess = true;
    } else {
      this.isFirstAccess = false;
    }
  }

  ngOnInit(): void {
    this.validateAccess();
  }
}
