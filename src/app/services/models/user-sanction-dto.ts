/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { UserDto } from '../models/user-dto';
export interface UserSanctionDto {
  admin?: UserDto;
  creationDate?: string;
  endDate?: string;
  id?: number;
  lastModifiedDate?: string;
  reason?: string;
  startDate?: string;
  type?: 'WARNING' | 'TEMPORARY_BAN' | 'PERMANENT_BAN';
}
