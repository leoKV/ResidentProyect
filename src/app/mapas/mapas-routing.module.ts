import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreanComponent } from './pages/full-screan/full-screan.component';

const routes: Routes =[
 {
   path:'',
   children:[
     { path: 'fullscreen',component: FullScreanComponent},
     {path: '**',redirectTo:'fullscreen'}
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)  ],
  exports:[RouterModule]
})
export class MapasRoutingModule { }
