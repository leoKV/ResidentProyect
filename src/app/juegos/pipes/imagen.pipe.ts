import { Pipe, PipeTransform } from '@angular/core';
import { Juego } from '../interfaces/juegos-interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(juego:Juego): string{

    if( !juego.id && !juego.alt_img ) {
      return 'assets/no-image.png';
    } else if ( juego.alt_img ) {
      return juego.alt_img;
    } else {
      return `assets/juegos/${ juego.id }.jpg`;
    }
    
  }

}
