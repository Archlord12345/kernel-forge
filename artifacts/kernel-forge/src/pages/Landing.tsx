import { useEffect } from 'react';
import { Link } from 'wouter';
import { BookOpen, Users, Shield, Zap } from 'lucide-react';
import { seedData } from '@/lib/data';

const heroStudentPath = import.meta.env.BASE_URL + 'hero-student.png';
const mascotPath = import.meta.env.BASE_URL + 'mascot.png';

export default function Landing() {
  useEffect(() => {
    seedData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-900 text-white p-1.5 rounded-lg flex items-center justify-center font-bold">
            UF
          </div>
          <span className="font-bold text-xl text-blue-900">UniFlow</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-900 transition-colors">Fonctionnalités</a>
          <a href="#about" className="hover:text-blue-900 transition-colors">À propos</a>
          <a href="#contact" className="hover:text-blue-900 transition-colors">Contact</a>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">
            Se connecter
          </Link>
          <Link href="/login" className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors">
            Commencer gratuitement
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Simplifiez l'éducation, <br/><span className="text-blue-900">libérez le potentiel</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              La plateforme universitaire pensée pour l'excellence académique en Afrique. 
              Connectez étudiants, délégués et enseignants sur un outil performant et accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/login" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3.5 rounded-md font-medium text-center transition-colors shadow-sm">
                Découvrir UniFlow
              </Link>
              <Link href="/login" className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-3.5 rounded-md font-medium text-center transition-colors shadow-sm">
                Déjà utilisateur ? Se connecter
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 transform translate-x-10 translate-y-10"></div>
            <img src={heroStudentPath} alt="Étudiant sur UniFlow" className="w-full h-auto max-w-md mx-auto object-cover" onError={(e) => {
              // Fallback placeholder if image not found
              e.currentTarget.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800&h=600";
            }} />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-24 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Pourquoi choisir UniFlow ?</h2>
              <p className="text-slate-600">Une suite d'outils complète pour gérer la vie académique au quotidien, de la prise de notes à la validation des semestres.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: BookOpen, title: "Tout-en-un", desc: "Cours, devoirs, notes et présences réunis au même endroit.", color: "text-blue-600", bg: "bg-blue-50" },
                { icon: Users, title: "Collaboratif", desc: "Communication simplifiée entre enseignants, délégués et étudiants.", color: "text-teal-600", bg: "bg-teal-50" },
                { icon: Zap, title: "Accessible", desc: "Optimisé pour fonctionner même avec une connexion limitée.", color: "text-amber-500", bg: "bg-amber-50" },
                { icon: Shield, title: "Sécurisé", desc: "Vos données académiques sont protégées et confidentielles.", color: "text-red-500", bg: "bg-red-50" }
              ].map((f, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${f.bg} ${f.color}`}>
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-white">
            <div className="bg-white/10 p-1 rounded">UF</div>
            <span className="font-bold">UniFlow</span>
          </div>
          <p>© 2024 UniFlow. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
