import { useParams } from 'react-router-dom';
import { MapPin, Calendar, Clock, DollarSign, User, Plane } from 'lucide-react';

const publicItinerary = {
  tripName: 'European Adventure',
  author: 'Sarah Johnson',
  duration: '14 days',
  budget: '$3,500',
  description: 'An amazing journey through the most beautiful cities in Europe, experiencing culture, history, and amazing food!',
  coverImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&auto=format&fit=crop',
  cities: [
    {
      id: '1',
      name: 'Paris',
      country: 'France',
      days: '6 days',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise', 'Montmartre'],
      activities: [
        { name: 'Visit Eiffel Tower', time: 'Morning', cost: '$26' },
        { name: 'Louvre Museum', time: 'Afternoon', cost: '$17' },
        { name: 'Seine River Cruise', time: 'Evening', cost: '$15' }
      ]
    },
    {
      id: '2',
      name: 'Rome',
      country: 'Italy',
      days: '6 days',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop',
      highlights: ['Colosseum', 'Vatican Museums', 'Trevi Fountain', 'Roman Forum'],
      activities: [
        { name: 'Colosseum Tour', time: 'Morning', cost: '$24' },
        { name: 'Vatican Museums', time: 'Afternoon', cost: '$17' },
        { name: 'Trevi Fountain Walk', time: 'Evening', cost: 'Free' }
      ]
    },
    {
      id: '3',
      name: 'Barcelona',
      country: 'Spain',
      days: '2 days',
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&auto=format&fit=crop',
      highlights: ['Sagrada Familia', 'Park Güell', 'Las Ramblas', 'Gothic Quarter'],
      activities: [
        { name: 'Sagrada Familia', time: 'Morning', cost: '$26' },
        { name: 'Park Güell', time: 'Afternoon', cost: '$13' },
        { name: 'Las Ramblas Walk', time: 'Evening', cost: 'Free' }
      ]
    }
  ]
};

export default function PublicItineraryPage() {
  const { tripId } = useParams();

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
            <a
              href="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Your Own
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={publicItinerary.coverImage}
          alt={publicItinerary.tripName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl text-white mb-4">{publicItinerary.tripName}</h1>
            <div className="flex items-center space-x-6 text-white">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>By {publicItinerary.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{publicItinerary.duration}</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>{publicItinerary.budget}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Description */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-2xl text-gray-900 mb-4">About This Trip</h2>
          <p className="text-gray-600 leading-relaxed">{publicItinerary.description}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <p className="text-3xl text-blue-600 mb-2">{publicItinerary.cities.length}</p>
            <p className="text-sm text-gray-600">Cities</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <p className="text-3xl text-blue-600 mb-2">{publicItinerary.duration}</p>
            <p className="text-sm text-gray-600">Duration</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <p className="text-3xl text-blue-600 mb-2">
              {publicItinerary.cities.reduce((sum, city) => sum + city.activities.length, 0)}
            </p>
            <p className="text-sm text-gray-600">Activities</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <p className="text-3xl text-blue-600 mb-2">{publicItinerary.budget}</p>
            <p className="text-sm text-gray-600">Est. Budget</p>
          </div>
        </div>

        {/* Cities & Itinerary */}
        <div className="space-y-8">
          {publicItinerary.cities.map((city, index) => (
            <div key={city.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* City Image */}
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img src={city.image} alt={city.name} className="w-full h-full object-cover" />
                </div>

                {/* City Details */}
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-3xl text-gray-900 mb-2">
                        {index + 1}. {city.name}
                      </h3>
                      <p className="text-gray-600 flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {city.country} • {city.days}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg text-gray-900 mb-3">Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {city.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Activities */}
                  <div>
                    <h4 className="text-lg text-gray-900 mb-3">Activities</h4>
                    <div className="space-y-3">
                      {city.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                              {idx + 1}
                            </div>
                            <span className="text-gray-900">{activity.name}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {activity.time}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="w-4 h-4 mr-1" />
                              {activity.cost}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl mb-4">Inspired by this itinerary?</h2>
          <p className="text-blue-100 mb-6">
            Create your own personalized travel plan with GlobeTrotter
          </p>
          <a
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Start Planning Your Trip
          </a>
        </div>
      </div>
    </div>
  );
}
