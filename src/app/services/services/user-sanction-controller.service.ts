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

import { applySanction } from '../fn/user-sanction-controller/apply-sanction';
import { ApplySanction$Params } from '../fn/user-sanction-controller/apply-sanction';
import { countActiveSanctions } from '../fn/user-sanction-controller/count-active-sanctions';
import { CountActiveSanctions$Params } from '../fn/user-sanction-controller/count-active-sanctions';
import { getActiveSanctionsForUser } from '../fn/user-sanction-controller/get-active-sanctions-for-user';
import { GetActiveSanctionsForUser$Params } from '../fn/user-sanction-controller/get-active-sanctions-for-user';
import { getSanctionById } from '../fn/user-sanction-controller/get-sanction-by-id';
import { GetSanctionById$Params } from '../fn/user-sanction-controller/get-sanction-by-id';
import { getSanctionsByType } from '../fn/user-sanction-controller/get-sanctions-by-type';
import { GetSanctionsByType$Params } from '../fn/user-sanction-controller/get-sanctions-by-type';
import { getSanctionsHistory } from '../fn/user-sanction-controller/get-sanctions-history';
import { GetSanctionsHistory$Params } from '../fn/user-sanction-controller/get-sanctions-history';
import { modifySanctionDuration } from '../fn/user-sanction-controller/modify-sanction-duration';
import { ModifySanctionDuration$Params } from '../fn/user-sanction-controller/modify-sanction-duration';
import { PageUserSanctionDto } from '../models/page-user-sanction-dto';
import { removeSanction } from '../fn/user-sanction-controller/remove-sanction';
import { RemoveSanction$Params } from '../fn/user-sanction-controller/remove-sanction';
import { updateSanction } from '../fn/user-sanction-controller/update-sanction';
import { UpdateSanction$Params } from '../fn/user-sanction-controller/update-sanction';
import { UserSanctionDto } from '../models/user-sanction-dto';

