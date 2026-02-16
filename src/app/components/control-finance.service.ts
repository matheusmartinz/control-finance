import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioDTO } from './models/usuario.dto';
import { Observable } from 'rxjs';
import { Categoria } from './categoria/categoriaModel';

@Injectable({
  providedIn: 'root',
})
export class ControlFinanceService {
  private readonly _URL_BASE = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  postLoginUser(usuarioDTO: UsuarioDTO): Observable<UsuarioDTO> {
    return this.http.post<UsuarioDTO>(`${this._URL_BASE}/controle-financeiro/login`, usuarioDTO);
  }

  postCadastroUser(usuarioDTO: UsuarioDTO): Observable<UsuarioDTO> {
    return this.http.post<UsuarioDTO>(`${this._URL_BASE}/controle-financeiro/cadastro`, usuarioDTO);
  }

  postCategoria(categoria: Categoria, userFK: string): Observable<Categoria> {
    return this.http.post<Categoria>(`${this._URL_BASE}/categoria/create/${userFK}`, categoria);
  }
}
