/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { GameLeaderboardDto } from '../models/game-leaderboard-dto';
import { PageableObject } from '../models/pageable-object';
import { SortObject } from '../models/sort-object';
export interface PageGameLeaderboardDto {
  content?: Array<GameLeaderboardDto>;
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
