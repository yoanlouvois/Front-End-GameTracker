/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GameProgressDto } from '../../models/game-progress-dto';

export interface IncrementStreak1$Params {
  progressId: number;
}

export function incrementStreak1(http: HttpClient, rootUrl: string, params: IncrementStreak1$Params, context?: HttpContext): Observable<StrictHttpResponse<GameProgressDto>> {
  const rb = new RequestBuilder(rootUrl, incrementStreak1.PATH, 'put');
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

incrementStreak1.PATH = '/gametracker/v1/progress/{progressId}/streak/increment';
