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

export interface FilterByCategory$Params {
  category: 'ACTION' | 'ADVENTURE' | 'ARCADE' | 'BOARD' | 'CARD' | 'CASINO';
  pageable: Pageable;
}

export function filterByCategory(http: HttpClient, rootUrl: string, params: FilterByCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<PageGameDto>> {
  const rb = new RequestBuilder(rootUrl, filterByCategory.PATH, 'get');
  if (params) {
    rb.path('category', params.category, {});
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

filterByCategory.PATH = '/gametracker/v1/game/{category}';
