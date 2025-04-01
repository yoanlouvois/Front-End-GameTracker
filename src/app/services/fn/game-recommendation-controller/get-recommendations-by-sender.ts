/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Pageable } from '../../models/pageable';
import { PageGameRecommendationDto } from '../../models/page-game-recommendation-dto';

export interface GetRecommendationsBySender$Params {
  senderId: number;
  pageable: Pageable;
}

export function getRecommendationsBySender(http: HttpClient, rootUrl: string, params: GetRecommendationsBySender$Params, context?: HttpContext): Observable<StrictHttpResponse<PageGameRecommendationDto>> {
  const rb = new RequestBuilder(rootUrl, getRecommendationsBySender.PATH, 'get');
  if (params) {
    rb.path('senderId', params.senderId, {});
    rb.query('pageable', params.pageable, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageGameRecommendationDto>;
    })
  );
}

getRecommendationsBySender.PATH = '/gametracker/v1/recommendation/sender/{senderId}';
