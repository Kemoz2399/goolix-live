import { Team, League, Match, MatchEvent, PlayerLineup, MatchStatistics, StandingTeam, Player, NewsArticle } from '../types';

export const mockTeams: Team[] = [
  {
    id: 'manchester-united',
    name: 'Manchester United',
    logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
    city: 'Manchester',
    founded: 1878,
    stadium: 'Old Trafford'
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
    city: 'Liverpool',
    founded: 1892,
    stadium: 'Anfield'
  },
  {
    id: 'arsenal',
    name: 'Arsenal',
    logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
    city: 'London',
    founded: 1886,
    stadium: 'Emirates Stadium'
  },
  {
    id: 'manchester-city',
    name: 'Manchester City',
    logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
    city: 'Manchester',
    founded: 1880,
    stadium: 'Etihad Stadium'
  },
  {
    id: 'real-madrid',
    name: 'Real Madrid',
    logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
    city: 'Madrid',
    founded: 1902,
    stadium: 'Santiago Bernabéu'
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
    city: 'Barcelona',
    founded: 1899,
    stadium: 'Camp Nou'
  }
];

export const mockLeagues: League[] = [
  {
    id: 'premier-league',
    name: 'Premier League',
    logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
    country: 'England'
  },
  {
    id: 'la-liga',
    name: 'La Liga',
    logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
    country: 'Spain'
  },
  {
    id: 'champions-league',
    name: 'Champions League',
    logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
    country: 'Europe'
  },
  {
    id: 'serie-a',
    name: 'Serie A',
    logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
    country: 'Italy'
  },
  {
    id: 'bundesliga',
    name: 'Bundesliga',
    logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
    country: 'Germany'
  }
];

export const mockMatches: Match[] = [
  {
    id: '1',
    homeTeam: mockTeams[0],
    awayTeam: mockTeams[1],
    homeScore: 2,
    awayScore: 1,
    date: new Date().toISOString(),
    status: 'live',
    minute: 78,
    league: mockLeagues[0],
    venue: 'Old Trafford'
  },
  {
    id: '2',
    homeTeam: mockTeams[2],
    awayTeam: mockTeams[3],
    homeScore: 1,
    awayScore: 3,
    date: new Date().toISOString(),
    status: 'finished',
    league: mockLeagues[0],
    venue: 'Emirates Stadium'
  },
  {
    id: '3',
    homeTeam: mockTeams[4],
    awayTeam: mockTeams[5],
    homeScore: 0,
    awayScore: 0,
    date: new Date(Date.now() + 86400000).toISOString(),
    status: 'upcoming',
    league: mockLeagues[1],
    venue: 'Santiago Bernabéu'
  },
  {
    id: '4',
    homeTeam: mockTeams[1],
    awayTeam: mockTeams[2],
    homeScore: 2,
    awayScore: 2,
    date: new Date(Date.now() - 86400000).toISOString(),
    status: 'finished',
    league: mockLeagues[0],
    venue: 'Anfield'
  },
  {
    id: '5',
    homeTeam: mockTeams[3],
    awayTeam: mockTeams[0],
    homeScore: 0,
    awayScore: 0,
    date: new Date(Date.now() + 172800000).toISOString(),
    status: 'upcoming',
    league: mockLeagues[0],
    venue: 'Etihad Stadium'
  }
];

export const mockMatchEvents: Record<string, MatchEvent[]> = {
  '1': [
    {
      minute: 23,
      type: 'goal',
      player: 'Marcus Rashford',
      team: 'Manchester United',
      description: 'Goal from close range',
      assistedBy: 'Bruno Fernandes'
    },
    {
      minute: 34,
      type: 'yellow-card',
      player: 'Jordan Henderson',
      team: 'Liverpool',
      description: 'Foul on opponent'
    },
    {
      minute: 56,
      type: 'goal',
      player: 'Mohamed Salah',
      team: 'Liverpool',
      description: 'Penalty goal'
    },
    {
      minute: 72,
      type: 'substitution',
      player: 'Anthony Martial',
      team: 'Manchester United',
      description: 'Substituted for Jadon Sancho'
    },
    {
      minute: 84,
      type: 'goal',
      player: 'Bruno Fernandes',
      team: 'Manchester United',
      description: 'Free kick goal'
    }
  ]
};

