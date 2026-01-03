import { Link } from 'react-router-dom';
import { Plus, MapPin, Calendar, DollarSign, ArrowLeft, Plane } from 'lucide-react';

const trips = [
  {
    id: '1',
    name: 'European Adventure',
    destination: 'Paris, Rome, Barcelona',
    startDate: '2026-02-15',
    endDate: '2026-03-01',
    budget: 3500,
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Tokyo Exploration',
    destination: 'Tokyo, Kyoto, Osaka',
    startDate: '2026-04-10',
    endDate: '2026-04-25',
    budget: 4200,
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'New York City Break',
    destination: 'New York',
    startDate: '2025-11-20',
    endDate: '2025-11-27',
    budget: 2800,
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Bali Retreat',
    destination: 'Bali, Indonesia',
    startDate: '2025-08-05',
    endDate: '2025-08-20',
    budget: 3200,
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop'
  }
];

export default function TripListPage() {
  const upcomingTrips = trips.filter(trip => trip.status === 'upcoming');
  const completedTrips = trips.filter(trip => trip.status === 'completed');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl text-gray-900">My Trips</h1>
              </div>
            </div>
            <Link 
              to="/trips/create"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              New Trip
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upcoming Trips */}
        <div className="mb-12">
          <h2 className="text-2xl text-gray-900 mb-6">Upcoming Trips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingTrips.map((trip) => (
              <Link
                key={trip.id}
                to={`/trips/${trip.id}/itinerary`}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img src={trip.image} alt={trip.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full mb-3">
                    Upcoming
                  </span>
                  <h3 className="text-xl text-gray-900 mb-2">{trip.name}</h3>
                  <p className="text-gray-600 mb-4 flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {trip.destination}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(trip.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {trip.budget.toLocaleString()}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Completed Trips */}
        <div>
          <h2 className="text-2xl text-gray-900 mb-6">Past Trips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedTrips.map((trip) => (
              <Link
                key={trip.id}
                to={`/trips/${trip.id}/itinerary`}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={trip.image} alt={trip.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full mb-3">
                    Completed
                  </span>
                  <h3 className="text-xl text-gray-900 mb-2">{trip.name}</h3>
                  <p className="text-gray-600 mb-4 flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {trip.destination}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(trip.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {trip.budget.toLocaleString()}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
