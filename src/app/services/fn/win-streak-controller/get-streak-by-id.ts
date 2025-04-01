/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { WinStreakDto } from '../../models/win-streak-dto';

export interface GetStreakById$Params {
  streakId: number;
}

export function getStreakById(http: HttpClient, rootUrl: string, params: GetStreakById$Params, context?: HttpContext): Observable<StrictHttpResponse<WinStreakDto>> {
  const rb = new RequestBuilder(rootUrl, getStreakById.PATH, 'get');
  if (params) {
    rb.path('streakId', params.streakId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<WinStreakDto>;
    })
  );
}

getStreakById.PATH = '/gametracker/v1/streaks/{streakId}';
