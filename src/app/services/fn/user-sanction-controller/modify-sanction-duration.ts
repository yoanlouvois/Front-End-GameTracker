/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserSanctionDto } from '../../models/user-sanction-dto';

export interface ModifySanctionDuration$Params {
  sanctionId: number;
      body: string
}

export function modifySanctionDuration(http: HttpClient, rootUrl: string, params: ModifySanctionDuration$Params, context?: HttpContext): Observable<StrictHttpResponse<UserSanctionDto>> {
  const rb = new RequestBuilder(rootUrl, modifySanctionDuration.PATH, 'put');
  if (params) {
    rb.path('sanctionId', params.sanctionId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserSanctionDto>;
    })
  );
}

modifySanctionDuration.PATH = '/gametracker/v1/sanctions/modify/{sanctionId}';
