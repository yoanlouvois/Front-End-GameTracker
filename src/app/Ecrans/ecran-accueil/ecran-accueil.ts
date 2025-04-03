import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { GestionGameService } from '../../services/gestion-game.service';
import { GameDto } from '../../services/models/game-dto'; // Changez l'import de Game à GameDto
import { NewestGamesComponent } from '../../Components/newest-games/newest-games.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ecran-accueil',
  templateUrl: './ecran-accueil.html',
  standalone: true, // Si c'est un composant standalone
  imports: [
    CommonModule,
    NewestGamesComponent
  ],
  styleUrls: ['./ecran-accueil.scss']
})
export class EcranAccueil implements OnInit {
  newestGames$: Observable<GameDto[]>; // Changez pour utiliser un observable de GameDto

  constructor(private gestionGameService: GestionGameService) {
    // Initialisez l'observable
    this.newestGames$ = this.gestionGameService.getNewestGames();
  }

  ngOnInit(): void {
    // Pas besoin de souscrire ici, nous utiliserons async pipe dans le template
  }
}
