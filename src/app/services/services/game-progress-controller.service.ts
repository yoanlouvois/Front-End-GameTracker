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

import { completeGame } from '../fn/game-progress-controller/complete-game';
import { CompleteGame$Params } from '../fn/game-progress-controller/complete-game';
import { countGamesByStatusForUser } from '../fn/game-progress-controller/count-games-by-status-for-user';
import { CountGamesByStatusForUser$Params } from '../fn/game-progress-controller/count-games-by-status-for-user';
import { createProgress } from '../fn/game-progress-controller/create-progress';
import { CreateProgress$Params } from '../fn/game-progress-controller/create-progress';
import { deleteProgress } from '../fn/game-progress-controller/delete-progress';
import { DeleteProgress$Params } from '../fn/game-progress-controller/delete-progress';
import { GameProgressDto } from '../models/game-progress-dto';
import { getAllUserProgress } from '../fn/game-progress-controller/get-all-user-progress';
import { GetAllUserProgress$Params } from '../fn/game-progress-controller/get-all-user-progress';
import { getCurrentProgress } from '../fn/game-progress-controller/get-current-progress';
import { GetCurrentProgress$Params } from '../fn/game-progress-controller/get-current-progress';
import { getGamesByStatus } from '../fn/game-progress-controller/get-games-by-status';
import { GetGamesByStatus$Params } from '../fn/game-progress-controller/get-games-by-status';
import { getMostPopularGames } from '../fn/game-progress-controller/get-most-popular-games';
import { GetMostPopularGames$Params } from '../fn/game-progress-controller/get-most-popular-games';
import { getProgressById } from '../fn/game-progress-controller/get-progress-by-id';
import { GetProgressById$Params } from '../fn/game-progress-controller/get-progress-by-id';
import { getProgressByUserOrderByBestScoreDesc } from '../fn/game-progress-controller/get-progress-by-user-order-by-best-score-desc';
import { GetProgressByUserOrderByBestScoreDesc$Params } from '../fn/game-progress-controller/get-progress-by-user-order-by-best-score-desc';
import { getProgressByUserOrderByTimePlayedDesc } from '../fn/game-progress-controller/get-progress-by-user-order-by-time-played-desc';
import { GetProgressByUserOrderByTimePlayedDesc$Params } from '../fn/game-progress-controller/get-progress-by-user-order-by-time-played-desc';
import { getProgressForGame } from '../fn/game-progress-controller/get-progress-for-game';
import { GetProgressForGame$Params } from '../fn/game-progress-controller/get-progress-for-game';
import { getRecentlyPlayedGames } from '../fn/game-progress-controller/get-recently-played-games';
import { GetRecentlyPlayedGames$Params } from '../fn/game-progress-controller/get-recently-played-games';
import { getTopScoringUsersForGame } from '../fn/game-progress-controller/get-top-scoring-users-for-game';
import { GetTopScoringUsersForGame$Params } from '../fn/game-progress-controller/get-top-scoring-users-for-game';
import { getTotalPlaytimeForUser } from '../fn/game-progress-controller/get-total-playtime-for-user';
import { GetTotalPlaytimeForUser$Params } from '../fn/game-progress-controller/get-total-playtime-for-user';
import { getUsersByGameOrderedByPlaytime } from '../fn/game-progress-controller/get-users-by-game-ordered-by-playtime';
import { GetUsersByGameOrderedByPlaytime$Params } from '../fn/game-progress-controller/get-users-by-game-ordered-by-playtime';
import { getUsersWithLongestStreaks } from '../fn/game-progress-controller/get-users-with-longest-streaks';
import { GetUsersWithLongestStreaks$Params } from '../fn/game-progress-controller/get-users-with-longest-streaks';
import { incrementStreak1 } from '../fn/game-progress-controller/increment-streak-1';
import { IncrementStreak1$Params } from '../fn/game-progress-controller/increment-streak-1';
import { recordAttempt } from '../fn/game-progress-controller/record-attempt';
import { RecordAttempt$Params } from '../fn/game-progress-controller/record-attempt';
import { resetProgress } from '../fn/game-progress-controller/reset-progress';
import { ResetProgress$Params } from '../fn/game-progress-controller/reset-progress';
import { resetStreak } from '../fn/game-progress-controller/reset-streak';
import { ResetStreak$Params } from '../fn/game-progress-controller/reset-streak';
import { startNewGameSession } from '../fn/game-progress-controller/start-new-game-session';
import { StartNewGameSession$Params } from '../fn/game-progress-controller/start-new-game-session';
import { updateBestScore } from '../fn/game-progress-controller/update-best-score';
import { UpdateBestScore$Params } from '../fn/game-progress-controller/update-best-score';
import { updateGameplaySession } from '../fn/game-progress-controller/update-gameplay-session';
import { UpdateGameplaySession$Params } from '../fn/game-progress-controller/update-gameplay-session';

