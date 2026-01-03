import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin, Clock } from 'lucide-react';

const events = [
  { date: '2026-02-15', city: 'Paris', events: [{ time: '09:00', name: 'Visit Eiffel Tower' }, { time: '14:00', name: 'Louvre Museum' }] },
  { date: '2026-02-16', city: 'Paris', events: [{ time: '10:00', name: 'Notre Dame' }, { time: '19:00', name: 'Seine River Cruise' }] },
  { date: '2026-02-17', city: 'Paris', events: [{ time: '11:00', name: 'Arc de Triomphe' }] },
  { date: '2026-02-18', city: 'Paris', events: [{ time: '10:00', name: 'Versailles Palace' }] },
  { date: '2026-02-19', city: 'Paris', events: [{ time: '09:00', name: 'Montmartre Walk' }] },
  { date: '2026-02-20', city: 'Paris', events: [{ time: '15:00', name: 'Shopping Champs-Élysées' }] },
  { date: '2026-02-21', city: 'Rome', events: [{ time: '10:00', name: 'Colosseum Tour' }] },
  { date: '2026-02-22', city: 'Rome', events: [{ time: '09:00', name: 'Roman Forum' }, { time: '14:00', name: 'Vatican Museums' }] },
  { date: '2026-02-23', city: 'Rome', events: [{ time: '10:00', name: 'Sistine Chapel' }] },
  { date: '2026-02-24', city: 'Rome', events: [{ time: '11:00', name: 'Trevi Fountain' }, { time: '18:00', name: 'Trastevere District' }] },
  { date: '2026-02-25', city: 'Rome', events: [{ time: '09:00', name: 'Spanish Steps' }] },
  { date: '2026-02-26', city: 'Rome', events: [{ time: '10:00', name: 'Pantheon' }] }
];

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function CalendarViewPage() {
  const { tripId } = useParams();
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1)); // February 2026

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getEventsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.find(e => e.date === dateStr);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link to={`/trips/${tripId}/itinerary`} className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-2xl text-gray-900">Calendar View</h1>
              <p className="text-sm text-gray-600">European Adventure</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-gray-900">
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={previousMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {daysOfWeek.map(day => (
              <div key={day} className="text-center py-2 text-sm text-gray-600">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Empty cells for days before month starts */}
            {Array.from({ length: startingDayOfWeek }).map((_, index) => (
              <div key={`empty-${index}`} className="aspect-square" />
            ))}

            {/* Days of month */}
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const dayEvents = getEventsForDate(day);
              const hasEvents = dayEvents && dayEvents.events.length > 0;

              return (
                <div
                  key={day}
                  className={`aspect-square border rounded-lg p-2 ${
                    hasEvents ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
                  }`}
                >
                  <div className="text-sm text-gray-900 mb-1">{day}</div>
                  {hasEvents && (
                    <div className="space-y-1">
                      <div className="text-xs text-blue-600 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {dayEvents.city}
                      </div>
                      {dayEvents.events.slice(0, 2).map((event, idx) => (
                        <div key={idx} className="text-xs text-gray-600 truncate">
                          {event.time} {event.name}
                        </div>
                      ))}
                      {dayEvents.events.length > 2 && (
                        <div className="text-xs text-blue-600">
                          +{dayEvents.events.length - 2} more
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline View */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl text-gray-900 mb-6">Timeline View</h3>
          <div className="space-y-6">
            {events.map((dayEvent, index) => (
              <div key={index} className="flex">
                <div className="w-32 flex-shrink-0">
                  <p className="text-sm text-gray-600">
                    {new Date(dayEvent.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      weekday: 'short'
                    })}
                  </p>
                </div>
                <div className="flex-1 border-l-2 border-blue-500 pl-6 pb-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-blue-600">{dayEvent.city}</span>
                  </div>
                  <div className="space-y-3">
                    {dayEvent.events.map((event, eventIdx) => (
                      <div key={eventIdx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{event.time}</span>
                        <span className="text-sm text-gray-900">{event.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
