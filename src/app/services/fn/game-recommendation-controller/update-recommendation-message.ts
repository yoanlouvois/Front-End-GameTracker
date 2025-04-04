/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { GameRecommendationDto } from '../../models/game-recommendation-dto';

export interface UpdateRecommendationMessage$Params {
  recommendationId: number;
      body: string
}

export function updateRecommendationMessage(http: HttpClient, rootUrl: string, params: UpdateRecommendationMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<GameRecommendationDto>> {
  const rb = new RequestBuilder(rootUrl, updateRecommendationMessage.PATH, 'put');
  if (params) {
    rb.path('recommendationId', params.recommendationId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GameRecommendationDto>;
    })
  );
}

updateRecommendationMessage.PATH = '/gametracker/v1/recommendation/{recommendationId}/update';
