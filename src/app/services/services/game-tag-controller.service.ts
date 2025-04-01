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

import { addMultipleTagsToGame } from '../fn/game-tag-controller/add-multiple-tags-to-game';
import { AddMultipleTagsToGame$Params } from '../fn/game-tag-controller/add-multiple-tags-to-game';
import { addTagToGame } from '../fn/game-tag-controller/add-tag-to-game';
import { AddTagToGame$Params } from '../fn/game-tag-controller/add-tag-to-game';
import { GameTagDto } from '../models/game-tag-dto';
import { getGamesForTag } from '../fn/game-tag-controller/get-games-for-tag';
import { GetGamesForTag$Params } from '../fn/game-tag-controller/get-games-for-tag';
import { getTagsForGame } from '../fn/game-tag-controller/get-tags-for-game';
import { GetTagsForGame$Params } from '../fn/game-tag-controller/get-tags-for-game';
import { PageGameTagDto } from '../models/page-game-tag-dto';
import { removeMultipleTagsFromGame } from '../fn/game-tag-controller/remove-multiple-tags-from-game';
import { RemoveMultipleTagsFromGame$Params } from '../fn/game-tag-controller/remove-multiple-tags-from-game';
import { removeTagFromGame } from '../fn/game-tag-controller/remove-tag-from-game';
import { RemoveTagFromGame$Params } from '../fn/game-tag-controller/remove-tag-from-game';
import { updateTagAssociation } from '../fn/game-tag-controller/update-tag-association';
import { UpdateTagAssociation$Params } from '../fn/game-tag-controller/update-tag-association';

@Injectable({ providedIn: 'root' })
export class GameTagControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateTagAssociation()` */
  static readonly UpdateTagAssociationPath = '/gametracker/v1/tag/{associationId}/update';

  /**
   * Mettre à jour l'association d'une étiquette.
   *
   * Mettre à jour l'association d'une étiquette
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTagAssociation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTagAssociation$Response(params: UpdateTagAssociation$Params, context?: HttpContext): Observable<StrictHttpResponse<GameTagDto>> {
    return updateTagAssociation(this.http, this.rootUrl, params, context);
  }

  /**
   * Mettre à jour l'association d'une étiquette.
   *
   * Mettre à jour l'association d'une étiquette
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTagAssociation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTagAssociation(params: UpdateTagAssociation$Params, context?: HttpContext): Observable<GameTagDto> {
    return this.updateTagAssociation$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameTagDto>): GameTagDto => r.body)
    );
  }

  /** Path part for operation `getTagsForGame()` */
  static readonly GetTagsForGamePath = '/gametracker/v1/game/{game}/tags';

  /**
   * Récupérer les étiquettes d'un jeu.
   *
   * Récupérer les étiquettes d'un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTagsForGame()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTagsForGame$Response(params: GetTagsForGame$Params, context?: HttpContext): Observable<StrictHttpResponse<PageGameTagDto>> {
    return getTagsForGame(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les étiquettes d'un jeu.
   *
   * Récupérer les étiquettes d'un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTagsForGame$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTagsForGame(params: GetTagsForGame$Params, context?: HttpContext): Observable<PageGameTagDto> {
    return this.getTagsForGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageGameTagDto>): PageGameTagDto => r.body)
    );
  }

  /** Path part for operation `addMultipleTagsToGame()` */
  static readonly AddMultipleTagsToGamePath = '/gametracker/v1/game/{game}/tags';

  /**
   * Ajouter plusieurs étiquettes à un jeu.
   *
   * Ajouter plusieurs étiquettes à un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addMultipleTagsToGame()` instead.
   *
   * This method doesn't expect any request body.
   */
  addMultipleTagsToGame$Response(params: AddMultipleTagsToGame$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GameTagDto>>> {
    return addMultipleTagsToGame(this.http, this.rootUrl, params, context);
  }

  /**
   * Ajouter plusieurs étiquettes à un jeu.
   *
   * Ajouter plusieurs étiquettes à un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addMultipleTagsToGame$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addMultipleTagsToGame(params: AddMultipleTagsToGame$Params, context?: HttpContext): Observable<Array<GameTagDto>> {
    return this.addMultipleTagsToGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<GameTagDto>>): Array<GameTagDto> => r.body)
    );
  }

  /** Path part for operation `removeMultipleTagsFromGame()` */
  static readonly RemoveMultipleTagsFromGamePath = '/gametracker/v1/game/{game}/tags';

  /**
   * Supprimer plusieurs étiquettes d'un jeu.
   *
   * Supprimer plusieurs étiquettes d'un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeMultipleTagsFromGame()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeMultipleTagsFromGame$Response(params: RemoveMultipleTagsFromGame$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return removeMultipleTagsFromGame(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer plusieurs étiquettes d'un jeu.
   *
   * Supprimer plusieurs étiquettes d'un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeMultipleTagsFromGame$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeMultipleTagsFromGame(params: RemoveMultipleTagsFromGame$Params, context?: HttpContext): Observable<number> {
    return this.removeMultipleTagsFromGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `addTagToGame()` */
  static readonly AddTagToGamePath = '/gametracker/v1/game/{game}/tag/{tag}';

  /**
   * Ajouter une étiquette à un jeu.
   *
   * Ajouter une étiquette à un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addTagToGame()` instead.
   *
   * This method doesn't expect any request body.
   */
  addTagToGame$Response(params: AddTagToGame$Params, context?: HttpContext): Observable<StrictHttpResponse<GameTagDto>> {
    return addTagToGame(this.http, this.rootUrl, params, context);
  }

  /**
   * Ajouter une étiquette à un jeu.
   *
   * Ajouter une étiquette à un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addTagToGame$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addTagToGame(params: AddTagToGame$Params, context?: HttpContext): Observable<GameTagDto> {
    return this.addTagToGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<GameTagDto>): GameTagDto => r.body)
    );
  }

  /** Path part for operation `removeTagFromGame()` */
  static readonly RemoveTagFromGamePath = '/gametracker/v1/game/{game}/tag/{tag}';

  /**
   * Supprimer une étiquette d'un jeu.
   *
   * Supprimer une étiquette d'un jeu
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeTagFromGame()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeTagFromGame$Response(params: RemoveTagFromGame$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return removeTagFromGame(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer une étiquette d'un jeu.
   *
   * Supprimer une étiquette d'un jeu
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeTagFromGame$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeTagFromGame(params: RemoveTagFromGame$Params, context?: HttpContext): Observable<void> {
    return this.removeTagFromGame$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getGamesForTag()` */
  static readonly GetGamesForTagPath = '/gametracker/v1/tag/{tag}/games';

  /**
   * Récupérer les jeux associés à une étiquette.
   *
   * Récupérer les jeux associés à une étiquette
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGamesForTag()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGamesForTag$Response(params: GetGamesForTag$Params, context?: HttpContext): Observable<StrictHttpResponse<PageGameTagDto>> {
    return getGamesForTag(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les jeux associés à une étiquette.
   *
   * Récupérer les jeux associés à une étiquette
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGamesForTag$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGamesForTag(params: GetGamesForTag$Params, context?: HttpContext): Observable<PageGameTagDto> {
    return this.getGamesForTag$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageGameTagDto>): PageGameTagDto => r.body)
    );
  }

}
