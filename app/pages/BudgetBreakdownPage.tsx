import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const budgetData = {
  total: 3500,
  spent: 2340,
  remaining: 1160,
  categories: [
    { name: 'Accommodation', value: 1200, color: '#3b82f6' },
    { name: 'Activities', value: 580, color: '#10b981' },
    { name: 'Food & Drink', value: 450, color: '#f59e0b' },
    { name: 'Transportation', value: 110, color: '#ef4444' }
  ],
  dailyCosts: [
    { day: 'Feb 15', cost: 245 },
    { day: 'Feb 16', cost: 180 },
    { day: 'Feb 17', cost: 320 },
    { day: 'Feb 18', cost: 195 },
    { day: 'Feb 19', cost: 280 },
    { day: 'Feb 20', cost: 265 }
  ],
  breakdown: [
    { category: 'Accommodation', planned: 1500, spent: 1200 },
    { category: 'Activities', planned: 800, spent: 580 },
    { category: 'Food & Drink', planned: 700, spent: 450 },
    { category: 'Transportation', planned: 500, spent: 110 }
  ]
};

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export default function BudgetBreakdownPage() {
  const { tripId } = useParams();
  const percentSpent = (budgetData.spent / budgetData.total) * 100;

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
              <h1 className="text-2xl text-gray-900">Budget Breakdown</h1>
              <p className="text-sm text-gray-600">European Adventure</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Budget Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Budget</p>
              <DollarSign className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-2">${budgetData.total.toLocaleString()}</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${percentSpent}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Spent</p>
              <TrendingDown className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-2">${budgetData.spent.toLocaleString()}</p>
            <p className="text-sm text-gray-600">{percentSpent.toFixed(1)}% of budget</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Remaining</p>
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-3xl text-gray-900 mb-2">${budgetData.remaining.toLocaleString()}</p>
            <p className="text-sm text-gray-600">{(100 - percentSpent).toFixed(1)}% available</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Pie Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg text-gray-900 mb-6">Spending by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={budgetData.categories}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {budgetData.categories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg text-gray-900 mb-6">Daily Spending</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={budgetData.dailyCosts}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="cost" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Budget vs Actual Bar Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h3 className="text-lg text-gray-900 mb-6">Planned vs Spent</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={budgetData.breakdown}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="planned" fill="#3b82f6" name="Planned" />
              <Bar dataKey="spent" fill="#10b981" name="Spent" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg text-gray-900 mb-6">Category Breakdown</h3>
          <div className="space-y-4">
            {budgetData.categories.map((category, index) => (
              <div key={category.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-4 flex-1">
                  <div
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: category.color }}
                  />
                  <div className="flex-1">
                    <p className="text-gray-900">{category.name}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${(category.value / budgetData.spent) * 100}%`,
                          backgroundColor: category.color
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="text-lg text-gray-900">${category.value}</p>
                  <p className="text-sm text-gray-600">
                    {((category.value / budgetData.spent) * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
