import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { JuegoTarjetaComponent } from './components/juego-tarjeta/juego-tarjeta.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { JuegoComponent } from './pages/juego/juego.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JuegosRoutingModule } from './juegos-routing.module';

@NgModule({
  declarations: [
    ImagenPipe,
    ConfirmarComponent,
    JuegoTarjetaComponent,
    AgregarComponent,
    BuscarComponent,
    JuegoComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
