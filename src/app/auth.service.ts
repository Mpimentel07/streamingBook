import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { environment } from '../environments/environment';
import { Anime } from './anime.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUserURL: string = environment.apiBaseUrl + "/api/usuarios"
  apiAnimeURL: string = environment.apiBaseUrl + "/api/animes"
  tokenURL: string = environment.apiBaseUrl + environment.obterTokenUrl
  clientID: string = environment.clientId
  clientSecret: string = environment.clientSecret

  constructor(
    private http: HttpClient
  ) { }

  save(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.apiUserURL, usuario )
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

  add(anime: Anime): Observable<Anime>{
    return this.http.post<Anime>(this.apiAnimeURL, anime)
  }

  list(): Observable<Anime[]>{
   return this.http.get<Anime[]>(this.apiAnimeURL)
  }

  // getProfile(anime: Anime): Observable<Anime>{
  //   return this.http.get<Anime>(`${this.apiAnimeURL}/${anime.id}`)
  // }

  cardPhoto(anime: Anime, formData: FormData): Observable<any>{
    return this.http.put(`${this.apiAnimeURL}/${anime.id}/cardPhoto`, formData, {responseType: 'blob'})
  }

  profilePhoto(anime: Anime, formData: FormData): Observable<any>{
    return this.http.put(`${this.apiAnimeURL}/${anime.id}/profilePhoto`, formData, {responseType: 'blob'})
  }

  coverPhoto(anime: Anime, formData: FormData): Observable<any>{
    return this.http.put(`${this.apiAnimeURL}/${anime.id}/coverPhoto`, formData, {responseType: 'blob'})
  }

}

   