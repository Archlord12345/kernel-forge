import { useState } from 'react';
import { useLocation } from 'wouter';
import { login } from '@/lib/auth';
import { User, Users, BookOpen, ArrowRight, Mail, Lock, Sparkles } from 'lucide-react';

export default function Login() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = login(email);
    if (user) {
      if (user.role === 'student') setLocation('/student/dashboard');
      else if (user.role === 'delegate') setLocation('/delegate/dashboard');
      else if (user.role === 'teacher') setLocation('/teacher/dashboard');
    } else {
      setError('Email ou mot de passe incorrect.');
    }
  };

  const demoLogin = (demoEmail: string) => {
    const user = login(demoEmail);
    if (user) {
      if (user.role === 'student') setLocation('/student');
      else if (user.role === 'delegate') setLocation('/delegate');
      else if (user.role === 'teacher') setLocation('/teacher');
    }
  };

  return (
    <div className="min-h-screen flex font-sans">
      {/* Left Panel */}
      <div className="hidden lg:flex flex-col w-1/2 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white p-12 justify-between relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-20">
            <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl flex items-center justify-center font-bold text-xl border border-white/20">
              UF
            </div>
            <span className="font-bold text-2xl tracking-tight">UniFlow</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            <span className="text-xs font-medium text-white/90 uppercase tracking-wider">Espace académique</span>
          </div>

          <h1 className="text-4xl font-bold mb-6 max-w-md leading-tight">
            Bienvenue sur votre <span className="text-teal-300">espace académique</span>
          </h1>
          <p className="text-blue-100/80 max-w-md text-lg leading-relaxed">
            Accédez à vos cours, suivez vos présences et interagissez avec votre campus en toute simplicité.
          </p>
        </div>

        {/* Stats preview */}
        <div className="relative z-10 grid grid-cols-3 gap-6 max-w-md">
          <div>
            <div className="text-3xl font-bold text-white">15K+</div>
            <div className="text-xs text-blue-200 mt-1">Étudiants</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-xs text-blue-200 mt-1">Établissements</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-xs text-blue-200 mt-1">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-slate-50 relative">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-1">Connexion</h2>
              <p className="text-slate-500 text-sm">Saisissez vos identifiants pour continuer</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              {error && (
                <div className="p-3.5 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 block">Adresse email universitaire</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="prenom.nom@uniflow.edu"
                    className="w-full border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all text-sm bg-slate-50/50"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 flex justify-between">
                  Mot de passe
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-normal">Oublié ?</a>
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full border border-slate-200 rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all text-sm bg-slate-50/50"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="group w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 rounded-lg transition-all mt-2 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                Se connecter
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-xs text-center text-slate-400 mb-4 uppercase tracking-wider font-semibold">Accès Rapide Démo</p>
              <div className="grid grid-cols-1 gap-2.5">
                <button onClick={() => demoLogin('emma.martin@uniflow.edu')} className="group flex items-center gap-3 px-4 py-2.5 rounded-lg border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition-all text-left">
                  <div className="bg-blue-100 text-blue-700 p-2 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors"><User className="w-4 h-4" /></div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-900">Espace Étudiant</div>
                    <div className="text-xs text-slate-500">emma.martin@uniflow.edu</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </button>

                <button onClick={() => demoLogin('lucas.bernard@uniflow.edu')} className="group flex items-center gap-3 px-4 py-2.5 rounded-lg border border-slate-200 hover:bg-teal-50 hover:border-teal-200 transition-all text-left">
                  <div className="bg-teal-100 text-teal-700 p-2 rounded-md group-hover:bg-teal-600 group-hover:text-white transition-colors"><Users className="w-4 h-4" /></div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-900">Espace Délégué</div>
                    <div className="text-xs text-slate-500">lucas.bernard@uniflow.edu</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" />
                </button>

                <button onClick={() => demoLogin('dr.martin@uniflow.edu')} className="group flex items-center gap-3 px-4 py-2.5 rounded-lg border border-slate-200 hover:bg-amber-50 hover:border-amber-200 transition-all text-left">
                  <div className="bg-amber-100 text-amber-700 p-2 rounded-md group-hover:bg-amber-500 group-hover:text-white transition-colors"><BookOpen className="w-4 h-4" /></div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-900">Espace Enseignant</div>
                    <div className="text-xs text-slate-500">dr.martin@uniflow.edu</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-slate-400 mt-6">
            Pas encore de compte ? <a href="#" className="text-blue-600 font-medium hover:text-blue-700">Contactez votre établissement</a>
          </p>
        </div>
      </div>
    </div>
  );
}
