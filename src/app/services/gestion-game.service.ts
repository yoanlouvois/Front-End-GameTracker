// game.service.ts
import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject, of, switchMap} from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { GameControllerService } from './services/game-controller.service';
import { GameDto } from './models/game-dto';
import {Game} from './models/game';

@Injectable({
  providedIn: 'root'
})
export class GestionGameService {
// BehaviorSubject pour stocker et partager les jeux à travers l'application
  private gamesSubject = new BehaviorSubject<GameDto[]>([]);

  // Observable public que les composants peuvent utiliser
  public games$ = this.gamesSubject.asObservable();

  // Indique si les données ont déjà été chargées
  private loaded = false;

  constructor(private gameControllerService: GameControllerService) { }

  loadAllGames(forceRefresh = false): Observable<GameDto[]> {
    // Si les jeux sont déjà chargés et qu'on ne force pas le rafraîchissement
    if (this.loaded && !forceRefresh) {
      return this.games$;
    }

    // Paramètres de pagination (adaptez selon vos besoins)
    const pageable = {
      page: 0,
      size: 100,
      sort: ['name,asc']
    };

    return this.gameControllerService.getAllGames({ pageable }).pipe(
      map(pageData => pageData.content || []),
      tap(games => {
        this.gamesSubject.next(games);
        this.loaded = true;
      }),
      catchError(error => {
        console.error('Erreur lors du chargement des jeux', error);
        return of([]);
      })
    );
  }

  getGameByName(name: string): Observable<Game | undefined> {
    console.log('GestionGameService: Recherche du jeu par nom:', name);

    return this.gameControllerService.getGamesByName({ name }).pipe(
      tap(games => {
        console.log('GestionGameService: Résultat brut de l\'API:', games);
        console.log('GestionGameService: Nombre de jeux trouvés:', games ? games.length : 0);
      }),
      map(games => {
        if (games && games.length > 0) {
          const game = games[0];
          console.log('GestionGameService: Premier jeu trouvé:', {
            id: game.id,
            name: game.name,
            url: game.url,
            description: game.description
          });
          return game;
        }
        console.log('GestionGameService: Aucun jeu trouvé');
        return undefined;
      }),
      catchError(error => {
        console.error('GestionGameService: Erreur lors de la recherche du jeu:', error);
        return of(undefined);
      })
    );
  }
}
