import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GestionGameService } from '../../services/gestion-game.service';
import { GameDto } from '../../services/models/game-dto';
//import { Observable, switchMap, of } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {Game} from '../../services/models/game';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ecran-jeu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ecran-jeu.component.html',
  styleUrl: './ecran-jeu.component.scss'
})
export class EcranJeuComponent implements OnInit {
  game: Game | undefined;
  loading = true;
  error: string | null = null;
  safeGameUrl: SafeResourceUrl | undefined;

  constructor(
    private route: ActivatedRoute,
    private gameService: GestionGameService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // Au lieu de route.paramMap, essayez directement
    this.route.params.subscribe(params => {
      const gameName = params['name'];
      //console.log('Nom du jeu depuis params:', gameName);

      if (gameName) {
        this.gameService.getGameByName(gameName).subscribe({
          next: (game) => {
            //console.log('Jeu trouvé:', game);
            this.game = game;

            if (this.game && this.game.url) {
              this.safeGameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.game.url);
            }

            this.loading = false;
          },
          error: (error) => {
            console.error('Erreur:', error);
            this.loading = false;
            this.error = "Erreur lors du chargement du jeu";
          }
        });
      } else {
        //console.log('Paramètre name non trouvé dans l\'URL');
        this.loading = false;
        this.error = "Nom du jeu non spécifié";
      }
    });
    }
}
