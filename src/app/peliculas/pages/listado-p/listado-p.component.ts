import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from '../../interfaces/pelicula-interfaces';

@Component({
  selector: 'app-listado-p',
  templateUrl: './listado-p.component.html',
  styleUrls: ['./listado-p.component.css']
})
export class ListadoPComponent implements OnInit {
  pelicula: Pelicula[] = [];
  
  constructor( private peliculaService: PeliculaService ) { }

  ngOnInit(): void {

    this.peliculaService.getPeliculas()
      .subscribe( pelicula => this.pelicula = pelicula );

  }


}
