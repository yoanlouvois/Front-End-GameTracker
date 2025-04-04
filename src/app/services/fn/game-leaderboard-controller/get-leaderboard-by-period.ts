/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Pageable } from '../../models/pageable';
import { PageGameLeaderboardDto } from '../../models/page-game-leaderboard-dto';

export interface GetLeaderboardByPeriod$Params {
  period: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY' | 'ALL_TIME';
  pageable: Pageable;
}

export function getLeaderboardByPeriod(http: HttpClient, rootUrl: string, params: GetLeaderboardByPeriod$Params, context?: HttpContext): Observable<StrictHttpResponse<PageGameLeaderboardDto>> {
  const rb = new RequestBuilder(rootUrl, getLeaderboardByPeriod.PATH, 'get');
  if (params) {
    rb.path('period', params.period, {});
    rb.query('pageable', params.pageable, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageGameLeaderboardDto>;
    })
  );
}

getLeaderboardByPeriod.PATH = '/gametracker/v1/leaderboard/period/{period}';
