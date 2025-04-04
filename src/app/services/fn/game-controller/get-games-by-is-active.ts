/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Pageable } from '../../models/pageable';
import { PageGame } from '../../models/page-game';

export interface GetGamesByIsActive$Params {
  isActive: boolean;
  pageable: Pageable;
}

export function getGamesByIsActive(http: HttpClient, rootUrl: string, params: GetGamesByIsActive$Params, context?: HttpContext): Observable<StrictHttpResponse<PageGame>> {
  const rb = new RequestBuilder(rootUrl, getGamesByIsActive.PATH, 'get');
  if (params) {
    rb.query('isActive', params.isActive, {});
    rb.query('pageable', params.pageable, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageGame>;
    })
  );
}

getGamesByIsActive.PATH = '/gametracker/v1/game/active';
