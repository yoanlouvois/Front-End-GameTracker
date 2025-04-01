/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MessageDto } from '../../models/message-dto';

export interface GetRecentMessages$Params {
  userId: number;
      body: number
}

export function getRecentMessages(http: HttpClient, rootUrl: string, params: GetRecentMessages$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MessageDto>>> {
  const rb = new RequestBuilder(rootUrl, getRecentMessages.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MessageDto>>;
    })
  );
}

getRecentMessages.PATH = '/gametracker/v1/message/recent/{userId}';
