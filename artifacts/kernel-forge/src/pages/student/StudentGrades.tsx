import { useEffect, useState } from 'react';
import { getData, Grade } from '@/lib/data';
import { Trophy, TrendingUp, Award, BookOpen } from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

export default function StudentGrades() {
  const [grades, setGrades] = useState<Grade[]>([]);

  useEffect(() => {
    setGrades(getData<Grade>('grades'));
  }, []);

  const validatedCredits = grades.filter(g => g.status === 'validated').reduce((acc, curr) => acc + curr.credits, 0);
  const totalCredits = grades.reduce((acc, curr) => acc + curr.credits, 0);

  const chartData = [
    { name: 'S1', avg: 12.5 },
    { name: 'S2', avg: 13.8 },
    { name: 'S3', avg: 13.2 },
    { name: 'S4', avg: 14.6 },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Relevé de Notes</h1>
        <p className="text-slate-500 mt-1 text-sm">Semestre actuel et historique.</p>
      </div>

      {/* Top cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-950 to-blue-800 text-white rounded-xl p-6 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Trophy className="w-24 h-24" />
          </div>
          <div className="relative z-10">
            <p className="text-blue-200 text-sm font-medium uppercase tracking-wider mb-2">Moyenne Générale</p>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-extrabold">14.6</span>
              <span className="text-blue-200 text-xl font-medium mb-1">/ 20</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm bg-green-500/20 w-fit px-3 py-1.5 rounded-full border border-green-500/30">
              <TrendingUp className="w-4 h-4 text-green-300" />
              <span>+1.4 pt vs semestre précédent</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-teal-600" />
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Crédits Validés</p>
          </div>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-4xl font-extrabold text-slate-900">{validatedCredits}</span>
            <span className="text-slate-400 text-lg font-medium mb-1">/ {totalCredits} ECTS</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div className="bg-gradient-to-r from-teal-500 to-teal-400 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${(validatedCredits/totalCredits)*100}%` }}></div>
          </div>
          <p className="text-xs text-slate-400 mt-2">{Math.round((validatedCredits/totalCredits)*100)}% du semestre validé</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Évolution</p>
          </div>
          <div className="h-24 w-full flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <Tooltip
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                />
                <Line type="monotone" dataKey="avg" stroke="#1E3A8A" strokeWidth={3} dot={{ fill: '#1E3A8A', r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between text-xs text-slate-400 mt-2">
            {chartData.map(d => <span key={d.name}>{d.name}</span>)}
          </div>
        </div>
      </div>

      {/* Grades table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-slate-400" />
          <h2 className="font-semibold text-slate-800">Détail par Unité d'Enseignement</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 font-medium">Code UE</th>
                <th className="px-6 py-3 font-medium">Intitulé</th>
                <th className="px-6 py-3 font-medium text-center">Crédits</th>
                <th className="px-6 py-3 font-medium text-center">CC1 (20%)</th>
                <th className="px-6 py-3 font-medium text-center">CC2 (20%)</th>
                <th className="px-6 py-3 font-medium text-center">Examen (60%)</th>
                <th className="px-6 py-3 font-medium text-right font-bold text-slate-900">Moyenne</th>
                <th className="px-6 py-3 font-medium text-center">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {grades.map((grade) => (
                <tr key={grade.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-500 text-xs">{grade.code}</td>
                  <td className="px-6 py-4 font-semibold text-slate-900">{grade.ue}</td>
                  <td className="px-6 py-4 text-center text-slate-600">{grade.credits}</td>
                  <td className="px-6 py-4 text-center text-slate-600">{grade.cc1 || '—'}</td>
                  <td className="px-6 py-4 text-center text-slate-600">{grade.cc2 || '—'}</td>
                  <td className="px-6 py-4 text-center text-slate-600">{grade.exam || '—'}</td>
                  <td className="px-6 py-4 text-right font-bold text-blue-900 text-base">
                    {grade.avg ? grade.avg.toFixed(2) : '—'}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {grade.status === 'validated' && <span className="inline-block px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-md">Validé</span>}
                    {grade.status === 'failed' && <span className="inline-block px-2.5 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-md">Non validé</span>}
                    {grade.status === 'in_progress' && <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-md">En cours</span>}
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
