/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FriendshipDto } from '../../models/friendship-dto';

export interface GetAllFriendships$Params {
}

export function getAllFriendships(http: HttpClient, rootUrl: string, params?: GetAllFriendships$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FriendshipDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllFriendships.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<FriendshipDto>>;
    })
  );
}

getAllFriendships.PATH = '/gametracker/v1/friendships/admin/all';
