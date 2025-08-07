import React from 'react';
import { User } from 'lucide-react';
import { PlayerLineup } from '../types';

interface LineupProps {
  homeLineup: PlayerLineup[];
  awayLineup: PlayerLineup[];
}

export default function Lineup({ homeLineup, awayLineup }: LineupProps) {
  const renderFormation = (players: PlayerLineup[], isHome: boolean) => {
    const starters = players.filter(p => p.isStarter);
    const substitutes = players.filter(p => !p.isStarter);

    // Group players by position for formation display
    const goalkeeper = starters.filter(p => p.position === 'GK');
    const defenders = starters.filter(p => p.position === 'DEF');
    const midfielders = starters.filter(p => p.position === 'MID');
    const forwards = starters.filter(p => p.position === 'FOR');

    return (
      <div className={`w-full ${isHome ? 'text-left' : 'text-right'}`}>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-4 relative min-h-96">
          {/* Football field lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full border border-white rounded-lg">
              <div className="h-1/2 border-b border-white"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white rounded-full"></div>
            </div>
          </div>

          {/* Formation Layout */}
          <div className="relative z-10 h-full flex flex-col justify-between py-2">
            {/* Forwards */}
            <div className={`flex ${isHome ? 'justify-start' : 'justify-end'} space-x-2`}>
              {forwards.map((player) => (
                <PlayerCard key={player.number} player={player} isHome={isHome} />
              ))}
            </div>

            {/* Midfielders */}
            <div className={`flex ${isHome ? 'justify-start' : 'justify-end'} space-x-2`}>
              {midfielders.map((player) => (
                <PlayerCard key={player.number} player={player} isHome={isHome} />
              ))}
            </div>

            {/* Defenders */}
            <div className={`flex ${isHome ? 'justify-start' : 'justify-end'} space-x-2`}>
              {defenders.map((player) => (
                <PlayerCard key={player.number} player={player} isHome={isHome} />
              ))}
            </div>

            {/* Goalkeeper */}
            <div className={`flex ${isHome ? 'justify-start' : 'justify-end'}`}>
              {goalkeeper.map((player) => (
                <PlayerCard key={player.number} player={player} isHome={isHome} isGoalkeeper />
              ))}
            </div>
          </div>
        </div>

        {/* Substitutes */}
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Substitutes</h4>
          <div className="grid grid-cols-2 gap-2">
            {substitutes.map((player) => (
              <div key={player.number} className="flex items-center space-x-2 text-sm">
                <span className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xs font-bold">
                  {player.number}
                </span>
                <span className="text-gray-900 dark:text-white">{player.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Team Lineups</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Home Team</h4>
          {renderFormation(homeLineup, true)}
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Away Team</h4>
          {renderFormation(awayLineup, false)}
        </div>
      </div>
    </div>
  );
}

function PlayerCard({ 
  player, 
  isHome, 
  isGoalkeeper = false 
}: { 
  player: PlayerLineup; 
  isHome: boolean; 
  isGoalkeeper?: boolean;
}) {
  return (
    <div className={`flex flex-col items-center space-y-1 ${isHome ? 'text-left' : 'text-right'}`}>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm ${
        isGoalkeeper ? 'bg-orange-500' : 'bg-blue-600'
      }`}>
        {player.number}
      </div>
      <span className="text-xs font-medium text-gray-900 dark:text-white max-w-16 truncate">
        {player.name.split(' ').pop()}
      </span>
    </div>
  );
}