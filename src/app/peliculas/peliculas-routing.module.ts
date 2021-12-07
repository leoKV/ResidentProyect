import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPComponent } from './pages/agregar-p/agregar-p.component';
import { BuscarPComponent } from './pages/buscar-p/buscar-p.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { ListadoPComponent } from './pages/listado-p/listado-p.component';
import { HomePComponent } from './pages/home-p/home-p.component';
import { RedesComponent } from './redes/redes.component';

const rutas: Routes=[
  {
    path: '',
    component: HomePComponent,
    children: [
      { path: 'listado-p', component: ListadoPComponent },
      { path: 'agregar-p', component: AgregarPComponent },
      { path: 'editar/:id', component: AgregarPComponent },
      { path: 'redes', component: RedesComponent },
      { path: 'buscar-p', component: BuscarPComponent },
      { path: ':id', component: PeliculaComponent },
      { path: '**', redirectTo: 'listado-p' }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class PeliculasRoutingModule { }
