/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FriendshipDto } from '../../models/friendship-dto';

export interface GetFriendshipById$Params {
  friendshipId: number;
}

export function getFriendshipById(http: HttpClient, rootUrl: string, params: GetFriendshipById$Params, context?: HttpContext): Observable<StrictHttpResponse<FriendshipDto>> {
  const rb = new RequestBuilder(rootUrl, getFriendshipById.PATH, 'get');
  if (params) {
    rb.path('friendshipId', params.friendshipId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FriendshipDto>;
    })
  );
}

getFriendshipById.PATH = '/gametracker/v1/friendships/{friendshipId}';
