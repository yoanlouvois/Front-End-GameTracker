/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TagDto } from '../../models/tag-dto';

export interface GetTagsForGame1$Params {
  gameId: number;
}

export function getTagsForGame1(http: HttpClient, rootUrl: string, params: GetTagsForGame1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TagDto>>> {
  const rb = new RequestBuilder(rootUrl, getTagsForGame1.PATH, 'get');
  if (params) {
    rb.path('gameId', params.gameId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TagDto>>;
    })
  );
}

getTagsForGame1.PATH = '/gametracker/v1/tags/game/{gameId}';
