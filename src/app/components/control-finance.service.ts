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

  postLoginUser(usuarioDTO: UsuarioDTO): Observable<string> {
    return this.http.post<string>(
      `${this._URL_BASE}/controle-financeiro/login/${usuarioDTO.uuid}`,
      usuarioDTO,
    );
  }

  postCadastroUser(usuarioDTO: UsuarioDTO): Observable<string> {
    return this.http.post<string>(`${this._URL_BASE}/controle-financeiro/cadastro`, usuarioDTO);
  }

  postCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${this._URL_BASE}/categoria/create`, categoria);
  }
}
