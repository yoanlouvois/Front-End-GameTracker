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

import { addReplyToComment } from '../fn/game-comment-controller/add-reply-to-comment';
import { AddReplyToComment$Params } from '../fn/game-comment-controller/add-reply-to-comment';
import { countCommentsByUser } from '../fn/game-comment-controller/count-comments-by-user';
import { CountCommentsByUser$Params } from '../fn/game-comment-controller/count-comments-by-user';
import { countCommentsForGame } from '../fn/game-comment-controller/count-comments-for-game';
import { CountCommentsForGame$Params } from '../fn/game-comment-controller/count-comments-for-game';
import { countRepliesForComment } from '../fn/game-comment-controller/count-replies-for-comment';
import { CountRepliesForComment$Params } from '../fn/game-comment-controller/count-replies-for-comment';
import { createComment } from '../fn/game-comment-controller/create-comment';
import { CreateComment$Params } from '../fn/game-comment-controller/create-comment';
import { deleteComment } from '../fn/game-comment-controller/delete-comment';
import { DeleteComment$Params } from '../fn/game-comment-controller/delete-comment';
import { GameCommentDto } from '../models/game-comment-dto';
import { getCommentById } from '../fn/game-comment-controller/get-comment-by-id';
import { GetCommentById$Params } from '../fn/game-comment-controller/get-comment-by-id';
import { getCommentLikers } from '../fn/game-comment-controller/get-comment-likers';
import { GetCommentLikers$Params } from '../fn/game-comment-controller/get-comment-likers';
import { getCommentReplies } from '../fn/game-comment-controller/get-comment-replies';
import { GetCommentReplies$Params } from '../fn/game-comment-controller/get-comment-replies';
import { getCommentsByUser } from '../fn/game-comment-controller/get-comments-by-user';
import { GetCommentsByUser$Params } from '../fn/game-comment-controller/get-comments-by-user';
import { getCommentsForGame } from '../fn/game-comment-controller/get-comments-for-game';
import { GetCommentsForGame$Params } from '../fn/game-comment-controller/get-comments-for-game';
import { getCommentsForGame1 } from '../fn/game-comment-controller/get-comments-for-game-1';
import { GetCommentsForGame1$Params } from '../fn/game-comment-controller/get-comments-for-game-1';
import { getMostDiscussedCommentsForGame } from '../fn/game-comment-controller/get-most-discussed-comments-for-game';
import { GetMostDiscussedCommentsForGame$Params } from '../fn/game-comment-controller/get-most-discussed-comments-for-game';
import { getMostLikedCommentsForGame } from '../fn/game-comment-controller/get-most-liked-comments-for-game';
import { GetMostLikedCommentsForGame$Params } from '../fn/game-comment-controller/get-most-liked-comments-for-game';
import { getRecentComments } from '../fn/game-comment-controller/get-recent-comments';
import { GetRecentComments$Params } from '../fn/game-comment-controller/get-recent-comments';
import { getRecentCommentsForGame } from '../fn/game-comment-controller/get-recent-comments-for-game';
import { GetRecentCommentsForGame$Params } from '../fn/game-comment-controller/get-recent-comments-for-game';
import { getReportedComments } from '../fn/game-comment-controller/get-reported-comments';
import { GetReportedComments$Params } from '../fn/game-comment-controller/get-reported-comments';
import { getTopCommentedGames } from '../fn/game-comment-controller/get-top-commented-games';
import { GetTopCommentedGames$Params } from '../fn/game-comment-controller/get-top-commented-games';
import { PageGameCommentDto } from '../models/page-game-comment-dto';
import { removeAllRepliesFromComment } from '../fn/game-comment-controller/remove-all-replies-from-comment';
import { RemoveAllRepliesFromComment$Params } from '../fn/game-comment-controller/remove-all-replies-from-comment';
import { searchComments } from '../fn/game-comment-controller/search-comments';
import { SearchComments$Params } from '../fn/game-comment-controller/search-comments';
import { updateCommentContent } from '../fn/game-comment-controller/update-comment-content';
import { UpdateCommentContent$Params } from '../fn/game-comment-controller/update-comment-content';
import { UserDto } from '../models/user-dto';

