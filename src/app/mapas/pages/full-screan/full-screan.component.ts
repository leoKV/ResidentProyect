import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-full-screan',
  templateUrl: './full-screan.component.html',
  styles: [
    `
  #mapa{
    width: 100%;
    height: 100%
  }
  `
  ]
})
export class FullScreanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var map = new mapboxgl.Map({
    container:'mapa',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[-100.87453064961822,21.46533511524833],
    zoom:20
    });
  }

}
