import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Users, TrendingUp, Trophy, MapPin, Target } from 'lucide-react';
import { mockTeams, mockMatches, mockPlayers } from '../data/mockData';

export default function Team() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  const team = mockTeams.find(t => t.id === id);
  const teamMatches = mockMatches.filter(m => 
    m.homeTeam.id === id || m.awayTeam.id === id
  );
  const teamPlayers = mockPlayers[id || ''] || [];

  if (!team) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Team not found</h1>
        </div>
      </div>
    );
  }

  const recentMatches = teamMatches.slice(0, 5);
  const upcomingMatches = teamMatches.filter(m => m.status === 'upcoming').slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Team Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 mb-8 text-white">
        <div className="flex items-center space-x-6">
          <img src={team.logo} alt={team.name} className="w-24 h-24 bg-white rounded-lg p-2" />
          <div>
            <h1 className="text-4xl font-bold mb-2">{team.name}</h1>
            <div className="flex items-center space-x-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>{team.city}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Founded {team.founded}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>{team.stadium}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
          <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">3</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Trophies Won</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
          <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">45</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Goals Scored</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
          <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">4th</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">League Position</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
          <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900 dark:text-white">25</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Squad Size</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'overview'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('squad')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'squad'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Squad
            </button>
            <button
              onClick={() => setActiveTab('fixtures')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'fixtures'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Fixtures
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Recent Matches
                </h3>
                <div className="space-y-3">
                  {recentMatches.map((match) => (
                    <div key={match.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-8 h-8" />
                        <span className="font-medium text-gray-900 dark:text-white">
                          {match.homeTeam.name}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">vs</span>
                        <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-8 h-8" />
                        <span className="font-medium text-gray-900 dark:text-white">
                          {match.awayTeam.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900 dark:text-white">
                          {match.homeScore} - {match.awayScore}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(match.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Upcoming Fixtures
                </h3>
                <div className="space-y-3">
                  {upcomingMatches.map((match) => (
                    <div key={match.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-8 h-8" />
                        <span className="font-medium text-gray-900 dark:text-white">
                          {match.homeTeam.name}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">vs</span>
                        <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-8 h-8" />
                        <span className="font-medium text-gray-900 dark:text-white">
                          {match.awayTeam.name}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(match.date).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(match.date).toLocaleTimeString('en-US', { 
                            hour: '2-digit', 
                            minute: '2-digit',
                            hour12: false 
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Squad Tab */}
          {activeTab === 'squad' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Squad ({teamPlayers.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamPlayers.map((player) => (
                  <div key={player.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {player.number}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{player.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{player.position}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">Age: {player.age}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fixtures Tab */}
          {activeTab === 'fixtures' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                All Fixtures & Results
              </h3>
              <div className="space-y-4">
                {teamMatches.map((match) => (
                  <div key={match.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(match.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center space-x-3">
                        <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-8 h-8" />
                        <span className="font-medium text-gray-900 dark:text-white">
                          {match.homeTeam.name}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">vs</span>
                        <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-8 h-8" />
                        <span className="font-medium text-gray-900 dark:text-white">
                          {match.awayTeam.name}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {match.status === 'upcoming' ? (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(match.date).toLocaleTimeString('en-US', { 
                            hour: '2-digit', 
                            minute: '2-digit',
                            hour12: false 
                          })}
                        </span>
                      ) : (
                        <span className="font-bold text-gray-900 dark:text-white">
                          {match.homeScore} - {match.awayScore}
                        </span>
                      )}
                      <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded">
                        {match.league.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}