import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Plus, Calendar, MapPin, TrendingUp, LogOut } from 'lucide-react';
import { format } from 'date-fns';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const popularDestinations = [
  {
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbHxlbnwxfHx8fDE3NjczNzEwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'The City of Light'
  },
  {
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1593839154339-377e24b3ba32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGNpdHl8ZW58MXx8fHwxNjczNjE0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Modern meets Traditional'
  },
  {
    name: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1570304816841-906a17d7b067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwc2t5bGluZXxlbnwxfHx8fDE3NjczNzM2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'The Big Apple'
  }
];

export function Dashboard() {
  const { user, trips, logout } = useApp();
  const navigate = useNavigate();

  const upcomingTrips = trips
    .filter(trip => new Date(trip.startDate) >= new Date())
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MapPin className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl text-blue-600">GlobeTrotter</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-700">Hi, {user?.name}!</span>
            <button
              onClick={() => {
                logout();
                navigate('/');
              }}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl mb-2">Welcome back, {user?.name}!</h2>
          <p className="text-gray-600">Ready to plan your next adventure?</p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => navigate('/trips/new')}
          className="mb-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Plan New Trip
        </button>

        {/* Upcoming Trips */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-6 h-6 text-gray-700" />
            <h3 className="text-2xl">Upcoming Trips</h3>
          </div>
          
          {upcomingTrips.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
              <p>No upcoming trips yet. Start planning your next adventure!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingTrips.map(trip => (
                <div
                  key={trip.id}
                  onClick={() => navigate(`/trips/${trip.id}`)}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
                >
                  {trip.coverImage && (
                    <ImageWithFallback
                      src={trip.coverImage}
                      alt={trip.name}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h4 className="text-xl mb-2">{trip.name}</h4>
                    <p className="text-gray-600 text-sm mb-4">{trip.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {format(new Date(trip.startDate), 'MMM dd')} - {format(new Date(trip.endDate), 'MMM dd, yyyy')}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      {trip.cities.length} {trip.cities.length === 1 ? 'city' : 'cities'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* All Trips Link */}
        <div className="mb-12">
          <button
            onClick={() => navigate('/trips')}
            className="text-blue-600 hover:underline"
          >
            View all trips →
          </button>
        </div>

        {/* Popular Destinations */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-gray-700" />
            <h3 className="text-2xl">Popular Destinations</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((dest, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden h-64">
                  <ImageWithFallback
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h4 className="text-2xl mb-1">{dest.name}</h4>
                    <p className="text-sm opacity-90">{dest.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
