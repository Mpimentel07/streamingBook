import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiBaseUrl + "/api/usuarios"
  tokenURL: string = environment.apiBaseUrl + environment.obterTokenUrl
  clientID: string = environment.clientId
  clientSecret: string = environment.clientSecret

  constructor(
    private http: HttpClient
  ) { }

  save(usuario: Usuario): Observable<any>{
    return this.http.post<any>(this.apiURL, usuario )
  }

  tentarLogar(username: string, password: string) : Observable<any>{
    const params = new HttpParams() //Parametros do corpo da requisição para o BACKEND
                                  .set('username', username)
                                  .set('password', password)
                                  .set('grant_type', 'password')
    
    //configurando o HEADER da requisição HTTP                             
    const headers  = {
      'Authorization' : 'Basic' + btoa(`${this.clientID}:${this.clientSecret}`), //btoa() codifica strings
      'Content-Type' : 'application/x-www-form-urlencoded'
    }                           
    return this.http.post(this.tokenURL, params.toString(), {headers} )
  }
}
   