export const mockLineups: Record<string, { home: PlayerLineup[]; away: PlayerLineup[] }> = {
  '1': {
    home: [
      { id: '1', name: 'André Onana', number: 24, position: 'GK', isStarter: true },
      { id: '2', name: 'Diogo Dalot', number: 20, position: 'DEF', isStarter: true },
      { id: '3', name: 'Raphael Varane', number: 19, position: 'DEF', isStarter: true },
      { id: '4', name: 'Lisandro Martinez', number: 6, position: 'DEF', isStarter: true },
      { id: '5', name: 'Luke Shaw', number: 23, position: 'DEF', isStarter: true },
      { id: '6', name: 'Casemiro', number: 18, position: 'MID', isStarter: true },
      { id: '7', name: 'Bruno Fernandes', number: 8, position: 'MID', isStarter: true },
      { id: '8', name: 'Mason Mount', number: 7, position: 'MID', isStarter: true },
      { id: '9', name: 'Marcus Rashford', number: 10, position: 'FOR', isStarter: true },
      { id: '10', name: 'Rasmus Højlund', number: 11, position: 'FOR', isStarter: true },
      { id: '11', name: 'Antony', number: 21, position: 'FOR', isStarter: true },
      { id: '12', name: 'Tom Heaton', number: 22, position: 'GK', isStarter: false },
      { id: '13', name: 'Jadon Sancho', number: 25, position: 'FOR', isStarter: false }
    ],
    away: [
      { id: '1', name: 'Alisson', number: 1, position: 'GK', isStarter: true },
      { id: '2', name: 'Trent Alexander-Arnold', number: 66, position: 'DEF', isStarter: true },
      { id: '3', name: 'Ibrahima Konaté', number: 5, position: 'DEF', isStarter: true },
      { id: '4', name: 'Virgil van Dijk', number: 4, position: 'DEF', isStarter: true },
      { id: '5', name: 'Andy Robertson', number: 26, position: 'DEF', isStarter: true },
      { id: '6', name: 'Alexis Mac Allister', number: 10, position: 'MID', isStarter: true },
      { id: '7', name: 'Dominik Szoboszlai', number: 8, position: 'MID', isStarter: true },
      { id: '8', name: 'Ryan Gravenberch', number: 38, position: 'MID', isStarter: true },
      { id: '9', name: 'Mohamed Salah', number: 11, position: 'FOR', isStarter: true },
      { id: '10', name: 'Darwin Núñez', number: 9, position: 'FOR', isStarter: true },
      { id: '11', name: 'Luis Díaz', number: 7, position: 'FOR', isStarter: true },
      { id: '12', name: 'Caoimhín Kelleher', number: 62, position: 'GK', isStarter: false },
      { id: '13', name: 'Diogo Jota', number: 20, position: 'FOR', isStarter: false }
    ]
  }
};

export const mockMatchStats: Record<string, MatchStatistics> = {
  '1': {
    home: {
      possession: 52,
      shots: 14,
      shotsOnTarget: 6,
      corners: 5,
      fouls: 12,
      yellowCards: 2,
      redCards: 0,
      passAccuracy: 84
    },
    away: {
      possession: 48,
      shots: 11,
      shotsOnTarget: 4,
      corners: 3,
      fouls: 15,
      yellowCards: 3,
      redCards: 0,
      passAccuracy: 81
    }
  }
};

export const mockStandings: Record<string, StandingTeam[]> = {
  'premier-league': [
    {
      id: 'liverpool',
      name: 'Liverpool',
      logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
      played: 20,
      won: 15,
      drawn: 4,
      lost: 1,
      goalsFor: 48,
      goalsAgainst: 18,
      goalDifference: 30,
      points: 49
    },
    {
      id: 'arsenal',
      name: 'Arsenal',
      logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
      played: 20,
      won: 13,
      drawn: 5,
      lost: 2,
      goalsFor: 42,
      goalsAgainst: 22,
      goalDifference: 20,
      points: 44
    },
    {
      id: 'manchester-city',
      name: 'Manchester City',
      logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
      played: 19,
      won: 12,
      drawn: 4,
      lost: 3,
      goalsFor: 45,
      goalsAgainst: 24,
      goalDifference: 21,
      points: 40
    },
    {
      id: 'manchester-united',
      name: 'Manchester United',
      logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=64&h=64',
      played: 20,
      won: 10,
      drawn: 6,
      lost: 4,
      goalsFor: 35,
      goalsAgainst: 28,
      goalDifference: 7,
      points: 36
    }
  ]
};

