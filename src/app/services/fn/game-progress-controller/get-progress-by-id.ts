/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GameProgressDto } from '../../models/game-progress-dto';

export interface GetProgressById$Params {
  progressId: number;
}

export function getProgressById(http: HttpClient, rootUrl: string, params: GetProgressById$Params, context?: HttpContext): Observable<StrictHttpResponse<GameProgressDto>> {
  const rb = new RequestBuilder(rootUrl, getProgressById.PATH, 'get');
  if (params) {
    rb.path('progressId', params.progressId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GameProgressDto>;
    })
  );
}

getProgressById.PATH = '/gametracker/v1/progress/{progressId}';
