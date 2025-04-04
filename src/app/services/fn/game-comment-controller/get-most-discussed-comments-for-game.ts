/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetMostDiscussedCommentsForGame$Params {
  gameId: number;
  limit: number;
}

export function getMostDiscussedCommentsForGame(http: HttpClient, rootUrl: string, params: GetMostDiscussedCommentsForGame$Params, context?: HttpContext): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {
  const rb = new RequestBuilder(rootUrl, getMostDiscussedCommentsForGame.PATH, 'get');
  if (params) {
    rb.path('gameId', params.gameId, {});
    rb.path('limit', params.limit, {});
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

getMostDiscussedCommentsForGame.PATH = '/gametracker/v1/comments/game/{gameId}/discussed/{limit}';
