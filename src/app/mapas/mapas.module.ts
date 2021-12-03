import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullScreanComponent } from './pages/full-screan/full-screan.component';
import { MapasRoutingModule } from './mapas-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    FullScreanComponent,
  ],
  imports: [
    CommonModule,
    MapasRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule

  ]
})
export class MapasModule { }
