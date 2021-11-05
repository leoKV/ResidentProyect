import { Component, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula-interfaces';

@Component({
  selector: 'app-pelicula-tarjeta',
  templateUrl: './pelicula-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }
`]
})
export class PeliculaTarjetaComponent  {

  @Input() pelicula!: Pelicula;

}