export const mockPlayers: Record<string, Player[]> = {
  'manchester-united': [
    { id: '1', name: 'André Onana', number: 24, position: 'Goalkeeper', age: 28, nationality: 'Cameroon' },
    { id: '2', name: 'Diogo Dalot', number: 20, position: 'Defender', age: 25, nationality: 'Portugal' },
    { id: '3', name: 'Raphael Varane', number: 19, position: 'Defender', age: 31, nationality: 'France' },
    { id: '4', name: 'Lisandro Martinez', number: 6, position: 'Defender', age: 26, nationality: 'Argentina' },
    { id: '5', name: 'Luke Shaw', number: 23, position: 'Defender', age: 28, nationality: 'England' },
    { id: '6', name: 'Casemiro', number: 18, position: 'Midfielder', age: 32, nationality: 'Brazil' },
    { id: '7', name: 'Bruno Fernandes', number: 8, position: 'Midfielder', age: 29, nationality: 'Portugal' },
    { id: '8', name: 'Mason Mount', number: 7, position: 'Midfielder', age: 25, nationality: 'England' },
    { id: '9', name: 'Marcus Rashford', number: 10, position: 'Forward', age: 27, nationality: 'England' },
    { id: '10', name: 'Rasmus Højlund', number: 11, position: 'Forward', age: 21, nationality: 'Denmark' },
    { id: '11', name: 'Antony', number: 21, position: 'Forward', age: 24, nationality: 'Brazil' }
  ]
};

export const mockNewsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'Manchester United Secures Victory in Thrilling Derby Match',
    excerpt: 'A spectacular performance from the Red Devils saw them defeat their city rivals in a match that will be remembered for years to come.',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
    author: 'John Smith',
    publishedAt: '2 hours ago',
    category: 'Premier League'
  },
  {
    id: '2',
    title: 'Transfer Window Update: Top Clubs Eye Star Player',
    excerpt: 'Several European giants are reportedly interested in securing the services of the young sensation this summer.',
    image: 'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
    author: 'Sarah Johnson',
    publishedAt: '4 hours ago',
    category: 'Transfer News'
  },
  {
    id: '3',
    title: 'Champions League Draw Reveals Exciting Matchups',
    excerpt: 'The quarter-final draw has produced some mouth-watering fixtures that promise to deliver spectacular football.',
    image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
    author: 'Mike Wilson',
    publishedAt: '6 hours ago',
    category: 'Champions League'
  },
  {
    id: '4',
    title: 'Young Talent Breaks Club Record in Historic Victory',
    excerpt: 'The 19-year-old midfielder became the youngest player in club history to achieve this remarkable feat.',
    image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
    author: 'Emma Davis',
    publishedAt: '1 day ago',
    category: 'Youth Football'
  },
  {
    id: '5',
    title: 'La Liga Title Race Heats Up as Season Enters Final Stretch',
    excerpt: 'With just a few points separating the top teams, the Spanish league title remains up for grabs.',
    image: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
    author: 'Carlos Rodriguez',
    publishedAt: '1 day ago',
    category: 'La Liga'
  },
  {
    id: '6',
    title: 'Stadium Renovation Plans Unveiled for Historic Ground',
    excerpt: 'The century-old stadium will undergo major renovations to enhance fan experience while preserving its heritage.',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
    author: 'David Brown',
    publishedAt: '2 days ago',
    category: 'Stadium News'
  }
];

export const mockTrendingNews = [
  { title: 'Liverpool extends winning streak to 10 games', source: 'ESPN', time: '1h ago' },
  { title: 'Mbappe linked with Premier League move', source: 'Sky Sports', time: '2h ago' },
  { title: 'World Cup qualification updates', source: 'FIFA.com', time: '3h ago' },
  { title: 'VAR controversy in weekend matches', source: 'BBC Sport', time: '4h ago' },
  { title: 'Injury update on key players', source: 'Goal.com', time: '5h ago' }
];