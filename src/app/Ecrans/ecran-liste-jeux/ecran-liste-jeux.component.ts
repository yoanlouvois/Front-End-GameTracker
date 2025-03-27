import {Component} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ecran-liste-jeux',
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './ecran-liste-jeux.component.html',
  styleUrl: './ecran-liste-jeux.component.scss'
})
export class EcranListeJeuxComponent{
  searchQuery: string = '';
  sortAccordionOpen: boolean = false;

  // Données dynamiques des jeux
  games = [
    { title: 'Candy Saga', thumbnail: 'https://placehold.co/215x163', stars: [1, 1, 1, 1, 1] },
    { title: 'Royal Story', thumbnail: 'https://placehold.co/215x163', stars: [1, 1, 1, 0, 0] },
    { title: 'Forge of Empires', thumbnail: 'https://placehold.co/215x163', stars: [1, 1, 1, 1, 1] },
    { title: 'Shift or Drift', thumbnail: 'https://placehold.co/215x163', stars: [1, 1, 1, 1, 0] },
  ];

  // Liste filtrée des jeux (affichée sur la page)
  filteredGames = [...this.games];

  // Filtrer les jeux via recherche
  filterGames(query: string): void {
    this.filteredGames = this.games.filter((game) =>
      game.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Gérer l'ouverture/fermeture de l'accordéon
  toggleSortAccordion(): void {
    this.sortAccordionOpen = !this.sortAccordionOpen;
  }

  // Trier les jeux selon le critère
  sortGames(criteria: string): void {
    switch (criteria) {
      case 'title':
        this.filteredGames.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'rating':
        this.filteredGames.sort((a, b) => b.stars.reduce((x, y) => x + y) - a.stars.reduce((x, y) => x + y));
        break;
      case 'release':
        // Exemple : Ajouter une date dans les objets JSON pour les trier
        break;
    }
  }
}
