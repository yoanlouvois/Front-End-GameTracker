/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReportDto } from '../../models/report-dto';

export interface ChangeReportStatus$Params {
  reportId: number;
      body: 'PENDING' | 'RESOLVED' | 'DISMISSED'
}

export function changeReportStatus(http: HttpClient, rootUrl: string, params: ChangeReportStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<ReportDto>> {
  const rb = new RequestBuilder(rootUrl, changeReportStatus.PATH, 'put');
  if (params) {
    rb.path('reportId', params.reportId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ReportDto>;
    })
  );
}

changeReportStatus.PATH = '/gametracker/v1/report/{reportId}/changeStatus';
