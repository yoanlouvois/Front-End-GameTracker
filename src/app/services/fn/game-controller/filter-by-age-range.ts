/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Pageable } from '../../models/pageable';
import { PageGameDto } from '../../models/page-game-dto';

export interface FilterByAgeRange$Params {
  minAge: number;
  maxAge: number;
  pageable: Pageable;
}

export function filterByAgeRange(http: HttpClient, rootUrl: string, params: FilterByAgeRange$Params, context?: HttpContext): Observable<StrictHttpResponse<PageGameDto>> {
  const rb = new RequestBuilder(rootUrl, filterByAgeRange.PATH, 'get');
  if (params) {
    rb.path('minAge', params.minAge, {});
    rb.path('maxAge', params.maxAge, {});
    rb.query('pageable', params.pageable, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageGameDto>;
    })
  );
}

filterByAgeRange.PATH = '/gametracker/v1/game/{minAge}-{maxAge} ans';
