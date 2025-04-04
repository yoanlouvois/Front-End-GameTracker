/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createOrUpdateStreak } from '../fn/win-streak-controller/create-or-update-streak';
import { CreateOrUpdateStreak$Params } from '../fn/win-streak-controller/create-or-update-streak';
import { getActiveStreaks } from '../fn/win-streak-controller/get-active-streaks';
import { GetActiveStreaks$Params } from '../fn/win-streak-controller/get-active-streaks';
import { getCurrentStreak } from '../fn/win-streak-controller/get-current-streak';
import { GetCurrentStreak$Params } from '../fn/win-streak-controller/get-current-streak';
import { getGameBestStreaks } from '../fn/win-streak-controller/get-game-best-streaks';
import { GetGameBestStreaks$Params } from '../fn/win-streak-controller/get-game-best-streaks';
import { getGlobalBestStreaks } from '../fn/win-streak-controller/get-global-best-streaks';
import { GetGlobalBestStreaks$Params } from '../fn/win-streak-controller/get-global-best-streaks';
import { getStreakById } from '../fn/win-streak-controller/get-streak-by-id';
import { GetStreakById$Params } from '../fn/win-streak-controller/get-streak-by-id';
import { getStreaksByGame } from '../fn/win-streak-controller/get-streaks-by-game';
import { GetStreaksByGame$Params } from '../fn/win-streak-controller/get-streaks-by-game';
import { getStreaksByUser } from '../fn/win-streak-controller/get-streaks-by-user';
import { GetStreaksByUser$Params } from '../fn/win-streak-controller/get-streaks-by-user';
import { incrementStreak } from '../fn/win-streak-controller/increment-streak';
import { IncrementStreak$Params } from '../fn/win-streak-controller/increment-streak';
import { isActiveStreak } from '../fn/win-streak-controller/is-active-streak';
import { IsActiveStreak$Params } from '../fn/win-streak-controller/is-active-streak';
import { PageWinStreakDto } from '../models/page-win-streak-dto';
import { resetAllStreaksForGame } from '../fn/win-streak-controller/reset-all-streaks-for-game';
import { ResetAllStreaksForGame$Params } from '../fn/win-streak-controller/reset-all-streaks-for-game';
import { resetCurrentStreak } from '../fn/win-streak-controller/reset-current-streak';
import { ResetCurrentStreak$Params } from '../fn/win-streak-controller/reset-current-streak';
import { resetStreak1 } from '../fn/win-streak-controller/reset-streak-1';
import { ResetStreak1$Params } from '../fn/win-streak-controller/reset-streak-1';
import { updateBestStreak } from '../fn/win-streak-controller/update-best-streak';
import { UpdateBestStreak$Params } from '../fn/win-streak-controller/update-best-streak';
import { WinStreakDto } from '../models/win-streak-dto';

