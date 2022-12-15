import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../models/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  apiUrl= 'http://localhost:8080/godzilla/filmes'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(
    private httpClient: HttpClient
    ) { }

  public getFilmes(): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl);
  }
}
