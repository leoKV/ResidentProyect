import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Pelicula } from '../../interfaces/pelicula-interfaces';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-buscar-p',
  templateUrl: './buscar-p.component.html',
  styleUrls: ['./buscar-p.component.css']
})
export class BuscarPComponent implements OnInit {

  termino: string  = '';
  pelicula: Pelicula[] = [];
  peliculaSeleccionada: Pelicula | undefined;

  constructor(private peliculaService: PeliculaService) { }
  
  ngOnInit(): void {
  }

  buscando() {

    this.peliculaService.getSugerencias( this.termino.trim() )
      .subscribe( pelicula => this.pelicula = pelicula );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value) {
      this.peliculaSeleccionada = undefined;
      return;
    }

    const pelicula:Pelicula= event.option.value;
    this.termino= pelicula.titulo;

    this.peliculaService.getPeliculaPorId( pelicula.id! )
      .subscribe( pelicula=> this.peliculaSeleccionada = pelicula );
  }
}
