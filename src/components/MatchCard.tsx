import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin } from 'lucide-react';
import { Match } from '../types';

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({ match }: MatchCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'text-red-500 bg-red-50 dark:bg-red-900/20';
      case 'finished':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-700/50';
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <Link 
      to={`/match/${match.id}`}
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-700"
    >
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <img src={match.league.logo} alt={match.league.name} className="w-5 h-5" />
            <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
              {match.league.name}
            </span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(match.status)}`}>
            {match.status === 'live' && match.minute ? `${match.minute}'` : match.status}
          </span>
        </div>

        {/* Teams and Score */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex-1">
            {/* Home Team */}
            <div className="flex items-center space-x-3 mb-2">
              <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-8 h-8" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {match.homeTeam.name}
              </span>
            </div>
            
            {/* Away Team */}
            <div className="flex items-center space-x-3">
              <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-8 h-8" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {match.awayTeam.name}
              </span>
            </div>
          </div>

          {/* Score */}
          <div className="text-right">
            {match.status === 'upcoming' ? (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <Clock className="h-4 w-4 inline mr-1" />
                {formatTime(match.date)}
              </div>
            ) : (
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                <div>{match.homeScore}</div>
                <div>{match.awayScore}</div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>{match.venue}</span>
          </div>
          {match.status === 'live' && (
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span>LIVE</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}