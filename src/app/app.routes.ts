import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {EcranAccueil} from './ecran-accueil/ecran-accueil';


export const routes: Routes = [
  { path: 'newPage', component: EcranAccueil}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