@Injectable({ providedIn: 'root' })
export class GameCommentControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateCommentContent()` */
  static readonly UpdateCommentContentPath = '/gametracker/v1/comments/update/{commentId}';

  /**
   * Mettre à jour le contenu d'un commentaire.
   *
   * Mettre à jour le contenu d'un commentaire
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCommentContent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCommentContent$Response(params: UpdateCommentContent$Params, context?: HttpContext): Observable<StrictHttpResponse<GameCommentDto>> {
    return updateCommentContent(this.http, this.rootUrl, params, context);
  }

  /**
   * Mettre à jour le contenu d'un commentaire.
   *
   * Mettre à jour le contenu d'un commentaire
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCommentContent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCommentContent(params: UpdateCommentContent$Params, context?: HttpContext): Observable<GameCommentDto> {
    return this.updateCommentContent$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameCommentDto>): GameCommentDto => r.body)
    );
  }

  /** Path part for operation `addReplyToComment()` */
  static readonly AddReplyToCommentPath = '/gametracker/v1/comments/reply/{parentCommentId}';

  /**
   * Ajouter une réponse à un commentaire.
   *
   * Ajouter une réponse à un commentaire
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addReplyToComment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addReplyToComment$Response(params: AddReplyToComment$Params, context?: HttpContext): Observable<StrictHttpResponse<GameCommentDto>> {
    return addReplyToComment(this.http, this.rootUrl, params, context);
  }

  /**
   * Ajouter une réponse à un commentaire.
   *
   * Ajouter une réponse à un commentaire
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addReplyToComment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addReplyToComment(params: AddReplyToComment$Params, context?: HttpContext): Observable<GameCommentDto> {
    return this.addReplyToComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameCommentDto>): GameCommentDto => r.body)
    );
  }

  /** Path part for operation `createComment()` */
  static readonly CreateCommentPath = '/gametracker/v1/comments/create';

  /**
   * Créer un commentaire.
   *
   * Créer un commentaire pour un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createComment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createComment$Response(params: CreateComment$Params, context?: HttpContext): Observable<StrictHttpResponse<GameCommentDto>> {
    return createComment(this.http, this.rootUrl, params, context);
  }

  /**
   * Créer un commentaire.
   *
   * Créer un commentaire pour un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createComment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createComment(params: CreateComment$Params, context?: HttpContext): Observable<GameCommentDto> {
    return this.createComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameCommentDto>): GameCommentDto => r.body)
    );
  }

  /** Path part for operation `getCommentById()` */
  static readonly GetCommentByIdPath = '/gametracker/v1/comments/{commentId}';

  /**
   * Récupérer un commentaire par son ID.
   *
   * Récupérer un commentaire par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentById$Response(params: GetCommentById$Params, context?: HttpContext): Observable<StrictHttpResponse<GameCommentDto>> {
    return getCommentById(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer un commentaire par son ID.
   *
   * Récupérer un commentaire par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentById(params: GetCommentById$Params, context?: HttpContext): Observable<GameCommentDto> {
    return this.getCommentById$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameCommentDto>): GameCommentDto => r.body)
    );
  }

  /** Path part for operation `getCommentsByUser()` */
  static readonly GetCommentsByUserPath = '/gametracker/v1/comments/user/{userId}';

  /**
   * Récupérer les commentaires d'un utilisateur.
   *
   * Récupérer les commentaires d'un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentsByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsByUser$Response(params: GetCommentsByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<PageGameCommentDto>> {
    return getCommentsByUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les commentaires d'un utilisateur.
   *
   * Récupérer les commentaires d'un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentsByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsByUser(params: GetCommentsByUser$Params, context?: HttpContext): Observable<PageGameCommentDto> {
    return this.getCommentsByUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageGameCommentDto>): PageGameCommentDto => r.body)
    );
  }

  /** Path part for operation `countCommentsByUser()` */
  static readonly CountCommentsByUserPath = '/gametracker/v1/comments/user/{userId}/count';

  /**
   * Compter le nombre de commentaires d'un utilisateur.
   *
   * Compter le nombre de commentaires d'un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `countCommentsByUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  countCommentsByUser$Response(params: CountCommentsByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return countCommentsByUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Compter le nombre de commentaires d'un utilisateur.
   *
   * Compter le nombre de commentaires d'un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `countCommentsByUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  countCommentsByUser(params: CountCommentsByUser$Params, context?: HttpContext): Observable<number> {
    return this.countCommentsByUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getTopCommentedGames()` */
  static readonly GetTopCommentedGamesPath = '/gametracker/v1/comments/stats/top/{limit}';

  /**
   * Récupérer les jeux les plus commentés.
   *
   * Récupérer les jeux les plus commentés
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTopCommentedGames()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTopCommentedGames$Response(params: GetTopCommentedGames$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {
    return getTopCommentedGames(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les jeux les plus commentés.
   *
   * Récupérer les jeux les plus commentés
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTopCommentedGames$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTopCommentedGames(params: GetTopCommentedGames$Params, context?: HttpContext): Observable<{
[key: string]: number;
}> {
    return this.getTopCommentedGames$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: number;
}>): {
[key: string]: number;
} => r.body)
    );
  }

  /** Path part for operation `searchComments()` */
  static readonly SearchCommentsPath = '/gametracker/v1/comments/search';

  /**
   * Rechercher des commentaires.
   *
   * Rechercher des commentaires par mot-clé
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchComments()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  searchComments$Response(params: SearchComments$Params, context?: HttpContext): Observable<StrictHttpResponse<PageGameCommentDto>> {
    return searchComments(this.http, this.rootUrl, params, context);
  }

  /**
   * Rechercher des commentaires.
   *
   * Rechercher des commentaires par mot-clé
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchComments$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  searchComments(params: SearchComments$Params, context?: HttpContext): Observable<PageGameCommentDto> {
    return this.searchComments$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageGameCommentDto>): PageGameCommentDto => r.body)
    );
  }

  /** Path part for operation `getReportedComments()` */
  static readonly GetReportedCommentsPath = '/gametracker/v1/comments/reported';

  /**
   * Récupérer les commentaires signalés.
   *
   * Récupérer les commentaires signalés
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReportedComments()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReportedComments$Response(params: GetReportedComments$Params, context?: HttpContext): Observable<StrictHttpResponse<PageGameCommentDto>> {
    return getReportedComments(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les commentaires signalés.
   *
   * Récupérer les commentaires signalés
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReportedComments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReportedComments(params: GetReportedComments$Params, context?: HttpContext): Observable<PageGameCommentDto> {
    return this.getReportedComments$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageGameCommentDto>): PageGameCommentDto => r.body)
    );
  }

  /** Path part for operation `getCommentReplies()` */
  static readonly GetCommentRepliesPath = '/gametracker/v1/comments/replies/{parentCommentId}';

  /**
   * Récupérer les réponses d'un commentaire.
   *
   * Récupérer les réponses d'un commentaire
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentReplies()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentReplies$Response(params: GetCommentReplies$Params, context?: HttpContext): Observable<StrictHttpResponse<PageGameCommentDto>> {
    return getCommentReplies(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les réponses d'un commentaire.
   *
   * Récupérer les réponses d'un commentaire
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentReplies$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentReplies(params: GetCommentReplies$Params, context?: HttpContext): Observable<PageGameCommentDto> {
    return this.getCommentReplies$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageGameCommentDto>): PageGameCommentDto => r.body)
    );
  }

  /** Path part for operation `countRepliesForComment()` */
  static readonly CountRepliesForCommentPath = '/gametracker/v1/comments/replies/{commentId}/count';

  /**
   * Compter le nombre de réponses d'un commentaire.
   *
   * Compter le nombre de réponses d'un commentaire
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `countRepliesForComment()` instead.
   *
   * This method doesn't expect any request body.
   */
  countRepliesForComment$Response(params: CountRepliesForComment$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return countRepliesForComment(this.http, this.rootUrl, params, context);
  }

  /**
   * Compter le nombre de réponses d'un commentaire.
   *
   * Compter le nombre de réponses d'un commentaire
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `countRepliesForComment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  countRepliesForComment(params: CountRepliesForComment$Params, context?: HttpContext): Observable<number> {
    return this.countRepliesForComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getRecentComments()` */
  static readonly GetRecentCommentsPath = '/gametracker/v1/comments/recent/{hours}';

  /**
   * Récupérer les commentaires récents.
   *
   * Récupérer les commentaires récents
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRecentComments()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecentComments$Response(params: GetRecentComments$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GameCommentDto>>> {
    return getRecentComments(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les commentaires récents.
   *
   * Récupérer les commentaires récents
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRecentComments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecentComments(params: GetRecentComments$Params, context?: HttpContext): Observable<Array<GameCommentDto>> {
    return this.getRecentComments$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GameCommentDto>>): Array<GameCommentDto> => r.body)
    );
  }

  /** Path part for operation `getCommentLikers()` */
  static readonly GetCommentLikersPath = '/gametracker/v1/comments/likers/{commentId}';

  /**
   * Récupérer les utilisateurs qui ont aimé un commentaire.
   *
   * Récupérer les utilisateurs qui ont aimé un commentaire
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentLikers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentLikers$Response(params: GetCommentLikers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserDto>>> {
    return getCommentLikers(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les utilisateurs qui ont aimé un commentaire.
   *
   * Récupérer les utilisateurs qui ont aimé un commentaire
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentLikers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentLikers(params: GetCommentLikers$Params, context?: HttpContext): Observable<Array<UserDto>> {
    return this.getCommentLikers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserDto>>): Array<UserDto> => r.body)
    );
  }

  /** Path part for operation `getCommentsForGame()` */
  static readonly GetCommentsForGamePath = '/gametracker/v1/comments/game/{gameId}';

  /**
   * Récupérer les commentaires d'un jeu.
   *
   * Récupérer les commentaires d'un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentsForGame()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsForGame$Response(params: GetCommentsForGame$Params, context?: HttpContext): Observable<StrictHttpResponse<PageGameCommentDto>> {
    return getCommentsForGame(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les commentaires d'un jeu.
   *
   * Récupérer les commentaires d'un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentsForGame$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsForGame(params: GetCommentsForGame$Params, context?: HttpContext): Observable<PageGameCommentDto> {
    return this.getCommentsForGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageGameCommentDto>): PageGameCommentDto => r.body)
    );
  }

  /** Path part for operation `getRecentCommentsForGame()` */
  static readonly GetRecentCommentsForGamePath = '/gametracker/v1/comments/game/{gameId}/recent';

  /**
   * Récupérer les commentaires récents d'un jeu.
   *
   * Récupérer les commentaires récents d'un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getRecentCommentsForGame()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecentCommentsForGame$Response(params: GetRecentCommentsForGame$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GameCommentDto>>> {
    return getRecentCommentsForGame(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les commentaires récents d'un jeu.
   *
   * Récupérer les commentaires récents d'un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getRecentCommentsForGame$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getRecentCommentsForGame(params: GetRecentCommentsForGame$Params, context?: HttpContext): Observable<Array<GameCommentDto>> {
    return this.getRecentCommentsForGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GameCommentDto>>): Array<GameCommentDto> => r.body)
    );
  }

  /** Path part for operation `getMostLikedCommentsForGame()` */
  static readonly GetMostLikedCommentsForGamePath = '/gametracker/v1/comments/game/{gameId}/liked/{limit}';

  /**
   * Récupérer les commentaires les plus aimés d'un jeu.
   *
   * Récupérer les commentaires les plus aimés d'un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMostLikedCommentsForGame()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMostLikedCommentsForGame$Response(params: GetMostLikedCommentsForGame$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {
    return getMostLikedCommentsForGame(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les commentaires les plus aimés d'un jeu.
   *
   * Récupérer les commentaires les plus aimés d'un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMostLikedCommentsForGame$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMostLikedCommentsForGame(params: GetMostLikedCommentsForGame$Params, context?: HttpContext): Observable<{
[key: string]: number;
}> {
    return this.getMostLikedCommentsForGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: number;
}>): {
[key: string]: number;
} => r.body)
    );
  }

  /** Path part for operation `getMostDiscussedCommentsForGame()` */
  static readonly GetMostDiscussedCommentsForGamePath = '/gametracker/v1/comments/game/{gameId}/discussed/{limit}';

  /**
   * Récupérer les commentaires les plus discutés d'un jeu.
   *
   * Récupérer les commentaires les plus discutés d'un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMostDiscussedCommentsForGame()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMostDiscussedCommentsForGame$Response(params: GetMostDiscussedCommentsForGame$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {
    return getMostDiscussedCommentsForGame(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les commentaires les plus discutés d'un jeu.
   *
   * Récupérer les commentaires les plus discutés d'un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMostDiscussedCommentsForGame$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMostDiscussedCommentsForGame(params: GetMostDiscussedCommentsForGame$Params, context?: HttpContext): Observable<{
[key: string]: number;
}> {
    return this.getMostDiscussedCommentsForGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: number;
}>): {
[key: string]: number;
} => r.body)
    );
  }

  /** Path part for operation `countCommentsForGame()` */
  static readonly CountCommentsForGamePath = '/gametracker/v1/comments/game/{gameId}/count';

  /**
   * Compter le nombre de commentaires d'un jeu.
   *
   * Compter le nombre de commentaires d'un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `countCommentsForGame()` instead.
   *
   * This method doesn't expect any request body.
   */
  countCommentsForGame$Response(params: CountCommentsForGame$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return countCommentsForGame(this.http, this.rootUrl, params, context);
  }

  /**
   * Compter le nombre de commentaires d'un jeu.
   *
   * Compter le nombre de commentaires d'un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `countCommentsForGame$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  countCommentsForGame(params: CountCommentsForGame$Params, context?: HttpContext): Observable<number> {
    return this.countCommentsForGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getCommentsForGame1()` */
  static readonly GetCommentsForGame1Path = '/gametracker/v1/comments/game/{gameId}/all';

  /**
   * Récupérer tous les commentaires d'un jeu.
   *
   * Récupérer tous les commentaires d'un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCommentsForGame1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsForGame1$Response(params: GetCommentsForGame1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GameCommentDto>>> {
    return getCommentsForGame1(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer tous les commentaires d'un jeu.
   *
   * Récupérer tous les commentaires d'un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCommentsForGame1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCommentsForGame1(params: GetCommentsForGame1$Params, context?: HttpContext): Observable<Array<GameCommentDto>> {
    return this.getCommentsForGame1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GameCommentDto>>): Array<GameCommentDto> => r.body)
    );
  }

  /** Path part for operation `removeAllRepliesFromComment()` */
  static readonly RemoveAllRepliesFromCommentPath = '/gametracker/v1/comments/replies/delete/{parentCommentId}';

  /**
   * Supprimer toutes les réponses d'un commentaire.
   *
   * Supprimer toutes les réponses d'un commentaire
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeAllRepliesFromComment()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeAllRepliesFromComment$Response(params: RemoveAllRepliesFromComment$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return removeAllRepliesFromComment(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer toutes les réponses d'un commentaire.
   *
   * Supprimer toutes les réponses d'un commentaire
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeAllRepliesFromComment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeAllRepliesFromComment(params: RemoveAllRepliesFromComment$Params, context?: HttpContext): Observable<void> {
    return this.removeAllRepliesFromComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteComment()` */
  static readonly DeleteCommentPath = '/gametracker/v1/comments/delete/{commentId}';

  /**
   * Supprimer un commentaire.
   *
   * Supprimer un commentaire
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteComment()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteComment$Response(params: DeleteComment$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteComment(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer un commentaire.
   *
   * Supprimer un commentaire
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteComment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteComment(params: DeleteComment$Params, context?: HttpContext): Observable<void> {
    return this.deleteComment$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
