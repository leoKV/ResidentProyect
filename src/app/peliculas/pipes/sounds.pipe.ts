import { Pipe, PipeTransform } from '@angular/core';
import { Pelicula } from '../interfaces/pelicula-interfaces';

@Pipe({
  name: 'sounds'
})
export class SoundsPipe implements PipeTransform {

  transform(pelicula:Pelicula): string{

    if( !pelicula.id && !pelicula.sound ) {
      return 'assets/no-image.png';
    } else if ( pelicula.sound ) {
      return pelicula.sound;
    } else {
      return `assets/soundsP/${ pelicula.id }.mp3`;
    }
  }

}
