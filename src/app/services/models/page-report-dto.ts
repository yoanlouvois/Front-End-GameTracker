/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { PageableObject } from '../models/pageable-object';
import { ReportDto } from '../models/report-dto';
import { SortObject } from '../models/sort-object';
export interface PageReportDto {
  content?: Array<ReportDto>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: PageableObject;
  size?: number;
  sort?: SortObject;
  totalElements?: number;
  totalPages?: number;
}
