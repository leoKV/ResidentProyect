import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { JuegoComponent } from './juegos/pages/juego/juego.component';
import { JuegosModule } from './juegos/juegos.module';

const routes: Routes = [
{
  path:'auth',
  loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
},
{
path:'juegos',
loadChildren:() => import('./juegos/juegos.module').then( m => m.JuegosModule),
canLoad:[AuthGuard],
canActivate:[AuthGuard]
},
{
  path:'peliculas',
  loadChildren:() => import('./peliculas/peliculas.module').then( m => m.PeliculasModule),
  canLoad:[AuthGuard],
  canActivate:[AuthGuard]
  },
  {
    path:'mapas',
    loadChildren: () =>import('./mapas/mapas.module')
   .then( m=>m.MapasModule) 
  },
{
  path:'juegos',
  component: JuegoComponent
},
{
  path:'**',
  redirectTo:'juegos'
}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
