import React, { useState } from 'react';
import MatchCard from '../components/MatchCard';
import LeagueFilter from '../components/LeagueFilter';
import { Calendar, Trophy, TrendingUp } from 'lucide-react';
import { mockMatches, mockLeagues, mockTrendingNews } from '../data/mockData';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedLeague, setSelectedLeague] = useState('all');

  const filteredMatches = mockMatches.filter(match => {
    const matchDate = match.date.split('T')[0];
    const dateMatch = matchDate === selectedDate;
    const leagueMatch = selectedLeague === 'all' || match.league.id === selectedLeague;
    return dateMatch && leagueMatch;
  });

  const liveMatches = filteredMatches.filter(match => match.status === 'live');
  const upcomingMatches = filteredMatches.filter(match => match.status === 'upcoming');
  const finishedMatches = filteredMatches.filter(match => match.status === 'finished');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Live Football Scores
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Stay updated with live matches, scores, and football news
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-gray-500" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <LeagueFilter
          selectedLeague={selectedLeague}
          onLeagueChange={setSelectedLeague}
          leagues={mockLeagues}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="xl:col-span-3 space-y-8">
          {/* Live Matches */}
          {liveMatches.length > 0 && (
            <section>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Live Now ({liveMatches.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {liveMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </section>
          )}

          {/* Upcoming Matches */}
          {upcomingMatches.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Upcoming Matches ({upcomingMatches.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </section>
          )}

          {/* Finished Matches */}
          {finishedMatches.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Recent Results ({finishedMatches.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {finishedMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </section>
          )}

          {filteredMatches.length === 0 && (
            <div className="text-center py-16">
              <Trophy className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No matches scheduled for this date
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending News */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-5 w-5 text-orange-500" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Trending News
              </h3>
            </div>
            <div className="space-y-4">
              {mockTrendingNews.map((news, index) => (
                <div key={index} className="border-b dark:border-gray-700 pb-3 last:border-b-0 last:pb-0">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1 line-clamp-2">
                    {news.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {news.source} • {news.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Leagues */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Top Leagues
            </h3>
            <div className="space-y-3">
              {mockLeagues.slice(0, 5).map((league) => (
                <div key={league.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={league.logo} alt={league.name} className="w-6 h-6" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {league.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {league.country}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}