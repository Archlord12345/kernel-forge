import { useEffect, useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Video, MapPin, Clock, Info } from 'lucide-react';
import { getData, ScheduleEvent, Course } from '@/lib/data';

export default function StudentSchedule() {
  const [schedule, setSchedule] = useState<ScheduleEvent[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(null);

  useEffect(() => {
    setSchedule(getData<ScheduleEvent>('schedule'));
    setCourses(getData<Course>('courses'));
  }, []);

  const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'];
  const hours = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'];

  // A very simplified timeline grid for visual representation
  const renderScheduleGrid = () => {
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row">
        
        {/* Main Grid */}
        <div className="flex-1 overflow-x-auto">
          <div className="min-w-[600px]">
            {/* Header row */}
            <div className="grid grid-cols-6 border-b border-slate-200 bg-slate-50">
              <div className="py-3 px-4 text-center font-medium text-slate-500 text-sm border-r border-slate-200">Heure</div>
              {days.map(day => (
                <div key={day} className="py-3 px-4 text-center font-semibold text-slate-700 border-r border-slate-200 last:border-0">
                  {day} <span className="text-slate-400 font-normal ml-1">Mai</span>
                </div>
              ))}
            </div>

            {/* Time rows */}
            <div className="relative">
              {hours.map((hour, i) => (
                <div key={hour} className="grid grid-cols-6 border-b border-slate-100 last:border-0 h-24">
                  <div className="py-2 px-4 text-center text-xs font-mono text-slate-400 border-r border-slate-200 bg-slate-50/50">
                    {hour}
                  </div>
                  {days.map(day => (
                    <div key={`${day}-${hour}`} className="border-r border-slate-100 last:border-0 p-1 relative">
                      {/* Look for events that start roughly in this block. 
                          For a real app we'd calculate absolute positioning based on minutes. */}
                      {schedule
                        .filter(s => s.day === day && s.start >= hour && s.start < (hours[i+1] || '20:00'))
                        .map(event => {
                          const course = courses.find(c => c.id === event.courseId);
                          return (
                            <div 
                              key={event.id}
                              onClick={() => setSelectedEvent(event)}
                              className={`absolute inset-x-1 top-2 bottom-2 rounded-md p-2 border cursor-pointer hover:shadow-md transition-all overflow-hidden flex flex-col ${selectedEvent?.id === event.id ? 'ring-2 ring-blue-600' : ''}`}
                              style={{ 
                                backgroundColor: event.color, 
                                borderColor: `${event.color}40` // darker border
                              }}
                            >
                              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-800 mb-0.5">{event.type}</div>
                              <div className="font-semibold text-xs leading-tight text-slate-900 line-clamp-2">{course?.title}</div>
                              <div className="mt-auto text-[10px] text-slate-600 font-medium flex items-center gap-1">
                                <MapPin className="w-2.5 h-2.5" /> {event.room}
                              </div>
                            </div>
                          );
                      })}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Side Panel (Details) */}
        <div className="w-full md:w-80 bg-slate-50 border-t md:border-t-0 md:border-l border-slate-200 p-6 flex flex-col">
          {selectedEvent ? (
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-blue-100 text-blue-800">
                    {selectedEvent.type}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Informatique L2</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {courses.find(c => c.id === selectedEvent.courseId)?.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {courses.find(c => c.id === selectedEvent.courseId)?.teacher}
                </p>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-4 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-900">{selectedEvent.day}. 14 Mai 2024</div>
                    <div className="text-sm text-slate-500">{selectedEvent.start} - {selectedEvent.end} (1h30)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-slate-900">Salle {selectedEvent.room}</div>
                    <div className="text-sm text-slate-500">Bâtiment Sciences</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg transition-colors text-sm shadow-sm">
                  Voir la page du cours
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center text-slate-400">
              <Info className="w-12 h-12 mb-4 text-slate-300" />
              <p className="text-sm">Sélectionnez un cours dans l'emploi du temps pour voir les détails.</p>
            </div>
          )}
        </div>

      </div>
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Emploi du temps</h1>
          <p className="text-slate-500 mt-1 text-sm">Semaine du 13 au 19 Mai 2024</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-slate-200 rounded-lg bg-white shadow-sm overflow-hidden">
            <button className="p-2 text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="px-4 text-sm font-medium text-slate-700 border-x border-slate-200">Aujourd'hui</span>
            <button className="p-2 text-slate-600 hover:bg-slate-50 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 min-h-[500px]">
        {renderScheduleGrid()}
      </div>
    </div>
  );
}
