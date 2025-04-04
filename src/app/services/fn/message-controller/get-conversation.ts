/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Pageable } from '../../models/pageable';
import { PageMessageDto } from '../../models/page-message-dto';

export interface GetConversation$Params {
  user1Id: number;
  user2Id: number;
  pageable: Pageable;
}

export function getConversation(http: HttpClient, rootUrl: string, params: GetConversation$Params, context?: HttpContext): Observable<StrictHttpResponse<PageMessageDto>> {
  const rb = new RequestBuilder(rootUrl, getConversation.PATH, 'get');
  if (params) {
    rb.path('user1Id', params.user1Id, {});
    rb.path('user2Id', params.user2Id, {});
    rb.query('pageable', params.pageable, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageMessageDto>;
    })
  );
}

getConversation.PATH = '/gametracker/v1/message/conversation/{user1Id}/{user2Id}';
