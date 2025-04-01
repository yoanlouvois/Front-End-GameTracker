/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { FavoriteGame } from '../models/favorite-game';
import { GameComment } from '../models/game-comment';
import { GameLeaderboard } from '../models/game-leaderboard';
import { GameProgress } from '../models/game-progress';
import { GameRating } from '../models/game-rating';
import { GameRecommendation } from '../models/game-recommendation';
import { GameTag } from '../models/game-tag';
import { WinStreak } from '../models/win-streak';
export interface Game {
  averageRating?: number;
  category?: 'ACTION' | 'ADVENTURE' | 'ARCADE' | 'BOARD' | 'CARD' | 'CASINO';
  comments?: Array<GameComment>;
  description?: string;
  difficultyLevel?: 'EASY' | 'MEDIUM' | 'HARD';
  favoriteGames?: Array<FavoriteGame>;
  id?: number;
  isActive?: boolean;
  leaderboardEntries?: Array<GameLeaderboard>;
  minAge?: number;
  name?: string;
  playCount?: number;
  progressions?: Array<GameProgress>;
  ratings?: Array<GameRating>;
  recommendations?: Array<GameRecommendation>;
  tags?: Array<GameTag>;
  url?: string;
  winStreaks?: Array<WinStreak>;
}
