import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Search, Clock, DollarSign, Plus, Check } from 'lucide-react';

const categories = ['All', 'Museums', 'Food & Drink', 'Outdoor', 'Entertainment', 'Shopping'];

const activities = [
  { id: '1', name: 'Eiffel Tower Visit', category: 'Entertainment', duration: '3 hours', cost: 26, rating: 4.8, reviews: 12543, image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=300&auto=format&fit=crop' },
  { id: '2', name: 'Louvre Museum', category: 'Museums', duration: '4 hours', cost: 17, rating: 4.9, reviews: 8932, image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=300&auto=format&fit=crop' },
  { id: '3', name: 'Seine River Cruise', category: 'Outdoor', duration: '2 hours', cost: 15, rating: 4.7, reviews: 5421, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&auto=format&fit=crop' },
  { id: '4', name: 'French Cooking Class', category: 'Food & Drink', duration: '3 hours', cost: 85, rating: 4.9, reviews: 2134, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&auto=format&fit=crop' },
  { id: '5', name: 'Arc de Triomphe', category: 'Entertainment', duration: '1.5 hours', cost: 13, rating: 4.6, reviews: 6732, image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?w=300&auto=format&fit=crop' },
  { id: '6', name: 'Montmartre Walking Tour', category: 'Outdoor', duration: '2.5 hours', cost: 25, rating: 4.8, reviews: 4231, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&auto=format&fit=crop' }
];

export default function ActivitySelectionPage() {
  const { tripId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || activity.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleActivity = (activityId: string) => {
    setSelectedActivities(prev =>
      prev.includes(activityId) ? prev.filter(id => id !== activityId) : [...prev, activityId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to={`/trips/${tripId}/itinerary`} className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <h1 className="text-2xl text-gray-900">Add Activities</h1>
            </div>
            <button
              disabled={selectedActivities.length === 0}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Add {selectedActivities.length > 0 && `(${selectedActivities.length})`}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search activities..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center space-x-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className={`bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all ${
                selectedActivities.includes(activity.id) ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'
              }`}
              onClick={() => toggleActivity(activity.id)}
            >
              <div className="h-48 overflow-hidden relative">
                <img src={activity.image} alt={activity.name} className="w-full h-full object-cover" />
                {selectedActivities.includes(activity.id) && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white text-xs text-gray-900 rounded-full">
                    {activity.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg text-gray-900 mb-2">{activity.name}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {activity.duration}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {activity.cost}
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-gray-900">{activity.rating}</span>
                  <span className="ml-1 text-gray-500">({activity.reviews.toLocaleString()} reviews)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
