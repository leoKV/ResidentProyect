import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Juego } from '../../interfaces/juegos-interfaces';
import { JuegosService } from '../../services/juegos.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 5px;
  }
`]
})
export class AgregarComponent implements OnInit {

  juego: Juego={
    titulo: '',
    director:'',
    publisher: '',
    consola_main: '',
    anio_salida: 0,
    character_main: '',
    alt_img: '',
    sinopsis:'',
    sound:''
  }
  constructor( private juegosService: JuegosService,
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
        switchMap( ({id}) => this.juegosService.getJuegoPorId( id ) )
      )
      .subscribe( juego => this.juego = juego );
  }

  guardar() {
    
    if( this.juego.titulo.trim().length === 0  ) {
      return;
    }

    if ( this.juego.id ) {
      // Actualizar
      this.juegosService.actualizarJuego( this.juego )
        .subscribe( juego => this.mostrarSnakbar('Registro actualizado'));

    } else {
      // Crear
      this.juegosService.agregarJuego( this.juego )
        .subscribe( juego => {
          this.router.navigate(['/juegos/editar', juego.id ]);
          this.mostrarSnakbar('Registro creado');
        })
    }

  }

  borrarJuego() {

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '250px',
      data: this.juego
    });

    dialog.afterClosed().subscribe(
      (result) => {

        if( result ) {
          this.juegosService.borrarJuego( this.juego.id! )
            .subscribe( resp => {
              this.router.navigate(['/juegos']);
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
