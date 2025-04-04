/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetTopScoringUsersForGame$Params {
  gameId: number;
}

export function getTopScoringUsersForGame(http: HttpClient, rootUrl: string, params: GetTopScoringUsersForGame$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {
  const rb = new RequestBuilder(rootUrl, getTopScoringUsersForGame.PATH, 'get');
  if (params) {
    rb.path('gameId', params.gameId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      [key: string]: number;
      }>;
    })
  );
}

getTopScoringUsersForGame.PATH = '/gametracker/v1/progress/game/{gameId}/top-scoring-users';
