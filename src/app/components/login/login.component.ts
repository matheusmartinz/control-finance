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
    email: '',
    senha: '',
  };

  onClickLogin() {
    // this.router.navigate(['/home']);
    this.service.login(this.usuarioDTO).subscribe({
      next: () => {
        console.log('FOI');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnInit(): void {}
}
