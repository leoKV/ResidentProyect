import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Juego } from '../../interfaces/juegos-interfaces';
import { JuegosService } from '../../services/juegos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string  = '';
  juego: Juego[] = [];
  juegoSeleccionado: Juego | undefined;

  constructor(private juegoService: JuegosService) { }
  
  ngOnInit(): void {
  }

  buscando() {

    this.juegoService.getSugerencias( this.termino.trim() )
      .subscribe( juego => this.juego = juego );

  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value) {
      this.juegoSeleccionado = undefined;
      return;
    }

    const juego:Juego= event.option.value;
    this.termino= juego.titulo;

    this.juegoService.getJuegoPorId( juego.id! )
      .subscribe( juego=> this.juegoSeleccionado = juego );
  }

}