@Injectable({ providedIn: 'root' })
export class UserSanctionControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateSanction()` */
  static readonly UpdateSanctionPath = '/gametracker/v1/sanctions/update/{sanctionId}';

  /**
   * Mettre à jour une sanction.
   *
   * Mettre à jour une sanction existante
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSanction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSanction$Response(params: UpdateSanction$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSanctionDto>> {
    return updateSanction(this.http, this.rootUrl, params, context);
  }

  /**
   * Mettre à jour une sanction.
   *
   * Mettre à jour une sanction existante
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateSanction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSanction(params: UpdateSanction$Params, context?: HttpContext): Observable<UserSanctionDto> {
    return this.updateSanction$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserSanctionDto>): UserSanctionDto => r.body)
    );
  }

  /** Path part for operation `modifySanctionDuration()` */
  static readonly ModifySanctionDurationPath = '/gametracker/v1/sanctions/modify/{sanctionId}';

  /**
   * Modifier une sanction.
   *
   * Modifier une sanction existante
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifySanctionDuration()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifySanctionDuration$Response(params: ModifySanctionDuration$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSanctionDto>> {
    return modifySanctionDuration(this.http, this.rootUrl, params, context);
  }

  /**
   * Modifier une sanction.
   *
   * Modifier une sanction existante
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifySanctionDuration$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifySanctionDuration(params: ModifySanctionDuration$Params, context?: HttpContext): Observable<UserSanctionDto> {
    return this.modifySanctionDuration$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserSanctionDto>): UserSanctionDto => r.body)
    );
  }

  /** Path part for operation `applySanction()` */
  static readonly ApplySanctionPath = '/gametracker/v1/sanctions/apply';

  /**
   * Appliquer une sanction.
   *
   * Appliquer une sanction à un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applySanction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  applySanction$Response(params: ApplySanction$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSanctionDto>> {
    return applySanction(this.http, this.rootUrl, params, context);
  }

  /**
   * Appliquer une sanction.
   *
   * Appliquer une sanction à un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `applySanction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  applySanction(params: ApplySanction$Params, context?: HttpContext): Observable<UserSanctionDto> {
    return this.applySanction$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserSanctionDto>): UserSanctionDto => r.body)
    );
  }

  /** Path part for operation `getSanctionById()` */
  static readonly GetSanctionByIdPath = '/gametracker/v1/sanctions/{sanctionId}';

  /**
   * Récupérer une sanction par son ID.
   *
   * Récupérer une sanction par son ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSanctionById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSanctionById$Response(params: GetSanctionById$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSanctionDto>> {
    return getSanctionById(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer une sanction par son ID.
   *
   * Récupérer une sanction par son ID
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSanctionById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSanctionById(params: GetSanctionById$Params, context?: HttpContext): Observable<UserSanctionDto> {
    return this.getSanctionById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserSanctionDto>): UserSanctionDto => r.body)
    );
  }

  /** Path part for operation `getSanctionsByType()` */
  static readonly GetSanctionsByTypePath = '/gametracker/v1/sanctions/type/{type}';

  /**
   * Récupérer les sanctions par type.
   *
   * Récupérer les sanctions par type
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSanctionsByType()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSanctionsByType$Response(params: GetSanctionsByType$Params, context?: HttpContext): Observable<StrictHttpResponse<PageUserSanctionDto>> {
    return getSanctionsByType(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les sanctions par type.
   *
   * Récupérer les sanctions par type
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSanctionsByType$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSanctionsByType(params: GetSanctionsByType$Params, context?: HttpContext): Observable<PageUserSanctionDto> {
    return this.getSanctionsByType$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageUserSanctionDto>): PageUserSanctionDto => r.body)
    );
  }

  /** Path part for operation `getSanctionsHistory()` */
  static readonly GetSanctionsHistoryPath = '/gametracker/v1/sanctions/history/{userId}';

  /**
   * Récupérer l'historique des sanctions d'un utilisateur.
   *
   * Récupérer l'historique des sanctions d'un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSanctionsHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSanctionsHistory$Response(params: GetSanctionsHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<PageUserSanctionDto>> {
    return getSanctionsHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer l'historique des sanctions d'un utilisateur.
   *
   * Récupérer l'historique des sanctions d'un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSanctionsHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSanctionsHistory(params: GetSanctionsHistory$Params, context?: HttpContext): Observable<PageUserSanctionDto> {
    return this.getSanctionsHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageUserSanctionDto>): PageUserSanctionDto => r.body)
    );
  }

  /** Path part for operation `countActiveSanctions()` */
  static readonly CountActiveSanctionsPath = '/gametracker/v1/sanctions/count/{userId}';

  /**
   * Compter le nombre de sanctions actives d'un utilisateur.
   *
   * Compter le nombre de sanctions actives d'un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `countActiveSanctions()` instead.
   *
   * This method doesn't expect any request body.
   */
  countActiveSanctions$Response(params: CountActiveSanctions$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return countActiveSanctions(this.http, this.rootUrl, params, context);
  }

  /**
   * Compter le nombre de sanctions actives d'un utilisateur.
   *
   * Compter le nombre de sanctions actives d'un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `countActiveSanctions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  countActiveSanctions(params: CountActiveSanctions$Params, context?: HttpContext): Observable<number> {
    return this.countActiveSanctions$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getActiveSanctionsForUser()` */
  static readonly GetActiveSanctionsForUserPath = '/gametracker/v1/sanctions/active/{userId}';

  /**
   * Récupérer les sanctions actives d'un utilisateur.
   *
   * Récupérer les sanctions actives d'un utilisateur
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getActiveSanctionsForUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActiveSanctionsForUser$Response(params: GetActiveSanctionsForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<PageUserSanctionDto>> {
    return getActiveSanctionsForUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Récupérer les sanctions actives d'un utilisateur.
   *
   * Récupérer les sanctions actives d'un utilisateur
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getActiveSanctionsForUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActiveSanctionsForUser(params: GetActiveSanctionsForUser$Params, context?: HttpContext): Observable<PageUserSanctionDto> {
    return this.getActiveSanctionsForUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageUserSanctionDto>): PageUserSanctionDto => r.body)
    );
  }

  /** Path part for operation `removeSanction()` */
  static readonly RemoveSanctionPath = '/gametracker/v1/sanctions/delete/{sanctionId}';

  /**
   * Supprimer une sanction.
   *
   * Supprimer une sanction existante
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeSanction()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeSanction$Response(params: RemoveSanction$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return removeSanction(this.http, this.rootUrl, params, context);
  }

  /**
   * Supprimer une sanction.
   *
   * Supprimer une sanction existante
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeSanction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeSanction(params: RemoveSanction$Params, context?: HttpContext): Observable<void> {
    return this.removeSanction$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
