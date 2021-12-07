import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './pipes/imagen.pipe';
import { SoundsPipe } from './pipes/sounds.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { PeliculaTarjetaComponent } from './components/pelicula-tarjeta/pelicula-tarjeta.component';
import { AgregarPComponent } from './pages/agregar-p/agregar-p.component';
import { BuscarPComponent } from './pages/buscar-p/buscar-p.component';
import { HomePComponent } from './pages/home-p/home-p.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { ListadoPComponent } from './pages/listado-p/listado-p.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { RedesComponent } from './redes/redes.component';





@NgModule({
  declarations: [
    ImagenPipe,
    SoundsPipe,
    ConfirmarComponent,
    PeliculaTarjetaComponent,
    AgregarPComponent,
    BuscarPComponent,
    HomePComponent,
    PeliculaComponent,
    ListadoPComponent,
    RedesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    PeliculasRoutingModule
  ]
})
export class PeliculasModule { }
