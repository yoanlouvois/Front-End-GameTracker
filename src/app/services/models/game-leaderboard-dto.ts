/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { UserDto } from '../models/user-dto';
export interface GameLeaderboardDto {
  date?: string;
  id?: number;
  lastModifiedDate?: string;
  period?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY' | 'ALL_TIME';
  rankNumber?: number;
  score?: number;
  user?: UserDto;
}
