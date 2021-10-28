import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { JuegosService } from '../../services/juegos.service';
import { Juego } from '../../interfaces/juegos-interfaces';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class JuegoComponent implements OnInit {

  juego!: Juego;

  constructor( private activatedRoute: ActivatedRoute,
               private juegosService: JuegosService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.juegosService.getJuegoPorId(id) )
      )
      .subscribe( juego => this.juego = juego );

  }

  regresar() {
    this.router.navigate(['/juegos/listado']);
  }
}
