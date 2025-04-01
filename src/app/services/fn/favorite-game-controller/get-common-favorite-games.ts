/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GameDto } from '../../models/game-dto';

export interface GetCommonFavoriteGames$Params {
  userId1: number;
  userId2: number;
}

export function getCommonFavoriteGames(http: HttpClient, rootUrl: string, params: GetCommonFavoriteGames$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GameDto>>> {
  const rb = new RequestBuilder(rootUrl, getCommonFavoriteGames.PATH, 'get');
  if (params) {
    rb.path('userId1', params.userId1, {});
    rb.path('userId2', params.userId2, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<GameDto>>;
    })
  );
}

getCommonFavoriteGames.PATH = '/gametracker/v1/favorites/common/{userId1}/{userId2}';
