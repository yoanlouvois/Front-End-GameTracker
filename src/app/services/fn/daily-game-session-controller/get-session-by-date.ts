/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DailyGameSessionDto } from '../../models/daily-game-session-dto';

export interface GetSessionByDate$Params {
  date: string;
}

export function getSessionByDate(http: HttpClient, rootUrl: string, params: GetSessionByDate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DailyGameSessionDto>>> {
  const rb = new RequestBuilder(rootUrl, getSessionByDate.PATH, 'get');
  if (params) {
    rb.path('date', params.date, {});
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

getSessionByDate.PATH = '/gametracker/v1/sessions/date/{date}';
