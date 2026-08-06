import { useEffect, useState } from 'react';
import { BookOpen, FileText, Clock, TrendingUp, CircleCheck as CheckCircle, MapPin, ChevronRight, Calendar as CalendarIcon, Award, CircleAlert as AlertCircle, ArrowUpRight } from 'lucide-react';
import { getData, Course, Assignment, ScheduleEvent } from '@/lib/data';
import { Link } from 'wouter';

export default function StudentDashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [schedule, setSchedule] = useState<ScheduleEvent[]>([]);

  useEffect(() => {
    setCourses(getData<Course>('courses'));
    setAssignments(getData<Assignment>('assignments'));
    setSchedule(getData<ScheduleEvent>('schedule'));
  }, []);

  const pendingAssignments = assignments.filter(a => a.status === 'pending' || a.status === 'late').length;

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Tableau de bord</h1>
          <p className="text-slate-500 mt-1 text-sm">Semestre 1 • 2024/2025</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <CalendarIcon className="w-4 h-4" />
          {new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard title="Cours inscrits" value={courses.length.toString()} icon={BookOpen} color="from-blue-500 to-blue-600" />
        <StatCard title="Devoirs à rendre" value={pendingAssignments.toString()} icon={FileText} color="from-amber-500 to-amber-600" alert={pendingAssignments > 0} />
        <StatCard title="Prochain cours" value="Dans 2h30" icon={Clock} color="from-teal-500 to-teal-600" />
        <StatCard title="Moyenne G." value="14.6/20" icon={TrendingUp} color="from-indigo-500 to-indigo-600" />
        <StatCard title="Présences" value="87%" icon={CheckCircle} color="from-green-500 to-green-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content (2 cols) */}
        <div className="lg:col-span-2 space-y-6">

          {/* Cours du jour */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-semibold text-slate-800 flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-slate-400" />
                Cours du jour (Lundi)
              </h2>
              <Link href="/student/emploi-du-temps" className="text-xs font-medium text-blue-600 hover:text-blue-800 flex items-center gap-0.5">
                Voir tout <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="divide-y divide-slate-100">
              {schedule.filter(s => s.day === 'Lun').map((event) => {
                const course = courses.find(c => c.id === event.courseId);
                return (
                  <div key={event.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3 sm:w-28 shrink-0">
                      <div className="w-1 h-10 rounded-full" style={{ backgroundColor: course?.color || '#1E3A8A' }}></div>
                      <div className="text-slate-500 font-medium font-mono text-sm">
                        {event.start}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider" style={{ backgroundColor: `${event.color}40`, color: '#1E3A8A' }}>
                          {event.type}
                        </span>
                        <span className="font-bold text-slate-900">{course?.title}</span>
                      </div>
                      <div className="text-sm text-slate-500 flex items-center gap-3">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Salle {event.room}</span>
                        <span>•</span>
                        <span>{course?.teacher}</span>
                      </div>
                    </div>
                    <Link href="/student/cours" className="hidden sm:flex text-slate-400 hover:text-blue-600 bg-white border border-slate-200 shadow-sm hover:shadow px-3 py-1.5 rounded-lg text-sm font-medium transition-all">
                      Rejoindre
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Activité récente */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
            <h2 className="font-semibold text-slate-800 mb-5 flex items-center justify-between">
              Activité récente
              <span className="text-xs font-normal text-slate-400">Cette semaine</span>
            </h2>
            <div className="space-y-4">
              <ActivityItem type="grade" title="Note ajoutée : TP Bases de données" meta="16/20 • Il y a 2h" color="bg-green-100 text-green-700" />
              <ActivityItem type="doc" title="Support de cours ajouté : Chapitre 4 (Graphes)" meta="Algorithmique • Hier" color="bg-blue-100 text-blue-700" />
              <ActivityItem type="assignment" title="Devoir rendu : Quiz Économie" meta="Hier" color="bg-slate-100 text-slate-700" />
            </div>
          </div>

        </div>

        {/* Sidebar (1 col) */}
        <div className="space-y-6">

          {/* Prochain événement */}
          <div className="bg-gradient-to-br from-blue-950 to-blue-800 text-white rounded-xl shadow-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Clock className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <div className="text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">Prochain cours</div>
              <h3 className="text-xl font-bold mb-1">Réseaux Informatiques</h3>
              <p className="text-blue-100/80 text-sm mb-4">TD • Dr. Dubais</p>
              <div className="bg-white/10 rounded-lg p-3 flex items-center justify-between text-sm backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-teal-300" /> 13:30 - 15:00</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal-300" /> C202</div>
              </div>
            </div>
          </div>

          {/* Devoirs urgents */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
            <h2 className="font-semibold text-slate-800 mb-4 flex items-center justify-between">
              Devoirs urgents
              <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">{pendingAssignments}</span>
            </h2>
            <div className="space-y-3">
              {assignments.filter(a => a.status === 'pending' || a.status === 'late').slice(0,3).map(a => (
                <div key={a.id} className="group p-3 border border-slate-100 rounded-lg hover:border-red-200 hover:bg-red-50/50 transition-colors">
                  <div className="font-medium text-slate-800 text-sm mb-1">{a.title}</div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">{a.course}</span>
                    <span className={`font-semibold ${a.status === 'late' ? 'text-red-600' : 'text-amber-600'}`}>
                      {a.status === 'late' ? 'En retard' : `Avant le ${a.dueDate}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/student/devoirs" className="block w-full text-center mt-4 text-sm text-blue-600 font-medium hover:text-blue-800">
              Voir tous les devoirs
            </Link>
          </div>

          {/* Progress overview */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
            <h2 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              Progression semestre
            </h2>
            <div className="space-y-3">
              {courses.slice(0, 3).map(c => (
                <div key={c.id}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-medium text-slate-600 truncate">{c.title}</span>
                    <span className="text-xs font-bold text-slate-700">{c.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="h-1.5 rounded-full transition-all duration-1000" style={{ width: `${c.progress}%`, backgroundColor: c.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color, alert }: { title: string, value: string, icon: any, color: string, alert?: boolean }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
      {alert && <div className="absolute top-0 right-0 w-2 h-2 m-4 bg-red-500 rounded-full animate-pulse"></div>}
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
    </div>
  );
}

function ActivityItem({ type, title, meta, color }: { type: string, title: string, meta: string, color: string }) {
  const Icon = type === 'grade' ? TrendingUp : type === 'doc' ? FileText : CheckCircle;
  return (
    <div className="flex gap-4 items-start">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${color}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <p className="text-sm font-medium text-slate-800">{title}</p>
        <p className="text-xs text-slate-500 mt-0.5">{meta}</p>
      </div>
    </div>
  );
}
