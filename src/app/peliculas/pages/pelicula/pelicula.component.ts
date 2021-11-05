import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from '../../interfaces/pelicula-interfaces';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 5px;
  }
`]
})
export class PeliculaComponent implements OnInit {
  pelicula!: Pelicula;

  constructor( private activatedRoute: ActivatedRoute,
               private peliculaService: PeliculaService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.peliculaService.getPeliculaPorId(id) )
      )
      .subscribe( pelicula => this.pelicula = pelicula );

  }

  regresar() {
    this.router.navigate(['/peliculas/listado-p']);
  }

}
