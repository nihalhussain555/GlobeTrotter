import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, MapPin, Calendar, DollarSign, Clock, Trash2, Share2, Plane } from 'lucide-react';

const mockItinerary = {
  tripName: 'European Adventure',
  cities: [
    {
      id: '1',
      name: 'Paris',
      country: 'France',
      startDate: '2026-02-15',
      endDate: '2026-02-20',
      activities: [
        { id: '1', name: 'Visit Eiffel Tower', time: '09:00', duration: '3 hours', cost: 26 },
        { id: '2', name: 'Louvre Museum', time: '14:00', duration: '4 hours', cost: 17 },
        { id: '3', name: 'Seine River Cruise', time: '19:00', duration: '2 hours', cost: 15 }
      ]
    },
    {
      id: '2',
      name: 'Rome',
      country: 'Italy',
      startDate: '2026-02-21',
      endDate: '2026-02-26',
      activities: [
        { id: '4', name: 'Colosseum Tour', time: '10:00', duration: '2 hours', cost: 24 },
        { id: '5', name: 'Vatican Museums', time: '14:00', duration: '3 hours', cost: 17 },
        { id: '6', name: 'Trevi Fountain', time: '18:00', duration: '1 hour', cost: 0 }
      ]
    }
  ]
};

export default function ItineraryBuilderPage() {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const [itinerary] = useState(mockItinerary);

  const totalCost = itinerary.cities.reduce((sum, city) => 
    sum + city.activities.reduce((citySum, activity) => citySum + activity.cost, 0), 0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/trips" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div>
                <h1 className="text-2xl text-gray-900">{itinerary.tripName}</h1>
                <p className="text-sm text-gray-600">Itinerary Builder</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                to={`/trips/${tripId}/budget`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Budget
              </Link>
              <Link
                to={`/trips/${tripId}/calendar`}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Calendar
              </Link>
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Total Cities</p>
            <p className="text-3xl text-gray-900">{itinerary.cities.length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Total Activities</p>
            <p className="text-3xl text-gray-900">
              {itinerary.cities.reduce((sum, city) => sum + city.activities.length, 0)}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Estimated Cost</p>
            <p className="text-3xl text-gray-900">${totalCost}</p>
          </div>
        </div>

        {/* Add City Button */}
        <div className="mb-8">
          <Link
            to={`/trips/${tripId}/cities`}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add City
          </Link>
        </div>

        {/* Cities & Activities */}
        <div className="space-y-6">
          {itinerary.cities.map((city) => (
            <div key={city.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* City Header */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl mb-2">{city.name}, {city.country}</h3>
                    <div className="flex items-center text-blue-100">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(city.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(city.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                  <Link
                    to={`/trips/${tripId}/activities`}
                    className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <Plus className="w-5 h-5 inline mr-2" />
                    Add Activity
                  </Link>
                </div>
              </div>

              {/* Activities List */}
              <div className="p-6">
                <div className="space-y-4">
                  {city.activities.map((activity) => (
                    <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <h4 className="text-lg text-gray-900 mb-2">{activity.name}</h4>
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {activity.time}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {activity.duration}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {activity.cost === 0 ? 'Free' : `$${activity.cost}`}
                          </div>
                        </div>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
