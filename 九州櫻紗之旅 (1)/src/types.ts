export interface Location {
  name: string;
  address?: string;
  coordinates?: string;
  hours?: string;
  note?: string;
  mapUrl?: string;
  category: 'food' | 'sightseeing' | 'shopping' | 'transport' | 'hotel' | 'flight';
}

export interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
  locations?: Location[];
  transport?: string;
}

export interface DaySchedule {
  date: string;
  weekday: string;
  title: string;
  items: ScheduleItem[];
}

export interface TripData {
  title: string;
  startDate: string;
  endDate: string;
  days: DaySchedule[];
}
