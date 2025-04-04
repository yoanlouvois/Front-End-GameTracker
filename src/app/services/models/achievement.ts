/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { UserAchievement } from '../models/user-achievement';
export interface Achievement {
  achievementsEarned?: Array<UserAchievement>;
  conditions?: {
[key: string]: {
};
};
  description?: string;
  icon?: string;
  id?: number;
  isActive?: boolean;
  isSecret?: boolean;
  name?: string;
  pointsReward?: number;
  rarity?: 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC' | 'LEGENDARY';
  requiresAchievementId?: number;
  type?: 'TIME' | 'SOCIAL' | 'PROGRESSION' | 'EXPLORATION' | 'PERFORMANCE' | 'COLLECTION';
}
