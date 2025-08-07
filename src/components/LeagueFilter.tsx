import React from 'react';
import { Trophy } from 'lucide-react';
import { League } from '../types';

interface LeagueFilterProps {
  selectedLeague: string;
  onLeagueChange: (leagueId: string) => void;
  leagues: League[];
}

export default function LeagueFilter({ selectedLeague, onLeagueChange, leagues }: LeagueFilterProps) {
  return (
    <div className="flex items-center space-x-2">
      <Trophy className="h-5 w-5 text-gray-500" />
      <select
        value={selectedLeague}
        onChange={(e) => onLeagueChange(e.target.value)}
        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="all">All Leagues</option>
        {leagues.map((league) => (
          <option key={league.id} value={league.id}>
            {league.name}
          </option>
        ))}
      </select>
    </div>
  );
}