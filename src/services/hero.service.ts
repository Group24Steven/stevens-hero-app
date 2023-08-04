import { Injectable } from '@angular/core';
import { Hero } from 'src/objects/hero';
import { HttpClient } from '@angular/common/http'
//import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apiUrl = 'http://localhost/api/heroes/';
  //private apiUrlSingle = 'http://localhost/api/hero/'

  constructor(private httpClient: HttpClient) {}

  getAllHeroes(): Observable<Hero[]> {
    const response = this.httpClient.get<Hero[]>(this.apiUrl);
    console.log(response);
    return response;
  }
  getById(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(this.apiUrl + id);
  }
  create(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.apiUrl, hero);
  }
  update(hero: Hero): Observable<Hero> {
    return this.httpClient.put<Hero>(this.apiUrl, hero);
  }
  delete(id: number): Observable<Hero> {
    return this.httpClient.delete<Hero>(this.apiUrl + id);
  }
}