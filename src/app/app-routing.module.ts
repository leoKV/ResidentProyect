import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

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
  path:'404',
  component: ErrorPageComponent
},
{
  path:'**',
  redirectTo:'404'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