@Injectable({ providedIn: 'root' })
export class GameProgressControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateGameplaySession()` */
  static readonly UpdateGameplaySessionPath = '/gametracker/v1/progress/{progressId}/update';

  /**
   * Mettre à jour la session de jeu.
   *
   * Mettre à jour la session de jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateGameplaySession()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateGameplaySession$Response(params: UpdateGameplaySession$Params, context?: HttpContext): Observable<StrictHttpResponse<GameProgressDto>> {
    return updateGameplaySession(this.http, this.rootUrl, params, context);
  }

  /**
   * Mettre à jour la session de jeu.
   *
   * Mettre à jour la session de jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateGameplaySession$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateGameplaySession(params: UpdateGameplaySession$Params, context?: HttpContext): Observable<GameProgressDto> {
    return this.updateGameplaySession$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameProgressDto>): GameProgressDto => r.body)
    );
  }

  /** Path part for operation `resetStreak()` */
  static readonly ResetStreakPath = '/gametracker/v1/progress/{progressId}/streak/reset';

  /**
   * Réinitialiser le streak.
   *
   * Réinitialiser le streak
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetStreak()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetStreak$Response(params: ResetStreak$Params, context?: HttpContext): Observable<StrictHttpResponse<GameProgressDto>> {
    return resetStreak(this.http, this.rootUrl, params, context);
  }

  /**
   * Réinitialiser le streak.
   *
   * Réinitialiser le streak
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetStreak$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetStreak(params: ResetStreak$Params, context?: HttpContext): Observable<GameProgressDto> {
    return this.resetStreak$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameProgressDto>): GameProgressDto => r.body)
    );
  }

  /** Path part for operation `incrementStreak1()` */
  static readonly IncrementStreak1Path = '/gametracker/v1/progress/{progressId}/streak/increment';

  /**
   * Incrémenter le streak.
   *
   * Incrémenter le streak
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `incrementStreak1()` instead.
   *
   * This method doesn't expect any request body.
   */
  incrementStreak1$Response(params: IncrementStreak1$Params, context?: HttpContext): Observable<StrictHttpResponse<GameProgressDto>> {
    return incrementStreak1(this.http, this.rootUrl, params, context);
  }

  /**
   * Incrémenter le streak.
   *
   * Incrémenter le streak
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `incrementStreak1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  incrementStreak1(params: IncrementStreak1$Params, context?: HttpContext): Observable<GameProgressDto> {
    return this.incrementStreak1$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameProgressDto>): GameProgressDto => r.body)
    );
  }

  /** Path part for operation `updateBestScore()` */
  static readonly UpdateBestScorePath = '/gametracker/v1/progress/{progressId}/score';

  /**
   * Mettre à jour le meilleur score.
   *
   * Mettre à jour le meilleur score
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateBestScore()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateBestScore$Response(params: UpdateBestScore$Params, context?: HttpContext): Observable<StrictHttpResponse<GameProgressDto>> {
    return updateBestScore(this.http, this.rootUrl, params, context);
  }

  /**
   * Mettre à jour le meilleur score.
   *
   * Mettre à jour le meilleur score
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateBestScore$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateBestScore(params: UpdateBestScore$Params, context?: HttpContext): Observable<GameProgressDto> {
    return this.updateBestScore$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameProgressDto>): GameProgressDto => r.body)
    );
  }

  /** Path part for operation `resetProgress()` */
  static readonly ResetProgressPath = '/gametracker/v1/progress/{progressId}/reset';

  /**
   * Réinitialiser la progression de jeu.
   *
   * Réinitialiser la progression de jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resetProgress()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetProgress$Response(params: ResetProgress$Params, context?: HttpContext): Observable<StrictHttpResponse<GameProgressDto>> {
    return resetProgress(this.http, this.rootUrl, params, context);
  }

  /**
   * Réinitialiser la progression de jeu.
   *
   * Réinitialiser la progression de jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resetProgress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resetProgress(params: ResetProgress$Params, context?: HttpContext): Observable<GameProgressDto> {
    return this.resetProgress$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameProgressDto>): GameProgressDto => r.body)
    );
  }

  /** Path part for operation `completeGame()` */
  static readonly CompleteGamePath = '/gametracker/v1/progress/{progressId}/complete';

  /**
   * Marquer la session de jeu comme terminée.
   *
   * Marquer la session de jeu comme terminée
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `completeGame()` instead.
   *
   * This method doesn't expect any request body.
   */
  completeGame$Response(params: CompleteGame$Params, context?: HttpContext): Observable<StrictHttpResponse<GameProgressDto>> {
    return completeGame(this.http, this.rootUrl, params, context);
  }

  /**
   * Marquer la session de jeu comme terminée.
   *
   * Marquer la session de jeu comme terminée
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `completeGame$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  completeGame(params: CompleteGame$Params, context?: HttpContext): Observable<GameProgressDto> {
    return this.completeGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameProgressDto>): GameProgressDto => r.body)
    );
  }

  /** Path part for operation `recordAttempt()` */
  static readonly RecordAttemptPath = '/gametracker/v1/progress/{progressId}/attempt';

  /**
   * Enregistrer une tentative de jeu.
   *
   * Enregistrer une tentative de jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recordAttempt()` instead.
   *
   * This method doesn't expect any request body.
   */
  recordAttempt$Response(params: RecordAttempt$Params, context?: HttpContext): Observable<StrictHttpResponse<GameProgressDto>> {
    return recordAttempt(this.http, this.rootUrl, params, context);
  }

  /**
   * Enregistrer une tentative de jeu.
   *
   * Enregistrer une tentative de jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recordAttempt$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  recordAttempt(params: RecordAttempt$Params, context?: HttpContext): Observable<GameProgressDto> {
    return this.recordAttempt$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameProgressDto>): GameProgressDto => r.body)
    );
  }

  /** Path part for operation `startNewGameSession()` */
  static readonly StartNewGameSessionPath = '/gametracker/v1/progress/start';

  /**
   * Démarrer une nouvelle session de jeu.
   *
   * Démarrer une nouvelle session de jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `startNewGameSession()` instead.
   *
   * This method doesn't expect any request body.
   */
  startNewGameSession$Response(params: StartNewGameSession$Params, context?: HttpContext): Observable<StrictHttpResponse<GameProgressDto>> {
    return startNewGameSession(this.http, this.rootUrl, params, context);
  }

  /**
   * Démarrer une nouvelle session de jeu.
   *
   * Démarrer une nouvelle session de jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `startNewGameSession$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  startNewGameSession(params: StartNewGameSession$Params, context?: HttpContext): Observable<GameProgressDto> {
    return this.startNewGameSession$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameProgressDto>): GameProgressDto => r.body)
    );
  }

  /** Path part for operation `createProgress()` */
  static readonly CreateProgressPath = '/gametracker/v1/progress/create';

  /**
   * Créer une progression de jeu.
   *
   * Créer une progression de jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createProgress()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProgress$Response(params: CreateProgress$Params, context?: HttpContext): Observable<StrictHttpResponse<GameProgressDto>> {
    return createProgress(this.http, this.rootUrl, params, context);
  }

  /**
   * Créer une progression de jeu.
   *
   * Créer une progression de jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createProgress$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProgress(params: CreateProgress$Params, context?: HttpContext): Observable<GameProgressDto> {
    return this.createProgress$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameProgressDto>): GameProgressDto => r.body)
    );
  }

  /** Path part for operation `getProgressById()` */
  static readonly GetProgressByIdPath = '/gametracker/v1/progress/{progressId}';

  /**
   * Récupérer une progression de jeu par son ID.
   *
   * Récupérer une progression de jeu par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProgressById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProgressById$Response(params: GetProgressById$Params, context?: HttpContext): Observable<StrictHttpResponse<GameProgressDto>> {
    return getProgressById(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer une progression de jeu par son ID.
   *
   * Récupérer une progression de jeu par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProgressById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProgressById(params: GetProgressById$Params, context?: HttpContext): Observable<GameProgressDto> {
    return this.getProgressById$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameProgressDto>): GameProgressDto => r.body)
    );
  }

  /** Path part for operation `deleteProgress()` */
  static readonly DeleteProgressPath = '/gametracker/v1/progress/{progressId}';

  /**
   * Supprimer une progression de jeu.
   *
   * Supprimer une progression de jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProgress()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProgress$Response(params: DeleteProgress$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteProgress(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer une progression de jeu.
   *
   * Supprimer une progression de jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteProgress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProgress(params: DeleteProgress$Params, context?: HttpContext): Observable<void> {
    return this.deleteProgress$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getTotalPlaytimeForUser()` */
  static readonly GetTotalPlaytimeForUserPath = '/gametracker/v1/progress/user/{userId}/total-playtime';

  /**
   * Récupérer le temps total de jeu d'un utilisateur.
   *
   * Récupérer le temps total de jeu d'un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTotalPlaytimeForUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalPlaytimeForUser$Response(params: GetTotalPlaytimeForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getTotalPlaytimeForUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer le temps total de jeu d'un utilisateur.
   *
   * Récupérer le temps total de jeu d'un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTotalPlaytimeForUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalPlaytimeForUser(params: GetTotalPlaytimeForUser$Params, context?: HttpContext): Observable<number> {
    return this.getTotalPlaytimeForUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getProgressByUserOrderByTimePlayedDesc()` */
  static readonly GetProgressByUserOrderByTimePlayedDescPath = '/gametracker/v1/progress/user/{userId}/time-played';

  /**
   * Récupérer les progressions d'un utilisateur triées par temps joué.
   *
   * Récupérer les progressions d'un utilisateur triées par temps joué
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProgressByUserOrderByTimePlayedDesc()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProgressByUserOrderByTimePlayedDesc$Response(params: GetProgressByUserOrderByTimePlayedDesc$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GameProgressDto>>> {
    return getProgressByUserOrderByTimePlayedDesc(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les progressions d'un utilisateur triées par temps joué.
   *
   * Récupérer les progressions d'un utilisateur triées par temps joué
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProgressByUserOrderByTimePlayedDesc$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProgressByUserOrderByTimePlayedDesc(params: GetProgressByUserOrderByTimePlayedDesc$Params, context?: HttpContext): Observable<Array<GameProgressDto>> {
    return this.getProgressByUserOrderByTimePlayedDesc$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GameProgressDto>>): Array<GameProgressDto> => r.body)
    );
  }

  /** Path part for operation `getGamesByStatus()` */
  static readonly GetGamesByStatusPath = '/gametracker/v1/progress/user/{userId}/status';

  /**
   * Récupérer les progressions d'un utilisateur par statut.
   *
   * Récupérer les progressions d'un utilisateur par statut
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGamesByStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGamesByStatus$Response(params: GetGamesByStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GameProgressDto>>> {
    return getGamesByStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les progressions d'un utilisateur par statut.
   *
   * Récupérer les progressions d'un utilisateur par statut
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGamesByStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGamesByStatus(params: GetGamesByStatus$Params, context?: HttpContext): Observable<Array<GameProgressDto>> {
    return this.getGamesByStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GameProgressDto>>): Array<GameProgressDto> => r.body)
    );
  }

  /** Path part for operation `getRecentlyPlayedGames()` */
  static readonly GetRecentlyPlayedGamesPath = '/gametracker/v1/progress/user/{userId}/recent';

  /**
   * Récupérer les jeux récemment joués par un utilisateur.
   *
   * Récupérer les jeux récemment joués par un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRecentlyPlayedGames()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecentlyPlayedGames$Response(params: GetRecentlyPlayedGames$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GameProgressDto>>> {
    return getRecentlyPlayedGames(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les jeux récemment joués par un utilisateur.
   *
   * Récupérer les jeux récemment joués par un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRecentlyPlayedGames$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecentlyPlayedGames(params: GetRecentlyPlayedGames$Params, context?: HttpContext): Observable<Array<GameProgressDto>> {
    return this.getRecentlyPlayedGames$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GameProgressDto>>): Array<GameProgressDto> => r.body)
    );
  }

  /** Path part for operation `countGamesByStatusForUser()` */
  static readonly CountGamesByStatusForUserPath = '/gametracker/v1/progress/user/{userId}/count-by-status';

  /**
   * Compter le nombre de jeux par statut pour un utilisateur.
   *
   * Compter le nombre de jeux par statut pour un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `countGamesByStatusForUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  countGamesByStatusForUser$Response(params: CountGamesByStatusForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {
    return countGamesByStatusForUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Compter le nombre de jeux par statut pour un utilisateur.
   *
   * Compter le nombre de jeux par statut pour un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `countGamesByStatusForUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  countGamesByStatusForUser(params: CountGamesByStatusForUser$Params, context?: HttpContext): Observable<{
[key: string]: number;
}> {
    return this.countGamesByStatusForUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: number;
}>): {
[key: string]: number;
} => r.body)
    );
  }

  /** Path part for operation `getProgressByUserOrderByBestScoreDesc()` */
  static readonly GetProgressByUserOrderByBestScoreDescPath = '/gametracker/v1/progress/user/{userId}/best-score';

  /**
   * Récupérer les progressions d'un utilisateur triées par meilleur score.
   *
   * Récupérer les progressions d'un utilisateur triées par meilleur score
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProgressByUserOrderByBestScoreDesc()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProgressByUserOrderByBestScoreDesc$Response(params: GetProgressByUserOrderByBestScoreDesc$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GameProgressDto>>> {
    return getProgressByUserOrderByBestScoreDesc(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les progressions d'un utilisateur triées par meilleur score.
   *
   * Récupérer les progressions d'un utilisateur triées par meilleur score
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProgressByUserOrderByBestScoreDesc$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProgressByUserOrderByBestScoreDesc(params: GetProgressByUserOrderByBestScoreDesc$Params, context?: HttpContext): Observable<Array<GameProgressDto>> {
    return this.getProgressByUserOrderByBestScoreDesc$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GameProgressDto>>): Array<GameProgressDto> => r.body)
    );
  }

  /** Path part for operation `getAllUserProgress()` */
  static readonly GetAllUserProgressPath = '/gametracker/v1/progress/user/{userId}/all';

  /**
   * Récupérer toutes les progressions d'un utilisateur.
   *
   * Récupérer toutes les progressions d'un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllUserProgress()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUserProgress$Response(params: GetAllUserProgress$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GameProgressDto>>> {
    return getAllUserProgress(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer toutes les progressions d'un utilisateur.
   *
   * Récupérer toutes les progressions d'un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllUserProgress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUserProgress(params: GetAllUserProgress$Params, context?: HttpContext): Observable<Array<GameProgressDto>> {
    return this.getAllUserProgress$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GameProgressDto>>): Array<GameProgressDto> => r.body)
    );
  }

  /** Path part for operation `getMostPopularGames()` */
  static readonly GetMostPopularGamesPath = '/gametracker/v1/progress/most-popular-games';

  /**
   * Récupérer les jeux les plus populaires.
   *
   * Récupérer les jeux les plus populaires
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMostPopularGames()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMostPopularGames$Response(params?: GetMostPopularGames$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {
    return getMostPopularGames(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les jeux les plus populaires.
   *
   * Récupérer les jeux les plus populaires
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMostPopularGames$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMostPopularGames(params?: GetMostPopularGames$Params, context?: HttpContext): Observable<{
[key: string]: number;
}> {
    return this.getMostPopularGames$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: number;
}>): {
[key: string]: number;
} => r.body)
    );
  }

  /** Path part for operation `getUsersWithLongestStreaks()` */
  static readonly GetUsersWithLongestStreaksPath = '/gametracker/v1/progress/longest-streaks';

  /**
   * Récupérer les utilisateurs avec les plus longs streaks.
   *
   * Récupérer les utilisateurs avec les plus longs streaks
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsersWithLongestStreaks()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersWithLongestStreaks$Response(params?: GetUsersWithLongestStreaks$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<{
[key: string]: {
};
}>>> {
    return getUsersWithLongestStreaks(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les utilisateurs avec les plus longs streaks.
   *
   * Récupérer les utilisateurs avec les plus longs streaks
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUsersWithLongestStreaks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersWithLongestStreaks(params?: GetUsersWithLongestStreaks$Params, context?: HttpContext): Observable<Array<{
[key: string]: {
};
}>> {
    return this.getUsersWithLongestStreaks$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{
[key: string]: {
};
}>>): Array<{
[key: string]: {
};
}> => r.body)
    );
  }

  /** Path part for operation `getProgressForGame()` */
  static readonly GetProgressForGamePath = '/gametracker/v1/progress/game/{gameId}';

  /**
   * Récupérer toutes les progressions pour un jeu.
   *
   * Récupérer toutes les progressions pour un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProgressForGame()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProgressForGame$Response(params: GetProgressForGame$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GameProgressDto>>> {
    return getProgressForGame(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer toutes les progressions pour un jeu.
   *
   * Récupérer toutes les progressions pour un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProgressForGame$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProgressForGame(params: GetProgressForGame$Params, context?: HttpContext): Observable<Array<GameProgressDto>> {
    return this.getProgressForGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GameProgressDto>>): Array<GameProgressDto> => r.body)
    );
  }

  /** Path part for operation `getUsersByGameOrderedByPlaytime()` */
  static readonly GetUsersByGameOrderedByPlaytimePath = '/gametracker/v1/progress/game/{gameId}/users-by-playtime';

  /**
   * Récupérer les utilisateurs ayant joué à un jeu spécifique.
   *
   * Récupérer les utilisateurs ayant joué à un jeu spécifique
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUsersByGameOrderedByPlaytime()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersByGameOrderedByPlaytime$Response(params: GetUsersByGameOrderedByPlaytime$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {
    return getUsersByGameOrderedByPlaytime(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les utilisateurs ayant joué à un jeu spécifique.
   *
   * Récupérer les utilisateurs ayant joué à un jeu spécifique
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUsersByGameOrderedByPlaytime$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUsersByGameOrderedByPlaytime(params: GetUsersByGameOrderedByPlaytime$Params, context?: HttpContext): Observable<{
[key: string]: number;
}> {
    return this.getUsersByGameOrderedByPlaytime$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: number;
}>): {
[key: string]: number;
} => r.body)
    );
  }

  /** Path part for operation `getTopScoringUsersForGame()` */
  static readonly GetTopScoringUsersForGamePath = '/gametracker/v1/progress/game/{gameId}/top-scoring-users';

  /**
   * Récupérer les utilisateurs avec le meilleur score pour un jeu.
   *
   * Récupérer les utilisateurs avec le meilleur score pour un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTopScoringUsersForGame()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTopScoringUsersForGame$Response(params: GetTopScoringUsersForGame$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {
    return getTopScoringUsersForGame(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les utilisateurs avec le meilleur score pour un jeu.
   *
   * Récupérer les utilisateurs avec le meilleur score pour un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTopScoringUsersForGame$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTopScoringUsersForGame(params: GetTopScoringUsersForGame$Params, context?: HttpContext): Observable<{
[key: string]: number;
}> {
    return this.getTopScoringUsersForGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: number;
}>): {
[key: string]: number;
} => r.body)
    );
  }

  /** Path part for operation `getCurrentProgress()` */
  static readonly GetCurrentProgressPath = '/gametracker/v1/progress/current';

  /**
   * Récupérer la progression actuelle d'un utilisateur pour un jeu.
   *
   * Récupérer la progression actuelle d'un utilisateur pour un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCurrentProgress()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentProgress$Response(params: GetCurrentProgress$Params, context?: HttpContext): Observable<StrictHttpResponse<GameProgressDto>> {
    return getCurrentProgress(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer la progression actuelle d'un utilisateur pour un jeu.
   *
   * Récupérer la progression actuelle d'un utilisateur pour un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCurrentProgress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCurrentProgress(params: GetCurrentProgress$Params, context?: HttpContext): Observable<GameProgressDto> {
    return this.getCurrentProgress$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameProgressDto>): GameProgressDto => r.body)
    );
  }

}
