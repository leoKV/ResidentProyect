import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullScreanComponent } from './pages/full-screan/full-screan.component';
import { MapasRoutingModule } from './mapas-routing.module';


@NgModule({
  declarations: [
    FullScreanComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
