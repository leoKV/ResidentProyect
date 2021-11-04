import { Pipe, PipeTransform } from '@angular/core';
import { Juego } from '../interfaces/juegos-interfaces';

@Pipe({
  name: 'sounds'
})
export class SoundsPipe implements PipeTransform {

  transform(juego:Juego): string{

    if( !juego.id && !juego.sound ) {
      return 'assets/no-image.png';
    } else if ( juego.sound ) {
      return juego.sound;
    } else {
      return `assets/sounds/${ juego.id }.mp3`;
    }
  }
}
