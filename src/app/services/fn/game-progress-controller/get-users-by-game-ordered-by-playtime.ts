/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetUsersByGameOrderedByPlaytime$Params {
  gameId: number;
}

export function getUsersByGameOrderedByPlaytime(http: HttpClient, rootUrl: string, params: GetUsersByGameOrderedByPlaytime$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {
  const rb = new RequestBuilder(rootUrl, getUsersByGameOrderedByPlaytime.PATH, 'get');
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

getUsersByGameOrderedByPlaytime.PATH = '/gametracker/v1/progress/game/{gameId}/users-by-playtime';
