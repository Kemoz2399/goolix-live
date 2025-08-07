export interface Team {
  id: string;
  name: string;
  logo: string;
  city: string;
  founded: number;
  stadium: string;
}

export interface League {
  id: string;
  name: string;
  logo: string;
  country: string;
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  date: string;
  status: 'upcoming' | 'live' | 'finished';
  minute?: number;
  league: League;
  venue: string;
}

export interface MatchEvent {
  minute: number;
  type: 'goal' | 'yellow-card' | 'red-card' | 'substitution' | 'other';
  player: string;
  team: string;
  description: string;
  assistedBy?: string;
}

export interface PlayerLineup {
  id: string;
  name: string;
  number: number;
  position: 'GK' | 'DEF' | 'MID' | 'FOR';
  isStarter: boolean;
}

export interface TeamStats {
  possession: number;
  shots: number;
  shotsOnTarget: number;
  corners: number;
  fouls: number;
  yellowCards: number;
  redCards: number;
  passAccuracy: number;
}

export interface MatchStatistics {
  home: TeamStats;
  away: TeamStats;
}

export interface StandingTeam {
  id: string;
  name: string;
  logo: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface Player {
  id: string;
  name: string;
  number: number;
  position: string;
  age: number;
  nationality: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  author: string;
  publishedAt: string;
  category: string;
}