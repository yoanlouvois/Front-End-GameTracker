/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DailyGameSessionDto } from '../../models/daily-game-session-dto';
import { User } from '../../models/user';

export interface GetRecentSessionsForUser$Params {
  user: User;
  limit: number;
}

export function getRecentSessionsForUser(http: HttpClient, rootUrl: string, params: GetRecentSessionsForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DailyGameSessionDto>>> {
  const rb = new RequestBuilder(rootUrl, getRecentSessionsForUser.PATH, 'get');
  if (params) {
    rb.path('user', params.user, {});
    rb.path('limit', params.limit, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<DailyGameSessionDto>>;
    })
  );
}

getRecentSessionsForUser.PATH = '/gametracker/v1/sessions/recent/{user}/{limit}';
