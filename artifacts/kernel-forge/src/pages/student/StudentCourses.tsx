import { useEffect, useState } from 'react';
import { Search, Filter, BookOpen, Clock, BarChart, ChevronRight } from 'lucide-react';
import { getData, Course } from '@/lib/data';

export default function StudentCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setCourses(getData<Course>('courses'));
  }, []);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Mes Cours</h1>
          <p className="text-slate-500 mt-1 text-sm">Consultez et suivez l'avancement de vos Unités d'Enseignement.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher un cours..." 
              className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 w-full sm:w-64"
            />
          </div>
          <button className="flex items-center gap-2 border border-slate-200 bg-white text-slate-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filtrer
          </button>
        </div>
      </div>

      <div className="flex gap-2 border-b border-slate-200 mb-6 overflow-x-auto pb-1 scrollbar-hide">
        {['all', 'in_progress', 'upcoming', 'completed'].map((f) => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-t-lg border-b-2 transition-colors ${
              filter === f 
              ? 'border-blue-600 text-blue-600' 
              : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            {f === 'all' ? 'Tous les cours' : f === 'in_progress' ? 'En cours' : f === 'upcoming' ? 'À venir' : 'Terminés'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
            <div className="h-24 relative overflow-hidden" style={{ backgroundColor: course.color }}>
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="absolute bottom-3 left-4 text-white text-xs font-bold uppercase tracking-wider bg-black/20 px-2 py-1 rounded backdrop-blur-sm">
                UE • Semestre {course.semester}
              </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1 group-hover:text-blue-700 transition-colors">
                {course.title}
              </h3>
              <p className="text-sm text-slate-500 mb-4">{course.subtitle || 'Cours Magistral et TD'}</p>
              
              <div className="space-y-3 mt-auto mb-6">
                <div className="flex items-center text-sm text-slate-600">
                  <BookOpen className="w-4 h-4 mr-2 text-slate-400" />
                  {course.teacher}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs font-medium text-slate-500">Progression</div>
                  <div className="text-xs font-bold text-slate-700">{course.progress}%</div>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <button className="w-full bg-slate-50 hover:bg-blue-50 text-blue-700 font-medium py-2.5 rounded-lg border border-slate-200 hover:border-blue-200 transition-all text-sm flex items-center justify-center gap-2">
                Accéder au cours <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
