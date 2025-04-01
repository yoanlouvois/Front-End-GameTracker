/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FriendshipDto } from '../../models/friendship-dto';

export interface CreateFriendship$Params {
      body: FriendshipDto
}

export function createFriendship(http: HttpClient, rootUrl: string, params: CreateFriendship$Params, context?: HttpContext): Observable<StrictHttpResponse<FriendshipDto>> {
  const rb = new RequestBuilder(rootUrl, createFriendship.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

createFriendship.PATH = '/gametracker/v1/friendships/create';
