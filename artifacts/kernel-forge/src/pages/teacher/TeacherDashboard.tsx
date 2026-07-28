
import { Users, FileText, CheckCircle, Video, BookOpen, Clock, AlertCircle } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

export default function TeacherDashboard() {
  const chartData = [
    { name: 'Algo L2', avg: 14.2 },
    { name: 'Maths', avg: 11.5 },
    { name: 'IA M1', avg: 15.8 },
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Espace Enseignant</h1>
          <p className="text-slate-500 mt-1 text-sm">Bienvenue Dr. Martin. Voici votre résumé d'activité.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatCard title="Cours" value="4" icon={BookOpen} color="bg-blue-50 text-blue-600" />
        <StatCard title="Étudiants" value="186" icon={Users} color="bg-teal-50 text-teal-600" />
        <StatCard title="À corriger" value="23" icon={FileText} color="bg-red-50 text-red-600" alert />
        <StatCard title="Notes en attente" value="2" icon={CheckCircle} color="bg-amber-50 text-amber-600" />
        <StatCard title="Visios prévues" value="3" icon={Video} color="bg-indigo-50 text-indigo-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
            <h2 className="font-semibold text-slate-800 mb-4">Mes cours aujourd'hui</h2>
            <div className="space-y-3">
              <CourseRow time="08:30" name="Algorithmique L2" room="Amphi A" students="120" status="terminé" />
              <CourseRow time="14:00" name="Intelligence Artificielle" room="Salle B204" students="45" status="en_cours" />
              <CourseRow time="16:30" name="TP Graphes" room="Labo 3" students="21" status="a_venir" />
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
            <h2 className="font-semibold text-slate-800 mb-6">Performance moyenne par cours</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} domain={[0, 20]} />
                  <Tooltip cursor={{ fill: '#F1F5F9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="avg" fill="#1E3A8A" radius={[4, 4, 0, 0]} maxBarSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50/50">
              <h2 className="font-semibold text-slate-800 flex items-center justify-between">
                Devoirs à corriger
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">23</span>
              </h2>
            </div>
            <div className="divide-y divide-slate-100">
              <AssignmentRow title="Projet Final IA" course="Intelligence Artificielle" count="15" urgent />
              <AssignmentRow title="TD 4 - Arbres" course="Algorithmique L2" count="8" />
            </div>
            <div className="p-3 bg-slate-50 text-center border-t border-slate-100">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Tout voir</button>
            </div>
          </div>

           <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
            <h2 className="font-semibold text-slate-800 mb-4 text-sm uppercase tracking-wider">Accès Rapide</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors text-left group">
                <div className="bg-blue-100 text-blue-700 p-2 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors"><CheckCircle className="w-4 h-4" /></div>
                <div className="text-sm font-medium text-slate-700 group-hover:text-blue-900">Saisir des notes</div>
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-colors text-left group">
                <div className="bg-teal-100 text-teal-700 p-2 rounded-md group-hover:bg-teal-600 group-hover:text-white transition-colors"><FileText className="w-4 h-4" /></div>
                <div className="text-sm font-medium text-slate-700 group-hover:text-teal-900">Publier un support</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color, alert }: { title: string, value: string, icon: any, color: string, alert?: boolean }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative group">
      {alert && <div className="absolute top-0 right-0 w-2 h-2 m-3 bg-red-500 rounded-full animate-pulse"></div>}
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${color}`}>
        <Icon className="w-4 h-4" />
      </div>
      <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-0.5">{title}</p>
      <h3 className="text-xl font-bold text-slate-900">{value}</h3>
    </div>
  );
}

function CourseRow({ time, name, room, students, status }: any) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors">
      <div className="flex items-center gap-4">
        <div className="text-sm font-mono font-medium text-slate-500 w-12">{time}</div>
        <div>
          <div className="font-bold text-slate-900 text-sm mb-0.5">{name}</div>
          <div className="text-xs text-slate-500 flex items-center gap-2">
            <span>{room}</span> • <span>{students} étudiants</span>
          </div>
        </div>
      </div>
      <div>
        {status === 'terminé' && <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 py-1 bg-slate-100 rounded">Terminé</span>}
        {status === 'en_cours' && <span className="text-xs font-bold text-green-700 uppercase tracking-wider px-2 py-1 bg-green-100 rounded flex items-center gap-1"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>En cours</span>}
        {status === 'a_venir' && <button className="text-xs font-bold text-blue-700 uppercase tracking-wider px-3 py-1.5 bg-blue-50 hover:bg-blue-100 transition-colors rounded">Démarrer</button>}
      </div>
    </div>
  );
}

function AssignmentRow({ title, course, count, urgent }: any) {
  return (
    <div className="p-4 hover:bg-slate-50 transition-colors flex items-start justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          {urgent && <AlertCircle className="w-3.5 h-3.5 text-red-500" />}
          <h4 className="font-semibold text-slate-900 text-sm">{title}</h4>
        </div>
        <p className="text-xs text-slate-500">{course}</p>
      </div>
      <div className="text-right">
        <div className={`text-sm font-bold ${urgent ? 'text-red-600' : 'text-slate-700'}`}>{count}</div>
        <div className="text-[10px] text-slate-400 uppercase font-medium">Copies</div>
      </div>
    </div>
  );
}
