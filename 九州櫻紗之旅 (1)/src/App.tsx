/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Plane, 
  Train, 
  Utensils, 
  ShoppingBag, 
  Camera, 
  Hotel, 
  ChevronRight, 
  ExternalLink,
  Info,
  Map as MapIcon,
  X
} from 'lucide-react';
import { TRIP_DATA } from './constants';
import { DaySchedule, ScheduleItem, Location } from './types';

const CategoryIcon = ({ category, className }: { category: Location['category'], className?: string }) => {
  switch (category) {
    case 'flight': return <Plane className={className} />;
    case 'transport': return <Train className={className} />;
    case 'food': return <Utensils className={className} />;
    case 'shopping': return <ShoppingBag className={className} />;
    case 'sightseeing': return <Camera className={className} />;
    case 'hotel': return <Hotel className={className} />;
    default: return <MapPin className={className} />;
  }
};

const MapModal = ({ location, onClose }: { location: Location, onClose: () => void }) => {
  const query = location.coordinates 
    ? location.coordinates.replace(/"/g, '')
    : `${location.name} ${location.address || ''}`;
  
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY || ''}&q=${encodeURIComponent(query)}`;
  
  // Fallback if no API key is provided (using standard search URL in iframe is restricted, so we use a link fallback or a simple embed)
  const fallbackUrl = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-gray-800">{location.name}</h3>
            <p className="text-xs text-gray-500">{location.address}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <div className="aspect-video w-full bg-gray-100">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={fallbackUrl}
            allowFullScreen
            title="Location Map"
          ></iframe>
        </div>
        <div className="p-4 bg-gray-50 flex justify-end">
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-pink-600 hover:text-pink-700"
          >
            在 Google Maps 中打開 <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const LocationCard: React.FC<{ location: Location, onOpenMap: (loc: Location) => void }> = ({ location, onOpenMap }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-md border border-pink-100/50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all mb-3 group"
    >
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 bg-pink-50 rounded-lg">
              <CategoryIcon category={location.category} className="w-4 h-4 text-pink-500" />
            </div>
            <h4 className="font-bold text-gray-800 text-sm">{location.name}</h4>
          </div>
          {location.address && (
            <p className="text-xs text-gray-500 mb-1 flex items-start gap-1">
              <MapPin className="w-3 h-3 mt-0.5 shrink-0" />
              {location.address}
            </p>
          )}
          {location.hours && (
            <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
              <Clock className="w-3 h-3 shrink-0" />
              {location.hours}
            </p>
          )}
          {location.note && (
            <p className="text-xs text-pink-600 font-medium italic mt-1 flex items-center gap-1">
              <Info className="w-3 h-3 shrink-0" />
              {location.note}
            </p>
          )}
        </div>
        {location.mapUrl ? (
          <a 
            href={location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-pink-500 text-white rounded-2xl shadow-lg shadow-pink-200 hover:bg-pink-600 hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center"
          >
            <MapIcon className="w-5 h-5" />
          </a>
        ) : (
          <button 
            onClick={() => onOpenMap(location)}
            className="p-3 bg-pink-500 text-white rounded-2xl shadow-lg shadow-pink-200 hover:bg-pink-600 hover:scale-105 active:scale-95 transition-all"
          >
            <MapIcon className="w-5 h-5" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

const TimelineItem: React.FC<{ item: ScheduleItem, index: number, onOpenMap: (loc: Location) => void }> = ({ item, index, onOpenMap }) => {
  return (
    <div className="relative pl-10 pb-10 last:pb-0">
      {/* Timeline Line */}
      <div className="absolute left-[15px] top-2 bottom-0 w-1 bg-gradient-to-b from-pink-300/50 to-pink-100/20 rounded-full" />
      
      {/* Timeline Dot */}
      <div className="absolute left-0 top-1 w-8 h-8 rounded-2xl bg-white border-2 border-pink-400 flex items-center justify-center z-10 shadow-md">
        <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-black text-white bg-pink-500 px-3 py-1 rounded-full shadow-sm">
            {item.time}
          </span>
          <h3 className="text-xl font-black text-gray-900 tracking-tight">{item.title}</h3>
        </div>
        
        {item.description && (
          <p className="text-sm text-gray-700 mb-4 leading-relaxed font-medium bg-white/40 p-3 rounded-xl border border-white/50">
            {item.description}
          </p>
        )}

        {item.locations && item.locations.length > 0 && (
          <div className="space-y-2">
            {item.locations.map((loc, i) => (
              <LocationCard key={i} location={loc} onOpenMap={onOpenMap} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft(null);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div className="bg-white/90 backdrop-blur-md border border-white/50 text-pink-600 px-6 py-4 rounded-3xl shadow-xl flex items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-pink-100 rounded-xl">
          <Clock className="w-5 h-5" />
        </div>
        <span className="font-black text-sm tracking-tight">距離出發還有</span>
      </div>
      <div className="flex gap-4 text-center">
        <div>
          <div className="text-2xl font-black leading-none">{timeLeft.days}</div>
          <div className="text-[10px] uppercase font-bold opacity-60 mt-1">天</div>
        </div>
        <div className="text-2xl font-black opacity-30">:</div>
        <div>
          <div className="text-2xl font-black leading-none">{timeLeft.hours}</div>
          <div className="text-[10px] uppercase font-bold opacity-60 mt-1">時</div>
        </div>
        <div className="text-2xl font-black opacity-30">:</div>
        <div>
          <div className="text-2xl font-black leading-none">{timeLeft.minutes}</div>
          <div className="text-[10px] uppercase font-bold opacity-60 mt-1">分</div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [activeMapLocation, setActiveMapLocation] = useState<Location | null>(null);
  const selectedDay = TRIP_DATA.days[selectedDayIndex];

  return (
    <div className="min-h-screen relative font-sans text-gray-900 pb-24 selection:bg-pink-200">
      {/* Main Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/background.jpg" 
          alt="Sakura Tunnel Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5F7]/80 via-[#FFF5F7]/50 to-[#FFF5F7]/90" />
      </div>

      {/* Hero Header */}
      <header className="relative h-[45vh] overflow-hidden flex items-end p-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="/background.jpg" 
            alt="Kyushu Sakura" 
            className="w-full h-full object-cover object-[center_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/10 to-black/30" />
          <div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay" />
        </div>
        
        <div className="relative z-10 w-full max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/20 backdrop-blur-md p-6 rounded-3xl border border-white/30 shadow-2xl"
          >
            <h1 className="text-4xl font-black text-white mb-2 tracking-tighter drop-shadow-lg">
              {TRIP_DATA.title}
            </h1>
            <div className="flex items-center gap-3 text-white/90 font-bold drop-shadow-md">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">30 Mar - 8 Apr 2026</span>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 -mt-12 relative z-20">
        <Countdown targetDate={TRIP_DATA.startDate} />

        {/* Day Selector */}
        <div className="flex overflow-x-auto gap-4 pb-8 no-scrollbar -mx-6 px-6">
          {TRIP_DATA.days.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDayIndex(idx)}
              className={`shrink-0 flex flex-col items-center justify-center w-20 h-24 rounded-[2rem] transition-all duration-500 ${
                selectedDayIndex === idx 
                  ? 'bg-pink-500 text-white shadow-2xl shadow-pink-300 scale-110 -translate-y-2' 
                  : 'bg-white/80 backdrop-blur-sm text-gray-500 hover:bg-white hover:scale-105'
              }`}
            >
              <span className="text-[10px] font-black uppercase tracking-widest mb-1">{day.weekday}</span>
              <span className="text-2xl font-black leading-none">{idx + 1}</span>
              <span className="text-[10px] font-bold opacity-60 mt-1">{day.date.split('-').slice(1).join('/')}</span>
            </button>
          ))}
        </div>

        {/* Day Header */}
        <div className="mb-10 flex items-center gap-4">
          <div className="w-1.5 h-10 bg-pink-500 rounded-full" />
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Day {selectedDayIndex + 1}
            </h2>
            <p className="text-pink-600 font-bold text-lg">{selectedDay.title}</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDayIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {selectedDay.items.length > 0 ? (
                selectedDay.items.map((item, idx) => (
                  <TimelineItem 
                    key={idx} 
                    item={item} 
                    index={idx} 
                    onOpenMap={setActiveMapLocation}
                  />
                ))
              ) : (
                <div className="py-24 text-center bg-white/40 backdrop-blur-sm rounded-[3rem] border border-white/50">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 text-pink-400 rounded-full mb-6">
                    <Calendar className="w-10 h-10" />
                  </div>
                  <p className="text-gray-500 font-black text-xl">行程規劃中，敬請期待！</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer Info */}
      <footer className="mt-32 px-8 py-16 bg-white/60 backdrop-blur-xl border-t border-pink-100 text-center">
        <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight">九州櫻紗之旅 2026</h3>
        <p className="text-xs text-gray-400 uppercase tracking-[0.3em] font-bold">View Only • Interactive Schedule</p>
        <div className="mt-8 flex justify-center gap-6">
          <div className="w-12 h-1 bg-pink-200 rounded-full" />
          <div className="w-12 h-1 bg-pink-500 rounded-full" />
          <div className="w-12 h-1 bg-pink-200 rounded-full" />
        </div>
      </footer>

      {/* Map Modal */}
      <AnimatePresence>
        {activeMapLocation && (
          <MapModal 
            location={activeMapLocation} 
            onClose={() => setActiveMapLocation(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
