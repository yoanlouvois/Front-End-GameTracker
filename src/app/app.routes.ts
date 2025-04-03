import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {EcranAccueil} from './Ecrans/ecran-accueil/ecran-accueil';
import {EcranAProposDeNousComponent} from './Ecrans/ecran-a-propos-de-nous/ecran-a-propos-de-nous.component';
import {EcranConnexionComponent} from './Ecrans/ecran-connexion/ecran-connexion.component';
import {EcranInscriptionComponent} from './Ecrans/ecran-inscription/ecran-inscription.component';
import {EcranJeuComponent} from './Ecrans/ecran-jeu/ecran-jeu.component';
import {EcranListeJeuxComponent} from './Ecrans/ecran-liste-jeux/ecran-liste-jeux.component';
import {EcranProfilComponent} from './Ecrans/ecran-profil/ecran-profil.component';
import {EcranEditerProfilComponent} from './Ecrans/ecran-editer-profil/ecran-editer-profil.component';
import {EcranSocialComponent} from './Ecrans/ecran-social/ecran-social.component';
import {EcranNotificationsComponent} from './Ecrans/ecran-notifications/ecran-notifications.component';
import {EcranDiscussionsComponent} from './Ecrans/ecran-discussions/ecran-discussions.component';
import {EcranAjouterAmiComponent} from './Ecrans/ecran-ajouter-ami/ecran-ajouter-ami.component';
import {GameListComponent} from './Ecrans/game-list/game-list.component';
import {NewestGamesComponent} from './Components/newest-games/newest-games.component';


export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: EcranAccueil},
  { path: 'Profil', component: EcranProfilComponent},
  { path: 'EditerProfil', component: EcranEditerProfilComponent},
  { path: 'Social', component: EcranSocialComponent},
  { path: 'Infos', component: EcranAProposDeNousComponent},
  { path: 'Connexion', component: EcranConnexionComponent},
  { path: 'Inscription', component: EcranInscriptionComponent},
  { path: 'Jeu', component: EcranJeuComponent },
  { path: 'Jeu/:name', component: EcranJeuComponent },
  { path: 'ListeJeux', component: EcranListeJeuxComponent},
  { path: 'AjouterAmi', component: EcranAjouterAmiComponent},
  { path: 'Notifications', component: EcranNotificationsComponent},
  { path: 'Discussions', component: EcranDiscussionsComponent},
  { path: 'Discussions/:friendName', component: EcranDiscussionsComponent },
  { path: 'GameList', component: GameListComponent},
  { path: 'NewestGameList', component: NewestGamesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
