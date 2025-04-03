import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from './Components/header/header.component';
import {LayoutComponent} from './Components/layout/layout.component';
import {EcranConnexionComponent} from './Ecrans/ecran-connexion/ecran-connexion.component';
import { DbInitializerService } from './services/db-initializer.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,  // Composant standalone
  imports: [RouterModule, LayoutComponent],  // Importer le module de routage et le composant HelloPage
})
export class AppComponent implements OnInit{
  title = 'Mon Application';
  constructor(private dbInitializer: DbInitializerService) {}

  ngOnInit() {
    // Initialiser la base de données au démarrage de l'application
    this.dbInitializer.initializeGamesIfEmpty()
      .then(() => console.log('Vérification/initialisation de la base de données terminée.'))
      .catch(error => console.error('Erreur lors de l\'initialisation de la base de données:', error));
  }
}
