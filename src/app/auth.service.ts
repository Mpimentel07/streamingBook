import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiBaseUrl + "/api/usuarios"

  constructor(
    private http: HttpClient
  ) { }

  save(usuario: Usuario): Observable<any>{
    return this.http.post<any>(this.apiURL, usuario )
  }
}
