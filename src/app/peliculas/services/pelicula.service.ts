import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pelicula } from '../interfaces/pelicula-interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private baseUrl: string = environment.baseUrl;
  constructor( private http:HttpClient) { }

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${ this.baseUrl }/peliculas`);
  }

  getPeliculaPorId( id: string ):Observable<Pelicula> {
    return this.http.get<Pelicula>(`${ this.baseUrl }/peliculas/${ id }`);
  }

  getSugerencias( termino: string ): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(`${ this.baseUrl }/peliculas?q=${ termino }&_limit=6`);
  }

  agregarPelicula( pelicula:Pelicula ): Observable<Pelicula> {
    return this.http.post<Pelicula>(`${ this.baseUrl }/peliculas`, pelicula );
  }

  actualizarPelicula( pelicula:Pelicula ): Observable<Pelicula> {
    return this.http.put<Pelicula>(`${ this.baseUrl }/peliculas/${ pelicula.id }`, pelicula );
  }

  borrarPelicula( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/peliculas/${ id }`);
  }
}
