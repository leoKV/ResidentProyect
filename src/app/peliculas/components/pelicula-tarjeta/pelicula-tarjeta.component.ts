import { Component, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula-interfaces';

@Component({
  selector: 'app-pelicula-tarjeta',
  templateUrl: './pelicula-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }
  mat-card-title{
      font-size: 25px;
      color: #42FA36;
  }
`]
})
export class PeliculaTarjetaComponent  {

  @Input() pelicula!: Pelicula;

}
