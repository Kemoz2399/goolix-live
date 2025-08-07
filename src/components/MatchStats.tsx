import React from 'react';
import { MatchStatistics } from '../types';

interface MatchStatsProps {
  stats: MatchStatistics;
}

export default function MatchStats({ stats }: MatchStatsProps) {
  const StatBar = ({ 
    label, 
    homeValue, 
    awayValue, 
    homePercentage, 
    awayPercentage 
  }: {
    label: string;
    homeValue: number | string;
    awayValue: number | string;
    homePercentage: number;
    awayPercentage: number;
  }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-blue-600">{homeValue}</span>
        <span className="text-sm font-medium text-gray-900 dark:text-white">{label}</span>
        <span className="text-sm font-medium text-red-600">{awayValue}</span>
      </div>
      <div className="flex h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="bg-blue-600 h-full transition-all duration-500"
          style={{ width: `${homePercentage}%` }}
        />
        <div 
          className="bg-red-600 h-full transition-all duration-500"
          style={{ width: `${awayPercentage}%` }}
        />
      </div>
    </div>
  );

  const calculatePercentage = (home: number, away: number) => {
    const total = home + away;
    if (total === 0) return { home: 50, away: 50 };
    return {
      home: (home / total) * 100,
      away: (away / total) * 100
    };
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Match Statistics</h3>
      
      <div className="space-y-6">
        <StatBar
          label="Possession"
          homeValue={`${stats.home.possession}%`}
          awayValue={`${stats.away.possession}%`}
          homePercentage={stats.home.possession}
          awayPercentage={stats.away.possession}
        />

        <StatBar
          label="Total Shots"
          homeValue={stats.home.shots}
          awayValue={stats.away.shots}
          homePercentage={calculatePercentage(stats.home.shots, stats.away.shots).home}
          awayPercentage={calculatePercentage(stats.home.shots, stats.away.shots).away}
        />

        <StatBar
          label="Shots on Target"
          homeValue={stats.home.shotsOnTarget}
          awayValue={stats.away.shotsOnTarget}
          homePercentage={calculatePercentage(stats.home.shotsOnTarget, stats.away.shotsOnTarget).home}
          awayPercentage={calculatePercentage(stats.home.shotsOnTarget, stats.away.shotsOnTarget).away}
        />

        <StatBar
          label="Corners"
          homeValue={stats.home.corners}
          awayValue={stats.away.corners}
          homePercentage={calculatePercentage(stats.home.corners, stats.away.corners).home}
          awayPercentage={calculatePercentage(stats.home.corners, stats.away.corners).away}
        />

        <StatBar
          label="Fouls"
          homeValue={stats.home.fouls}
          awayValue={stats.away.fouls}
          homePercentage={calculatePercentage(stats.home.fouls, stats.away.fouls).home}
          awayPercentage={calculatePercentage(stats.home.fouls, stats.away.fouls).away}
        />

        <StatBar
          label="Yellow Cards"
          homeValue={stats.home.yellowCards}
          awayValue={stats.away.yellowCards}
          homePercentage={calculatePercentage(stats.home.yellowCards, stats.away.yellowCards).home}
          awayPercentage={calculatePercentage(stats.home.yellowCards, stats.away.yellowCards).away}
        />

        <StatBar
          label="Red Cards"
          homeValue={stats.home.redCards}
          awayValue={stats.away.redCards}
          homePercentage={calculatePercentage(stats.home.redCards, stats.away.redCards).home}
          awayPercentage={calculatePercentage(stats.home.redCards, stats.away.redCards).away}
        />

        <StatBar
          label="Pass Accuracy"
          homeValue={`${stats.home.passAccuracy}%`}
          awayValue={`${stats.away.passAccuracy}%`}
          homePercentage={stats.home.passAccuracy}
          awayPercentage={stats.away.passAccuracy}
        />
      </div>
    </div>
  );
}