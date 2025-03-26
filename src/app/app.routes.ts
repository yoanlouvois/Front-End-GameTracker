import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {EcranAccueil} from './Ecrans/ecran-accueil/ecran-accueil';
import {EcranAProposDeNousComponent} from './Ecrans/ecran-a-propos-de-nous/ecran-a-propos-de-nous.component';
import {EcranConnexionComponent} from './Ecrans/ecran-connexion/ecran-connexion.component';
import {EcranInscriptionComponent} from './Ecrans/ecran-inscription/ecran-inscription.component';
import {EcranJeuComponent} from './Ecrans/ecran-jeu/ecran-jeu.component';
import {EcranListeJeuxComponent} from './Ecrans/ecran-liste-jeux/ecran-liste-jeux.component';


export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: EcranAccueil},
  { path: 'Infos', component: EcranAProposDeNousComponent},
  { path: 'Connexion', component: EcranConnexionComponent},
  { path: 'Inscription', component: EcranInscriptionComponent},
  { path: 'Jeu', component: EcranJeuComponent},
  { path: 'ListeJeux', component: EcranListeJeuxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
