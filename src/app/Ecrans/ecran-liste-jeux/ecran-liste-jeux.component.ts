import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameListComponent } from '../game-list/game-list.component'; // Ajustez le chemin si nécessaire

@Component({
  selector: 'app-ecran-liste-jeux',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    GameListComponent // Importez le composant
  ],
  templateUrl: './ecran-liste-jeux.component.html',
  styleUrl: './ecran-liste-jeux.component.scss'
})
export class EcranListeJeuxComponent {
  sortAccordionOpen: boolean = false;

  // Gérer l'ouverture/fermeture de l'accordéon
  toggleSortAccordion(): void {
    this.sortAccordionOpen = !this.sortAccordionOpen;
  }
}
