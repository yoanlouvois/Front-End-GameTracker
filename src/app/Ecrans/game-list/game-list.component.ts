import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionGameService } from '../../services/gestion-game.service'; // Ajustez le chemin si nécessaire
import { GameDto } from '../../services/models/game-dto'; // Ajustez le chemin si nécessaire
import { Observable } from 'rxjs';
import { GameCardComponent } from '../game-card/game-card.component'; // Ce composant sera créé à l'étape suivante

@Component({
  selector: 'app-game-list',
  standalone: true, // Je remarque que vous semblez utiliser les composants standalone d'Angular
  imports: [CommonModule, GameCardComponent],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss'
})
export class GameListComponent implements OnInit {
  games$: Observable<GameDto[]>;
  loading = true;

  constructor(private gameService: GestionGameService) {
    this.games$ = this.gameService.games$;
  }

  ngOnInit(): void {
    // Charger tous les jeux
    this.gameService.loadAllGames().subscribe({
      next: () => {
        this.loading = false;
        console.log('Jeux chargés avec succès');
      },
      error: (error) => {
        this.loading = false;
        console.error('Erreur lors du chargement des jeux', error);
      }
    });
  }
}
