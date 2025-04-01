/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GameLeaderboardDto } from '../../models/game-leaderboard-dto';

export interface GetLeaderboardEntriesByDate$Params {
  date: string;
}

export function getLeaderboardEntriesByDate(http: HttpClient, rootUrl: string, params: GetLeaderboardEntriesByDate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<GameLeaderboardDto>>> {
  const rb = new RequestBuilder(rootUrl, getLeaderboardEntriesByDate.PATH, 'get');
  if (params) {
    rb.path('date', params.date, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<GameLeaderboardDto>>;
    })
  );
}

getLeaderboardEntriesByDate.PATH = '/gametracker/v1/leaderboard/date/{date}';