@Injectable({ providedIn: 'root' })
export class WinStreakControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateBestStreak()` */
  static readonly UpdateBestStreakPath = '/gametracker/v1/streaks/update/{userId}/{gameId}';

  /**
   * Mettre à jour la meilleure série.
   *
   * Mettre à jour la meilleure série
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateBestStreak()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateBestStreak$Response(params: UpdateBestStreak$Params, context?: HttpContext): Observable<StrictHttpResponse<WinStreakDto>> {
    return updateBestStreak(this.http, this.rootUrl, params, context);
  }

  /**
   * Mettre à jour la meilleure série.
   *
   * Mettre à jour la meilleure série
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateBestStreak$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateBestStreak(params: UpdateBestStreak$Params, context?: HttpContext): Observable<WinStreakDto> {
    return this.updateBestStreak$Response(params, context).pipe(
      map((r: StrictHttpResponse<WinStreakDto>): WinStreakDto => r.body)
    );
  }

  /** Path part for operation `resetCurrentStreak()` */
  static readonly ResetCurrentStreakPath = '/gametracker/v1/streaks/reset/{userId}/{gameId}';

  /**
   * Réinitialiser la série actuelle.
   *
   * Réinitialiser la série actuelle
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetCurrentStreak()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetCurrentStreak$Response(params: ResetCurrentStreak$Params, context?: HttpContext): Observable<StrictHttpResponse<WinStreakDto>> {
    return resetCurrentStreak(this.http, this.rootUrl, params, context);
  }

  /**
   * Réinitialiser la série actuelle.
   *
   * Réinitialiser la série actuelle
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetCurrentStreak$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetCurrentStreak(params: ResetCurrentStreak$Params, context?: HttpContext): Observable<WinStreakDto> {
    return this.resetCurrentStreak$Response(params, context).pipe(
      map((r: StrictHttpResponse<WinStreakDto>): WinStreakDto => r.body)
    );
  }

  /** Path part for operation `incrementStreak()` */
  static readonly IncrementStreakPath = '/gametracker/v1/streaks/increment/{userId}/{gameId}';

  /**
   * Incrémenter la série.
   *
   * Incrémenter la série
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incrementStreak()` instead.
   *
   * This method doesn't expect any request body.
   */
  incrementStreak$Response(params: IncrementStreak$Params, context?: HttpContext): Observable<StrictHttpResponse<WinStreakDto>> {
    return incrementStreak(this.http, this.rootUrl, params, context);
  }

  /**
   * Incrémenter la série.
   *
   * Incrémenter la série
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `incrementStreak$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  incrementStreak(params: IncrementStreak$Params, context?: HttpContext): Observable<WinStreakDto> {
    return this.incrementStreak$Response(params, context).pipe(
      map((r: StrictHttpResponse<WinStreakDto>): WinStreakDto => r.body)
    );
  }

  /** Path part for operation `createOrUpdateStreak()` */
  static readonly CreateOrUpdateStreakPath = '/gametracker/v1/streaks/create';

  /**
   * Créer ou mettre à jour une série.
   *
   * Créer ou mettre à jour une série
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createOrUpdateStreak()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOrUpdateStreak$Response(params: CreateOrUpdateStreak$Params, context?: HttpContext): Observable<StrictHttpResponse<WinStreakDto>> {
    return createOrUpdateStreak(this.http, this.rootUrl, params, context);
  }

  /**
   * Créer ou mettre à jour une série.
   *
   * Créer ou mettre à jour une série
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createOrUpdateStreak$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOrUpdateStreak(params: CreateOrUpdateStreak$Params, context?: HttpContext): Observable<WinStreakDto> {
    return this.createOrUpdateStreak$Response(params, context).pipe(
      map((r: StrictHttpResponse<WinStreakDto>): WinStreakDto => r.body)
    );
  }

  /** Path part for operation `getStreakById()` */
  static readonly GetStreakByIdPath = '/gametracker/v1/streaks/{streakId}';

  /**
   * Récupérer une série par son ID.
   *
   * Récupérer une série par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStreakById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStreakById$Response(params: GetStreakById$Params, context?: HttpContext): Observable<StrictHttpResponse<WinStreakDto>> {
    return getStreakById(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer une série par son ID.
   *
   * Récupérer une série par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStreakById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStreakById(params: GetStreakById$Params, context?: HttpContext): Observable<WinStreakDto> {
    return this.getStreakById$Response(params, context).pipe(
      map((r: StrictHttpResponse<WinStreakDto>): WinStreakDto => r.body)
    );
  }

  /** Path part for operation `getStreaksByUser()` */
  static readonly GetStreaksByUserPath = '/gametracker/v1/streaks/user/{userId}';

  /**
   * Récupérer les séries d'un utilisateur.
   *
   * Récupérer les séries d'un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStreaksByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStreaksByUser$Response(params: GetStreaksByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<PageWinStreakDto>> {
    return getStreaksByUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les séries d'un utilisateur.
   *
   * Récupérer les séries d'un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStreaksByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStreaksByUser(params: GetStreaksByUser$Params, context?: HttpContext): Observable<PageWinStreakDto> {
    return this.getStreaksByUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageWinStreakDto>): PageWinStreakDto => r.body)
    );
  }

  /** Path part for operation `getGlobalBestStreaks()` */
  static readonly GetGlobalBestStreaksPath = '/gametracker/v1/streaks/global/best/{limit}';

  /**
   * Récupérer les meilleures séries globales.
   *
   * Récupérer les meilleures séries globales
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGlobalBestStreaks()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGlobalBestStreaks$Response(params: GetGlobalBestStreaks$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {
    return getGlobalBestStreaks(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les meilleures séries globales.
   *
   * Récupérer les meilleures séries globales
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGlobalBestStreaks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGlobalBestStreaks(params: GetGlobalBestStreaks$Params, context?: HttpContext): Observable<{
[key: string]: number;
}> {
    return this.getGlobalBestStreaks$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: number;
}>): {
[key: string]: number;
} => r.body)
    );
  }

  /** Path part for operation `getStreaksByGame()` */
  static readonly GetStreaksByGamePath = '/gametracker/v1/streaks/game/{gameId}';

  /**
   * Récupérer les séries d'un jeu.
   *
   * Récupérer les séries d'un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStreaksByGame()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStreaksByGame$Response(params: GetStreaksByGame$Params, context?: HttpContext): Observable<StrictHttpResponse<PageWinStreakDto>> {
    return getStreaksByGame(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les séries d'un jeu.
   *
   * Récupérer les séries d'un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStreaksByGame$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStreaksByGame(params: GetStreaksByGame$Params, context?: HttpContext): Observable<PageWinStreakDto> {
    return this.getStreaksByGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageWinStreakDto>): PageWinStreakDto => r.body)
    );
  }

  /** Path part for operation `getGameBestStreaks()` */
  static readonly GetGameBestStreaksPath = '/gametracker/v1/streaks/game/best/{gameId}/{limit}';

  /**
   * Récupérer les meilleures séries d'un jeu.
   *
   * Récupérer les meilleures séries d'un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGameBestStreaks()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGameBestStreaks$Response(params: GetGameBestStreaks$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {
    return getGameBestStreaks(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les meilleures séries d'un jeu.
   *
   * Récupérer les meilleures séries d'un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGameBestStreaks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGameBestStreaks(params: GetGameBestStreaks$Params, context?: HttpContext): Observable<{
[key: string]: number;
}> {
    return this.getGameBestStreaks$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: number;
}>): {
[key: string]: number;
} => r.body)
    );
  }

  /** Path part for operation `getCurrentStreak()` */
  static readonly GetCurrentStreakPath = '/gametracker/v1/streaks/current/{userId}/{gameId}';

  /**
   * Récupérer la série actuelle.
   *
   * Récupérer la série actuelle
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrentStreak()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentStreak$Response(params: GetCurrentStreak$Params, context?: HttpContext): Observable<StrictHttpResponse<WinStreakDto>> {
    return getCurrentStreak(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer la série actuelle.
   *
   * Récupérer la série actuelle
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrentStreak$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentStreak(params: GetCurrentStreak$Params, context?: HttpContext): Observable<WinStreakDto> {
    return this.getCurrentStreak$Response(params, context).pipe(
      map((r: StrictHttpResponse<WinStreakDto>): WinStreakDto => r.body)
    );
  }

  /** Path part for operation `getActiveStreaks()` */
  static readonly GetActiveStreaksPath = '/gametracker/v1/streaks/active';

  /**
   * Récupérer les séries actives.
   *
   * Récupérer les séries actives
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getActiveStreaks()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActiveStreaks$Response(params: GetActiveStreaks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageWinStreakDto>> {
    return getActiveStreaks(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les séries actives.
   *
   * Récupérer les séries actives
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getActiveStreaks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActiveStreaks(params: GetActiveStreaks$Params, context?: HttpContext): Observable<PageWinStreakDto> {
    return this.getActiveStreaks$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageWinStreakDto>): PageWinStreakDto => r.body)
    );
  }

  /** Path part for operation `isActiveStreak()` */
  static readonly IsActiveStreakPath = '/gametracker/v1/streaks/active/{userId}/{gameId}';

  /**
   * Vérifier si une série est active.
   *
   * Vérifier si une série est active
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `isActiveStreak()` instead.
   *
   * This method doesn't expect any request body.
   */
  isActiveStreak$Response(params: IsActiveStreak$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return isActiveStreak(this.http, this.rootUrl, params, context);
  }

  /**
   * Vérifier si une série est active.
   *
   * Vérifier si une série est active
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `isActiveStreak$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  isActiveStreak(params: IsActiveStreak$Params, context?: HttpContext): Observable<boolean> {
    return this.isActiveStreak$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `resetAllStreaksForGame()` */
  static readonly ResetAllStreaksForGamePath = '/gametracker/v1/streaks/reset/all/{gameId}';

  /**
   * Réinitialiser toutes les séries d'un jeu.
   *
   * Réinitialiser toutes les séries d'un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetAllStreaksForGame()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetAllStreaksForGame$Response(params: ResetAllStreaksForGame$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return resetAllStreaksForGame(this.http, this.rootUrl, params, context);
  }

  /**
   * Réinitialiser toutes les séries d'un jeu.
   *
   * Réinitialiser toutes les séries d'un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetAllStreaksForGame$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetAllStreaksForGame(params: ResetAllStreaksForGame$Params, context?: HttpContext): Observable<void> {
    return this.resetAllStreaksForGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `resetStreak1()` */
  static readonly ResetStreak1Path = '/gametracker/v1/streaks/delete/{streakId}';

  /**
   * Supprimer une série.
   *
   * Supprimer une série
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetStreak1()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetStreak1$Response(params: ResetStreak1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return resetStreak1(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer une série.
   *
   * Supprimer une série
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetStreak1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetStreak1(params: ResetStreak1$Params, context?: HttpContext): Observable<void> {
    return this.resetStreak1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
