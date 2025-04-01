/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Pageable } from '../../models/pageable';
import { PageTagDto } from '../../models/page-tag-dto';

export interface SearchTags$Params {
  query: string;
  pageable: Pageable;
}

export function searchTags(http: HttpClient, rootUrl: string, params: SearchTags$Params, context?: HttpContext): Observable<StrictHttpResponse<PageTagDto>> {
  const rb = new RequestBuilder(rootUrl, searchTags.PATH, 'get');
  if (params) {
    rb.path('query', params.query, {});
    rb.query('pageable', params.pageable, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageTagDto>;
    })
  );
}

searchTags.PATH = '/gametracker/v1/tags/search/{query}';
