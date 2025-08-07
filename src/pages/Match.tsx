import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Users, BarChart3, Clock, Target } from 'lucide-react';
import EventTimeline from '../components/EventTimeline';
import Lineup from '../components/Lineup';
import MatchStats from '../components/MatchStats';
import { mockMatches, mockMatchEvents, mockLineups, mockMatchStats } from '../data/mockData';

export default function Match() {
  const { id } = useParams();
  const match = mockMatches.find(m => m.id === id);
  
  if (!match) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Match not found</h1>
        </div>
      </div>
    );
  }

  const events = mockMatchEvents[id || ''] || [];
  const lineups = mockLineups[id || ''];
  const stats = mockMatchStats[id || ''];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
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
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Match Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img src={match.league.logo} alt={match.league.name} className="w-6 h-6" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {match.league.name}
            </span>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            match.status === 'live' 
              ? 'text-red-600 bg-red-50 dark:bg-red-900/20' 
              : match.status === 'finished'
              ? 'text-green-600 bg-green-50 dark:bg-green-900/20'
              : 'text-gray-600 bg-gray-50 dark:bg-gray-700/50'
          }`}>
            {match.status === 'live' && match.minute ? `${match.minute}'` : match.status}
          </div>
        </div>

        <div className="grid grid-cols-3 items-center gap-8">
          {/* Home Team */}
          <div className="text-center">
            <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-20 h-20 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{match.homeTeam.name}</h2>
          </div>

          {/* Score */}
          <div className="text-center">
            {match.status === 'upcoming' ? (
              <div>
                <div className="text-4xl font-bold text-gray-400 mb-2">VS</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(match.date)}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{formatTime(match.date)}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-6xl font-bold text-gray-900 dark:text-white">
                {match.homeScore} - {match.awayScore}
              </div>
            )}
          </div>

          {/* Away Team */}
          <div className="text-center">
            <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-20 h-20 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{match.awayTeam.name}</h2>
          </div>
        </div>

        {/* Match Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t dark:border-gray-700">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <MapPin className="h-4 w-4" />
            <span>{match.venue}</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Users className="h-4 w-4" />
            <span>Referee: John Smith</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Target className="h-4 w-4" />
            <span>Attendance: 45,000</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6">
            <button className="py-4 px-2 border-b-2 border-blue-600 font-medium text-sm text-blue-600">
              Events
            </button>
            <button className="py-4 px-2 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              Lineups
            </button>
            <button className="py-4 px-2 border-b-2 border-transparent font-medium text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              Stats
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Events Timeline */}
          <EventTimeline events={events} />
          
          {/* Lineups (hidden by default, shown when tab is active) */}
          <div className="hidden">
            {lineups && <Lineup homeLineup={lineups.home} awayLineup={lineups.away} />}
          </div>
          
          {/* Stats (hidden by default, shown when tab is active) */}
          <div className="hidden">
            {stats && <MatchStats stats={stats} />}
          </div>
        </div>
      </div>
    </div>
  );
}