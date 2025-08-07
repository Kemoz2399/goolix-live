import React from 'react';
import { Target, AlertCircle, RefreshCw, Clock } from 'lucide-react';
import { MatchEvent } from '../types';

interface EventTimelineProps {
  events: MatchEvent[];
}

export default function EventTimeline({ events }: EventTimelineProps) {
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'goal':
        return <Target className="h-5 w-5 text-green-600" />;
      case 'yellow-card':
        return <div className="w-4 h-6 bg-yellow-500 rounded-sm" />;
      case 'red-card':
        return <div className="w-4 h-6 bg-red-500 rounded-sm" />;
      case 'substitution':
        return <RefreshCw className="h-5 w-5 text-blue-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  if (events.length === 0) {
    return (
      <div className="text-center py-8">
        <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500 dark:text-gray-400">No events to display</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Match Events</h3>
      
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
        
        {events.map((event, index) => (
          <div key={index} className="relative flex items-start space-x-4 pb-6">
            <div className="flex-shrink-0 w-16 text-right">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {event.minute}'
              </span>
            </div>
            
            <div className="flex-shrink-0 relative z-10 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full p-2">
              {getEventIcon(event.type)}
            </div>
            
            <div className="flex-grow min-w-0">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {event.player}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  ({event.team})
                </span>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {event.description}
              </p>
              
              {event.assistedBy && (
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Assisted by: {event.assistedBy}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}