import { useState } from 'react';
import { useLocation } from 'wouter';
import { login } from '@/lib/auth';
import { User, Users, BookOpen } from 'lucide-react';

const mascotPath = import.meta.env.BASE_URL + 'mascot.png';

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
      <div className="hidden lg:flex flex-col w-1/2 bg-blue-900 text-white p-12 justify-between relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-16">
             <div className="bg-white/10 p-2 rounded-xl flex items-center justify-center font-bold text-xl">
              UF
            </div>
            <span className="font-bold text-2xl tracking-tight">UniFlow</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-6 max-w-md leading-tight">
            Bienvenue sur votre espace académique
          </h1>
          <p className="text-blue-200 max-w-md text-lg leading-relaxed">
            Accédez à vos cours, suivez vos présences et interagissez avec votre campus en toute simplicité.
          </p>
        </div>
        
        <div className="relative z-10 mt-auto">
          <img src={mascotPath} alt="UniFlow Mascot" className="w-64 h-auto opacity-90 mix-blend-luminosity" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-teal-800 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-slate-50 relative">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Connexion</h2>
            <p className="text-slate-500 text-sm">Saisissez vos identifiants pour continuer</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 block">Adresse email universitaire</label>
              <input 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="prenom.nom@uniflow.edu"
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-sm"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex justify-between">
                Mot de passe
                <a href="#" className="text-blue-600 hover:text-blue-700 font-normal">Oublié ?</a>
              </label>
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-sm"
                required
              />
            </div>

            <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg transition-colors mt-2">
              Se connecter
            </button>
          </form>

          <div className="mt-10 pt-6 border-t border-slate-100">
            <p className="text-xs text-center text-slate-500 mb-4 uppercase tracking-wider font-semibold">Accès Rapide Démo</p>
            <div className="grid grid-cols-1 gap-3">
              <button onClick={() => demoLogin('emma.martin@uniflow.edu')} className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-blue-200 transition-all text-left group">
                <div className="bg-blue-100 text-blue-700 p-2 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors"><User className="w-4 h-4" /></div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Espace Étudiant</div>
                  <div className="text-xs text-slate-500">emma.martin@uniflow.edu</div>
                </div>
              </button>
              
              <button onClick={() => demoLogin('lucas.bernard@uniflow.edu')} className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-teal-200 transition-all text-left group">
                <div className="bg-teal-100 text-teal-700 p-2 rounded-md group-hover:bg-teal-600 group-hover:text-white transition-colors"><Users className="w-4 h-4" /></div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Espace Délégué</div>
                  <div className="text-xs text-slate-500">lucas.bernard@uniflow.edu</div>
                </div>
              </button>

              <button onClick={() => demoLogin('dr.martin@uniflow.edu')} className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-amber-200 transition-all text-left group">
                <div className="bg-amber-100 text-amber-700 p-2 rounded-md group-hover:bg-amber-500 group-hover:text-white transition-colors"><BookOpen className="w-4 h-4" /></div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Espace Enseignant</div>
                  <div className="text-xs text-slate-500">dr.martin@uniflow.edu</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
