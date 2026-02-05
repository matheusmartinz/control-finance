import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioDTO } from './models/usuario.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ControlFinanceService {
  private readonly _URL_BASE = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(usuarioDTO: UsuarioDTO): Observable<string> {
    return this.http.post<string>(`${this._URL_BASE}/controle-financeiro/login`, usuarioDTO);
  }
}
