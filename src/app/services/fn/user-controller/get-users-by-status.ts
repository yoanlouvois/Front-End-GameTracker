/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Pageable } from '../../models/pageable';
import { PageUserDto } from '../../models/page-user-dto';

export interface GetUsersByStatus$Params {
  isActive: boolean;
  pageable: Pageable;
}

export function getUsersByStatus(http: HttpClient, rootUrl: string, params: GetUsersByStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<PageUserDto>> {
  const rb = new RequestBuilder(rootUrl, getUsersByStatus.PATH, 'get');
  if (params) {
    rb.path('isActive', params.isActive, {});
    rb.query('pageable', params.pageable, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageUserDto>;
    })
  );
}

getUsersByStatus.PATH = '/gametracker/v1/users/status/{isActive}';
