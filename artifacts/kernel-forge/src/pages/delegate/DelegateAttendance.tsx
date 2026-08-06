import { useState, useEffect } from 'react';
import { QrCode, Download, CreditCard as Edit2, Search } from 'lucide-react';
import { getData, Attendance } from '@/lib/data';

export default function DelegateAttendance() {
  const [attendance, setAttendance] = useState<Attendance[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setAttendance(getData<Attendance>('attendance'));
  }, []);

  const filtered = attendance.filter(a =>
    a.student.toLowerCase().includes(search.toLowerCase()) ||
    a.number.includes(search)
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Gestion des Présences</h1>
          <p className="text-slate-500 mt-1 text-sm">Algorithmique L2 • Groupe A</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-slate-200 bg-white text-slate-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            <Download className="w-4 h-4" /> Exporter
          </button>
          <button className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors shadow-sm">
            <QrCode className="w-4 h-4" /> Générer QR Appel
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard label="Taux global" value="87%" color="text-blue-700" />
        <MetricCard label="Sessions totales" value="156" color="text-slate-700" />
        <MetricCard label="Présents aujourd'hui" value="42/45" color="text-teal-600" />
        <MetricCard label="Absences à justifier" value="12" color="text-amber-600" alert />
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Chercher un étudiant..."
              className="pl-9 pr-4 py-2 border border-slate-200 bg-white rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 w-full"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 font-medium">Étudiant</th>
                <th className="px-6 py-3 font-medium text-center">Présences</th>
                <th className="px-6 py-3 font-medium text-center">Absences</th>
                <th className="px-6 py-3 font-medium text-center">Retards</th>
                <th className="px-6 py-3 font-medium text-center">Taux</th>
                <th className="px-6 py-3 font-medium text-center">Justifiées</th>
                <th className="px-6 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">
                        {row.student.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{row.student}</div>
                        <div className="text-xs text-slate-500 font-mono mt-0.5">{row.number}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-medium text-slate-700">{row.presences}</td>
                  <td className="px-6 py-4 text-center font-medium text-slate-700">
                    <span className={row.absences > 3 ? 'text-red-600 font-bold' : ''}>{row.absences}</span>
                  </td>
                  <td className="px-6 py-4 text-center text-slate-500">{row.lates}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`font-bold ${row.rate < 70 ? 'text-red-600' : row.rate < 85 ? 'text-amber-600' : 'text-green-600'}`}>
                      {row.rate}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs font-bold">{row.justified}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-blue-600 p-1.5 rounded-md hover:bg-blue-50 transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, color, alert }: { label: string, value: string, color: string, alert?: boolean }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative">
      {alert && <div className="absolute top-0 right-0 w-2 h-2 m-3 bg-red-500 rounded-full animate-pulse"></div>}
      <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">{label}</p>
      <h3 className={`text-2xl font-bold ${color}`}>{value}</h3>
    </div>
  );
}
