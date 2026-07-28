import { useEffect, useState } from 'react';
import { FileText, Filter, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { getData, Assignment } from '@/lib/data';

export default function StudentAssignments() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    setAssignments(getData<Assignment>('assignments'));
  }, []);

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'submitted': return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'late': return <AlertCircle className="w-5 h-5 text-red-500" />;
      default: return <Clock className="w-5 h-5 text-amber-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'submitted': return <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Rendu</span>;
      case 'late': return <span className="bg-red-100 text-red-700 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">En retard</span>;
      default: return <span className="bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">À rendre</span>;
    }
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Devoirs</h1>
          <p className="text-slate-500 mt-1 text-sm">Gérez vos rendus et suivez vos échéances.</p>
        </div>
        
        <button className="flex items-center gap-2 border border-slate-200 bg-white text-slate-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors w-fit">
          <Filter className="w-4 h-4" />
          Filtrer par cours
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-100">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="p-5 flex flex-col sm:flex-row sm:items-center gap-5 hover:bg-slate-50 transition-colors">
              <div className="flex items-start gap-4 flex-1">
                <div className="bg-slate-100 p-3 rounded-lg shrink-0">
                  <FileText className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{assignment.title}</h3>
                  <div className="text-sm text-slate-500 flex items-center gap-3">
                    <span className="font-medium text-blue-700">{assignment.course}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      {getStatusIcon(assignment.status)}
                      Echéance : {assignment.dueDate}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-64 shrink-0 pl-16 sm:pl-0">
                <div className="text-right">
                  {getStatusBadge(assignment.status)}
                  {assignment.grade && (
                    <div className="mt-2 text-sm font-bold text-slate-900">
                      Note: {assignment.grade}/20
                    </div>
                  )}
                </div>
                
                {assignment.status !== 'submitted' ? (
                  <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm whitespace-nowrap">
                    Soumettre
                  </button>
                ) : (
                  <button className="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm whitespace-nowrap">
                    Voir le rendu
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
