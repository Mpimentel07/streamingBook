import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: String = environment.apiBaseUrl

  constructor(
    private http: HttpClient
  ) { }

  save (usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.url}/api/usuarios`, usuario)
  }
}
