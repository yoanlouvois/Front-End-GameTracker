/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Game } from '../../models/game';
import { Tag } from '../../models/tag';

export interface RemoveTagFromGame$Params {
  game: Game;
  tag: Tag;
}

export function removeTagFromGame(http: HttpClient, rootUrl: string, params: RemoveTagFromGame$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, removeTagFromGame.PATH, 'delete');
  if (params) {
    rb.path('game', params.game, {});
    rb.path('tag', params.tag, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

removeTagFromGame.PATH = '/gametracker/v1/game/{game}/tag/{tag}';
