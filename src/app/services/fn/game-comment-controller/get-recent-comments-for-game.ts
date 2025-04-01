/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GameCommentDto } from '../../models/game-comment-dto';

export interface GetRecentCommentsForGame$Params {
  gameId: number;
}

export function getRecentCommentsForGame(http: HttpClient, rootUrl: string, params: GetRecentCommentsForGame$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GameCommentDto>>> {
  const rb = new RequestBuilder(rootUrl, getRecentCommentsForGame.PATH, 'get');
  if (params) {
    rb.path('gameId', params.gameId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<GameCommentDto>>;
    })
  );
}

getRecentCommentsForGame.PATH = '/gametracker/v1/comments/game/{gameId}/recent';
