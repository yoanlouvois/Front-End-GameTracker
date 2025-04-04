/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Game } from '../../models/game';
import { GameTagDto } from '../../models/game-tag-dto';
import { Tag } from '../../models/tag';

export interface AddTagToGame$Params {
  game: Game;
  tag: Tag;
}

export function addTagToGame(http: HttpClient, rootUrl: string, params: AddTagToGame$Params, context?: HttpContext): Observable<StrictHttpResponse<GameTagDto>> {
  const rb = new RequestBuilder(rootUrl, addTagToGame.PATH, 'post');
  if (params) {
    rb.path('game', params.game, {});
    rb.path('tag', params.tag, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<GameTagDto>;
    })
  );
}

addTagToGame.PATH = '/gametracker/v1/game/{game}/tag/{tag}';
