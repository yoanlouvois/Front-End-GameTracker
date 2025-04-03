import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { GameDto } from '../../services/models/game-dto';
import { GestionGameService } from '../../services/gestion-game.service';
import { GameCardComponent } from '../../Ecrans/game-card/game-card.component';

@Component({
  selector: 'app-newest-games',
  standalone: true,
  imports: [CommonModule, GameCardComponent],
  templateUrl: './newest-games.component.html',
  styleUrls: ['./newest-games.component.scss']
})
export class NewestGamesComponent implements OnInit {
  newestGames$: Observable<GameDto[]>;
  loading = true;
  @Input() games$!: Observable<GameDto[]>;

  constructor(private gameService: GestionGameService) {
    this.newestGames$ = this.gameService.getNewestGames();
  }

  ngOnInit(): void {
    // Initialiser l'observable et gérer le statut de chargement
    this.newestGames$.subscribe({
      next: () => {
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        console.error('Erreur lors du chargement des jeux les plus récents', error);
      }
    });
  }
}
