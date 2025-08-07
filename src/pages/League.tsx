import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Trophy, Calendar, Target, Users } from 'lucide-react';
import MatchCard from '../components/MatchCard';
import { mockLeagues, mockMatches, mockStandings } from '../data/mockData';

export default function League() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('table');
  
  const league = mockLeagues.find(l => l.id === id);
  const leagueMatches = mockMatches.filter(m => m.league.id === id);
  const standings = mockStandings[id || ''] || [];

  if (!league) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">League not found</h1>
        </div>
      </div>
    );
  }

  const todayMatches = leagueMatches.filter(m => 
    new Date(m.date).toDateString() === new Date().toDateString()
  );

  const upcomingMatches = leagueMatches.filter(m => m.status === 'upcoming').slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* League Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 mb-8 text-white">
        <div className="flex items-center space-x-6">
          <img src={league.logo} alt={league.name} className="w-20 h-20 bg-white rounded-lg p-2" />
          <div>
            <h1 className="text-4xl font-bold mb-2">{league.name}</h1>
            <p className="text-lg text-purple-100 mb-4">{league.country} • Season 2024/25</p>
            <div className="flex items-center space-x-6 text-purple-100">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>20 Teams</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>380 Matches</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>38 Matchdays</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-8">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('table')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'table'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              League Table
            </button>
            <button
              onClick={() => setActiveTab('fixtures')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'fixtures'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Fixtures & Results
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'stats'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Statistics
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* League Table Tab */}
          {activeTab === 'table' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                League Table
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b dark:border-gray-700">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">Pos</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">Team</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">MP</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">W</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">D</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">L</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">GF</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">GA</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">GD</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standings.map((team, index) => (
                      <tr key={team.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <span className={`w-6 h-6 rounded text-xs flex items-center justify-center font-bold ${
                              index < 4 ? 'bg-green-100 text-green-800' :
                              index < 6 ? 'bg-blue-100 text-blue-800' :
                              index >= standings.length - 3 ? 'bg-red-100 text-red-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {index + 1}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-3">
                            <img src={team.logo} alt={team.name} className="w-6 h-6" />
                            <span className="font-medium text-gray-900 dark:text-white">{team.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center text-sm text-gray-600 dark:text-gray-400">{team.played}</td>
                        <td className="py-3 px-4 text-center text-sm text-gray-600 dark:text-gray-400">{team.won}</td>
                        <td className="py-3 px-4 text-center text-sm text-gray-600 dark:text-gray-400">{team.drawn}</td>
                        <td className="py-3 px-4 text-center text-sm text-gray-600 dark:text-gray-400">{team.lost}</td>
                        <td className="py-3 px-4 text-center text-sm text-gray-600 dark:text-gray-400">{team.goalsFor}</td>
                        <td className="py-3 px-4 text-center text-sm text-gray-600 dark:text-gray-400">{team.goalsAgainst}</td>
                        <td className="py-3 px-4 text-center text-sm text-gray-600 dark:text-gray-400">
                          <span className={team.goalDifference >= 0 ? 'text-green-600' : 'text-red-600'}>
                            {team.goalDifference > 0 ? '+' : ''}{team.goalDifference}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center text-sm font-bold text-gray-900 dark:text-white">{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-100 rounded"></div>
                  <span className="text-gray-600 dark:text-gray-400">Champions League</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-100 rounded"></div>
                  <span className="text-gray-600 dark:text-gray-400">Europa League</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-100 rounded"></div>
                  <span className="text-gray-600 dark:text-gray-400">Relegation</span>
                </div>
              </div>
            </div>
          )}

          {/* Fixtures Tab */}
          {activeTab === 'fixtures' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Fixtures & Results
              </h3>
              
              {todayMatches.length > 0 && (
                <div className="mb-8">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4">Today's Matches</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {todayMatches.map((match) => (
                      <MatchCard key={match.id} match={match} />
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Upcoming Fixtures</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {upcomingMatches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Statistics Tab */}
          {activeTab === 'stats' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                League Statistics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center">
                  <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">247</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Total Goals</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center">
                  <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">156</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Matches Played</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center">
                  <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">2.84</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Avg Goals/Match</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center">
                  <Calendar className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">16</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Matchdays Left</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}