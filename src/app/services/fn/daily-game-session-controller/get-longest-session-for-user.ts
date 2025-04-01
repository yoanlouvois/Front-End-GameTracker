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

export interface GetLongestSessionForUser$Params {
  user: User;
}

export function getLongestSessionForUser(http: HttpClient, rootUrl: string, params: GetLongestSessionForUser$Params, context?: HttpContext): Observable<StrictHttpResponse<DailyGameSessionDto>> {
  const rb = new RequestBuilder(rootUrl, getLongestSessionForUser.PATH, 'get');
  if (params) {
    rb.path('user', params.user, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DailyGameSessionDto>;
    })
  );
}

getLongestSessionForUser.PATH = '/gametracker/v1/sessions/longest/{user}';
