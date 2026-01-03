import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import CreateTripPage from './pages/CreateTripPage';
import TripListPage from './pages/TripListPage';
import ItineraryBuilderPage from './pages/ItineraryBuilderPage';
import CitySearchPage from './pages/CitySearchPage';
import ActivitySelectionPage from './pages/ActivitySelectionPage';
import BudgetBreakdownPage from './pages/BudgetBreakdownPage';
import CalendarViewPage from './pages/CalendarViewPage';
import PublicItineraryPage from './pages/PublicItineraryPage';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/signup" element={<SignupPage onSignup={() => setIsAuthenticated(true)} />} />
        <Route path="/public/:tripId" element={<PublicItineraryPage />} />
        
        {/* Protected Routes */}
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/trips" element={isAuthenticated ? <TripListPage /> : <Navigate to="/login" />} />
        <Route path="/trips/create" element={isAuthenticated ? <CreateTripPage /> : <Navigate to="/login" />} />
        <Route path="/trips/:tripId/itinerary" element={isAuthenticated ? <ItineraryBuilderPage /> : <Navigate to="/login" />} />
        <Route path="/trips/:tripId/cities" element={isAuthenticated ? <CitySearchPage /> : <Navigate to="/login" />} />
        <Route path="/trips/:tripId/activities" element={isAuthenticated ? <ActivitySelectionPage /> : <Navigate to="/login" />} />
        <Route path="/trips/:tripId/budget" element={isAuthenticated ? <BudgetBreakdownPage /> : <Navigate to="/login" />} />
        <Route path="/trips/:tripId/calendar" element={isAuthenticated ? <CalendarViewPage /> : <Navigate to="/login" />} />
        
        <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}
