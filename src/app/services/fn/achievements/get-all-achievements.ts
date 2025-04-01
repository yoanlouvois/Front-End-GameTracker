/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AchievementDto } from '../../models/achievement-dto';

export interface GetAllAchievements$Params {
}

export function getAllAchievements(http: HttpClient, rootUrl: string, params?: GetAllAchievements$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AchievementDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllAchievements.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AchievementDto>>;
    })
  );
}

getAllAchievements.PATH = '/gametracker/v1/achievements/all';
