import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Persona } from '../persona.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
    Url = 'http://localhost:8080/api/tbl_ingresopersonas';

  constructor(private httpClient: HttpClient) { }

  //personaAgregada(): Observable < Persona[] > {
    //return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      //map(response => response._embedded.persona)
    //);
    getpersonaAgregada(){
      return this.httpClient.get<Persona[]>(this.Url);
    }
  }




interface GetResponse {
  _embedded: {
    persona: Persona[];
  }
}
