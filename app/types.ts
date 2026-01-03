export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Trip {
  id: string;
  userId: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  coverImage?: string;
  cities: City[];
  isPublic: boolean;
}

export interface City {
  id: string;
  tripId: string;
  name: string;
  country: string;
  startDate: string;
  endDate: string;
  activities: Activity[];
}

export interface Activity {
  id: string;
  cityId: string;
  name: string;
  category: string;
  description: string;
  cost: number;
  duration: number;
  date: string;
  time?: string;
}

export interface Budget {
  tripId: string;
  totalCost: number;
  dailyCosts: DailyCost[];
  categoryBreakdown: CategoryBreakdown[];
}

export interface DailyCost {
  date: string;
  amount: number;
}

export interface CategoryBreakdown {
  category: string;
  amount: number;
  percentage: number;
}
