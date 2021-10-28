import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Juego } from '../interfaces/juegos-interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  private baseUrl: string = environment.baseUrl;
  constructor( private http:HttpClient) { }

  getJuegos(): Observable<Juego[]> {
    return this.http.get<Juego[]>(`${ this.baseUrl }/juegos`);
  }

  getJuegoPorId( id: string ):Observable<Juego> {
    return this.http.get<Juego>(`${ this.baseUrl }/juegos/${ id }`);
  }

  getSugerencias( termino: string ): Observable<Juego[]> {
    return this.http.get<Juego[]>(`${ this.baseUrl }/juegos?q=${ termino }&_limit=6`);
  }

  agregarJuego( juego:Juego ): Observable<Juego> {
    return this.http.post<Juego>(`${ this.baseUrl }/juegos`, juego );
  }

  actualizarJuego( juego: Juego ): Observable<Juego> {
    return this.http.put<Juego>(`${ this.baseUrl }/juegos/${ juego.id }`, juego );
  }

  borrarJuego( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/juegos/${ id }`);
  }

}

