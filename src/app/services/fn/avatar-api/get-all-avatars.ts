/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AvatarDto } from '../../models/avatar-dto';

export interface GetAllAvatars$Params {
}

export function getAllAvatars(http: HttpClient, rootUrl: string, params?: GetAllAvatars$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AvatarDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllAvatars.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AvatarDto>>;
    })
  );
}

getAllAvatars.PATH = '/gametracker/v1/avatars/all';
