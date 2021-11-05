import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Pelicula } from '../../interfaces/pelicula-interfaces';
import { PeliculaService } from '../../services/pelicula.service';
import { ConfirmarComponent } from '../../../peliculas/components/confirmar/confirmar.component';


@Component({
  selector: 'app-agregar-p',
  templateUrl: './agregar-p.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 5px;
  }
`]
})
export class AgregarPComponent implements OnInit {

  pelicula:Pelicula={
    director:'',
    titulo: '',
    productora: '',
    anio_salida: 0,
    character_main: '',
    alt_img: '',
    sinopsis: '',
    sound:''
  }

  constructor( private peliculasService: PeliculaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog ) { }

  ngOnInit(): void {
    if( !this.router.url.includes('editar') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.peliculasService.getPeliculaPorId( id ) )
      )
      .subscribe( pelicula => this.pelicula = pelicula );
  }

  guardar() {
    
    if( this.pelicula.titulo.trim().length === 0  ) {
      return;
    }

    if ( this.pelicula.id ) {
      // Actualizar
      this.peliculasService.actualizarPelicula( this.pelicula )
        .subscribe( juego => this.mostrarSnakbar('Registro actualizado'));

    } else {
      // Crear
      this.peliculasService.agregarPelicula( this.pelicula )
        .subscribe( pelicula => {
          this.router.navigate(['/juegos/editar', pelicula.id ]);
          this.mostrarSnakbar('Registro creado');
        })
    }

  }

  borrarPelicula() {

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.pelicula
    });

    dialog.afterClosed().subscribe(
      (result) => {

        if( result ) {
          this.peliculasService.borrarPelicula( this.pelicula.id! )
            .subscribe( resp => {
              this.router.navigate(['/peliculas']);
            });
        }
        
      }
    )
  }

  mostrarSnakbar( mensaje: string ) {
    this.snackBar.open( mensaje, 'ok!', {
      duration: 2500
    });

  }


}
