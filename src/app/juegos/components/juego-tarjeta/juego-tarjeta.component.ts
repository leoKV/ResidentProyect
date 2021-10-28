import { Component, Input } from '@angular/core';
import { Juego } from '../../interfaces/juegos-interfaces';

@Component({
  selector: 'app-juego-tarjeta',
  templateUrl: './juego-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }
`]
})
export class JuegoTarjetaComponent  {
  @Input() juego!: Juego;
}
