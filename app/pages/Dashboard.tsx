import { Link } from 'react-router-dom';
import { Plus, MapPin, Calendar, DollarSign, TrendingUp, Plane, LogOut } from 'lucide-react';

const upcomingTrips = [
  {
    id: '1',
    name: 'European Adventure',
    destination: 'Paris, Rome, Barcelona',
    startDate: '2026-02-15',
    endDate: '2026-03-01',
    budget: 3500,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Tokyo Exploration',
    destination: 'Tokyo, Kyoto, Osaka',
    startDate: '2026-04-10',
    endDate: '2026-04-25',
    budget: 4200,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop'
  }
];

const popularDestinations = [
  { name: 'Bali', country: 'Indonesia', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop', trips: 2345 },
  { name: 'Santorini', country: 'Greece', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&auto=format&fit=crop', trips: 1876 },
  { name: 'Iceland', country: 'Iceland', image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&auto=format&fit=crop', trips: 1543 },
  { name: 'New York', country: 'USA', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&auto=format&fit=crop', trips: 3421 }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl text-gray-900">GlobeTrotter</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <Link to="/dashboard" className="text-blue-600">Dashboard</Link>
              <Link to="/trips" className="text-gray-600 hover:text-gray-900">My Trips</Link>
              <button className="text-gray-600 hover:text-gray-900">
                <LogOut className="w-5 h-5" />
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl text-gray-900 mb-2">Welcome back, Traveler!</h2>
          <p className="text-gray-600">Plan your next adventure or continue planning your existing trips</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm">Total Trips</p>
            <p className="text-3xl text-gray-900 mt-1">12</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm">Upcoming</p>
            <p className="text-3xl text-gray-900 mt-1">2</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm">Total Budget</p>
            <p className="text-3xl text-gray-900 mt-1">$7.7k</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm">Cities Visited</p>
            <p className="text-3xl text-gray-900 mt-1">34</p>
          </div>
        </div>

        {/* Upcoming Trips Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl text-gray-900">Upcoming Trips</h3>
            <Link 
              to="/trips/create"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Plan New Trip
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <h4 className="text-xl text-gray-900 mb-2">{trip.name}</h4>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {trip.destination}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(trip.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(trip.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
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

        {/* Popular Destinations */}
        <div>
          <h3 className="text-2xl text-gray-900 mb-6">Popular Destinations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((dest) => (
              <div key={dest.name} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-40 overflow-hidden">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="text-lg text-gray-900 mb-1">{dest.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{dest.country}</p>
                  <p className="text-xs text-gray-500">{dest.trips.toLocaleString()} trips planned</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
