import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Trip, Activity } from '../types';

interface AppContextType {
  user: User | null;
  trips: Trip[];
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string, name: string) => boolean;
  logout: () => void;
  createTrip: (trip: Omit<Trip, 'id' | 'userId' | 'cities'>) => void;
  updateTrip: (tripId: string, updates: Partial<Trip>) => void;
  deleteTrip: (tripId: string) => void;
  addActivity: (tripId: string, cityId: string, activity: Omit<Activity, 'id' | 'cityId'>) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    // Load user and trips from localStorage
    const storedUser = localStorage.getItem('user');
    const storedTrips = localStorage.getItem('trips');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    if (storedTrips) {
      setTrips(JSON.parse(storedTrips));
    } else {
      // Initialize with mock data
      const mockTrips: Trip[] = [
        {
          id: '1',
          userId: 'demo-user',
          name: 'European Adventure',
          description: 'Exploring the best of Europe',
          startDate: '2026-06-01',
          endDate: '2026-06-15',
          cities: [
            {
              id: 'c1',
              tripId: '1',
              name: 'Paris',
              country: 'France',
              startDate: '2026-06-01',
              endDate: '2026-06-05',
              activities: [
                {
                  id: 'a1',
                  cityId: 'c1',
                  name: 'Visit Eiffel Tower',
                  category: 'Sightseeing',
                  description: 'Iconic landmark',
                  cost: 25,
                  duration: 3,
                  date: '2026-06-02',
                  time: '10:00'
                }
              ]
            }
          ],
          isPublic: false
        }
      ];
      setTrips(mockTrips);
      localStorage.setItem('trips', JSON.stringify(mockTrips));
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    // Mock login
    const newUser: User = {
      id: 'demo-user',
      email,
      name: email.split('@')[0]
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  };

  const signup = (email: string, password: string, name: string): boolean => {
    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      name
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const createTrip = (tripData: Omit<Trip, 'id' | 'userId' | 'cities'>) => {
    if (!user) return;
    
    const newTrip: Trip = {
      ...tripData,
      id: `trip-${Date.now()}`,
      userId: user.id,
      cities: [],
      isPublic: false
    };
    
    const updatedTrips = [...trips, newTrip];
    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
  };

  const updateTrip = (tripId: string, updates: Partial<Trip>) => {
    const updatedTrips = trips.map(trip =>
      trip.id === tripId ? { ...trip, ...updates } : trip
    );
    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
  };

  const deleteTrip = (tripId: string) => {
    const updatedTrips = trips.filter(trip => trip.id !== tripId);
    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
  };

  const addActivity = (tripId: string, cityId: string, activityData: Omit<Activity, 'id' | 'cityId'>) => {
    const newActivity: Activity = {
      ...activityData,
      id: `activity-${Date.now()}`,
      cityId
    };

    const updatedTrips = trips.map(trip => {
      if (trip.id === tripId) {
        return {
          ...trip,
          cities: trip.cities.map(city => {
            if (city.id === cityId) {
              return {
                ...city,
                activities: [...city.activities, newActivity]
              };
            }
            return city;
          })
        };
      }
      return trip;
    });

    setTrips(updatedTrips);
    localStorage.setItem('trips', JSON.stringify(updatedTrips));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        trips,
        login,
        signup,
        logout,
        createTrip,
        updateTrip,
        deleteTrip,
        addActivity
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
