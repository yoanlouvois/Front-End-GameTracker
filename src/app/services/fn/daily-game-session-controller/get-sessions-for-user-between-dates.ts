/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DailyGameSessionDto } from '../../models/daily-game-session-dto';

export interface GetSessionsForUserBetweenDates$Params {
  userId: number;
  start: string;
  end: string;
}

export function getSessionsForUserBetweenDates(http: HttpClient, rootUrl: string, params: GetSessionsForUserBetweenDates$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DailyGameSessionDto>>> {
  const rb = new RequestBuilder(rootUrl, getSessionsForUserBetweenDates.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {});
    rb.path('start', params.start, {});
    rb.path('end', params.end, {});
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

getSessionsForUserBetweenDates.PATH = '/gametracker/v1/sessions/user/{userId}/between/{start}/{end}';
