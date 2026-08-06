import { useEffect, useState } from 'react';
import { Search, BookOpen, ChevronRight } from 'lucide-react';
import { getData, Course } from '@/lib/data';

export default function StudentCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    setCourses(getData<Course>('courses'));
  }, []);

  const filtered = courses.filter(c =>
    filter === 'all' || filter === 'in_progress'
      ? true
      : filter === 'completed' ? c.progress >= 80 : c.progress < 80
  ).filter(c => c.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Mes Cours</h1>
          <p className="text-slate-500 mt-1 text-sm">Consultez et suivez l'avancement de vos Unités d'Enseignement.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Rechercher un cours..."
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 w-full sm:w-64 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1 border-b border-slate-200">
        {[
          { key: 'all', label: 'Tous les cours' },
          { key: 'in_progress', label: 'En cours' },
          { key: 'upcoming', label: 'À venir' },
          { key: 'completed', label: 'Terminés' },
        ].map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              filter === f.key
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((course) => (
          <div key={course.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col">
            <div className="h-28 relative overflow-hidden" style={{ backgroundColor: course.color }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-black/20"></div>
              <div className="absolute bottom-3 left-4 text-white text-xs font-bold uppercase tracking-wider bg-black/20 px-2 py-1 rounded backdrop-blur-sm">
                UE • Semestre {course.semester}
              </div>
              <BookOpen className="absolute top-4 right-4 w-8 h-8 text-white/30" />
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1 group-hover:text-blue-700 transition-colors">
                {course.title}
              </h3>
              <p className="text-sm text-slate-500 mb-4">{course.subtitle || 'Cours Magistral et TD'}</p>

              <div className="space-y-3 mt-auto mb-5">
                <div className="flex items-center text-sm text-slate-600">
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center mr-2.5 shrink-0">
                    <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                  {course.teacher}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="text-xs font-medium text-slate-500">Progression</div>
                    <div className="text-xs font-bold text-slate-700">{course.progress}%</div>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                    ></div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-slate-50 hover:bg-blue-50 text-blue-700 font-medium py-2.5 rounded-lg border border-slate-200 hover:border-blue-200 transition-all text-sm flex items-center justify-center gap-2 group/btn">
                Accéder au cours <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
