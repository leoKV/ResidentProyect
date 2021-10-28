import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';
import { Juego } from '../../interfaces/juegos-interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  juegos: Juego[] = [];
  
  constructor( private juegoService: JuegosService ) { }

  ngOnInit(): void {

    this.juegoService.getJuegos()
      .subscribe( juegos => this.juegos = juegos );

  }

}
