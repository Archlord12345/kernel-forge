import { useEffect } from 'react';
import { Link } from 'wouter';
import { BookOpen, Users, Shield, Zap, Calendar, ChartBar as BarChart3, MessageSquare, Award, ArrowRight, CircleCheck as CheckCircle2, Star } from 'lucide-react';
import { seedData } from '@/lib/data';

const heroImage = 'https://images.pexels.com/photos/6147398/pexels-photo-6147398.jpeg?auto=compress&cs=tinysrgb&w=1200';
const campusImage = 'https://images.pexels.com/photos/14446732/pexels-photo-14446732.jpeg?auto=compress&cs=tinysrgb&w=1200';

export default function Landing() {
  useEffect(() => {
    seedData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Nav */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-slate-200/60 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-2 rounded-xl flex items-center justify-center font-bold text-sm shadow-md shadow-blue-900/20">
            UF
          </div>
          <span className="font-bold text-xl text-blue-900 tracking-tight">UniFlow</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-900 transition-colors">Fonctionnalités</a>
          <a href="#roles" className="hover:text-blue-900 transition-colors">Rôles</a>
          <a href="#testimonials" className="hover:text-blue-900 transition-colors">Témoignages</a>
          <a href="#about" className="hover:text-blue-900 transition-colors">À propos</a>
        </div>
        <div className="flex gap-3 items-center">
          <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors">
            Se connecter
          </Link>
          <Link href="/login" className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md hover:shadow-blue-900/20">
            Commencer
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Étudiants sur le campus" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-900/40" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-36">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                <span className="text-xs font-medium text-white/90 uppercase tracking-wider">Plateforme académique nouvelle génération</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                Simplifiez l'éducation,<br />
                <span className="bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent">libérez le potentiel</span>
              </h1>
              <p className="text-lg text-blue-100/90 max-w-xl leading-relaxed mb-10">
                La plateforme universitaire pensée pour l'excellence académique en Afrique. Connectez étudiants, délégués et enseignants sur un outil performant et accessible.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login" className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-900 px-7 py-3.5 rounded-lg font-semibold text-base transition-all shadow-lg hover:shadow-xl">
                  Découvrir UniFlow
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/login" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-7 py-3.5 rounded-lg font-semibold text-base transition-all">
                  Déjà utilisateur ? Se connecter
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-12 pt-8 border-t border-white/15">
                <div className="flex items-center gap-2 text-blue-100/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  Sans installation
                </div>
                <div className="flex items-center gap-2 text-blue-100/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  Accessible 24/7
                </div>
                <div className="flex items-center gap-2 text-blue-100/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  Données sécurisées
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '15 000+', label: 'Étudiants accompagnés' },
                { value: '98%', label: 'Taux de satisfaction' },
                { value: '24/7', label: 'Disponibilité plateforme' },
                { value: '50+', label: 'Établissements partenaires' },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-blue-900 to-blue-700 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-block text-xs font-bold text-teal-600 uppercase tracking-widest mb-3">Fonctionnalités</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Tout ce qu'il faut pour réussir</h2>
              <p className="text-slate-600 text-lg">Une suite d'outils complète pour gérer la vie académique au quotidien, de la prise de notes à la validation des semestres.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: BookOpen, title: 'Cours & Ressources', desc: 'Accédez à tous vos supports de cours, organisez-les par UE et suivez votre progression chapitre par chapitre.', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50' },
                { icon: Calendar, title: 'Emploi du temps', desc: 'Visualisez votre planning hebdomadaire, recevez des rappels avant chaque cours et ne manquez jamais une session.', color: 'from-teal-500 to-teal-600', bg: 'bg-teal-50' },
                { icon: BarChart3, title: 'Notes & Bulletins', desc: 'Suivez vos moyennes en temps réel, visualisez votre évolution semestre après semestre et anticipez vos validations.', color: 'from-indigo-500 to-indigo-600', bg: 'bg-indigo-50' },
                { icon: CheckCircle2, title: 'Présences', desc: 'Les délégués gèrent les appels en un clic. Les étudiants consultent leur taux de présence et justifient leurs absences.', color: 'from-green-500 to-green-600', bg: 'bg-green-50' },
                { icon: MessageSquare, title: 'Messagerie', desc: 'Communiquez directement avec vos enseignants et camarades. Posez vos questions et partagez vos ressources.', color: 'from-amber-500 to-amber-600', bg: 'bg-amber-50' },
                { icon: Zap, title: 'Accessibilité', desc: 'Optimisé pour fonctionner même avec une connexion limitée. Interface fluide sur mobile, tablette et ordinateur.', color: 'from-rose-500 to-rose-600', bg: 'bg-rose-50' },
              ].map((f, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-5 shadow-md`}>
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles */}
        <section id="roles" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-block text-xs font-bold text-teal-600 uppercase tracking-widest mb-3">Trois espaces dédiés</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Pensé pour chaque acteur du campus</h2>
              <p className="text-slate-600 text-lg">Une expérience adaptée au rôle de chacun, avec des outils sur-mesure.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: BookOpen, role: 'Étudiants', desc: 'Consultez vos cours, suivez vos notes, gérez vos devoirs et restez en contact avec vos enseignants.', color: 'bg-blue-900', features: ['Tableau de bord personnel', 'Cours et ressources en ligne', 'Suivi des notes en temps réel', 'Messagerie intégrée'] },
                { icon: Users, role: 'Délégués', desc: 'Gérez les présences de votre groupe, communiquez avec la classe et facilitez le quotidien de vos camarades.', color: 'bg-teal-600', features: ['Gestion des présences', 'Génération de QR codes', 'Export des rapports', 'Communication de groupe'] },
                { icon: Award, role: 'Enseignants', desc: 'Publiez vos supports, saisissez vos notes, organisez vos visioconférences et suivez vos étudiants.', color: 'bg-indigo-700', features: ['Publication de ressources', 'Saisie des notes', 'Visioconférences intégrées', 'Suivi des performances'] },
              ].map((r, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className={`${r.color} p-8 text-center`}>
                    <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                      <r.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{r.role}</h3>
                  </div>
                  <div className="p-7">
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{r.desc}</p>
                    <ul className="space-y-2.5">
                      {r.features.map((feat, j) => (
                        <li key={j} className="flex items-center gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campus image banner */}
        <section className="relative h-72 md:h-96 overflow-hidden">
          <img src={campusImage} alt="Campus universitaire" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">Une plateforme conçue pour le contexte africain</h2>
                <p className="text-blue-100/90 text-lg leading-relaxed">Pensée pour les universités d'Afrique, UniFlow s'adapte aux réalités du terrain : connexion variable, grands groupes, et besoins spécifiques des établissements francophones.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-block text-xs font-bold text-teal-600 uppercase tracking-widest mb-3">Témoignages</div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Ils nous font confiance</h2>
              <p className="text-slate-600 text-lg">Ce que disent les étudiants et enseignants qui utilisent UniFlow au quotidien.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Emma Martin', role: 'Étudiante en L2 Informatique', text: 'UniFlow a changé ma façon de travailler. Je peux consulter mes notes, mes cours et mon emploi du temps en un seul endroit. C\'est devenu indispensable.', rating: 5 },
                { name: 'Dr. Martin', role: 'Enseignant-chercheur', text: 'La saisie des notes et la gestion des présences sont enfin simples. Mes étudiants sont mieux suivis et je gagne un temps précieux chaque semestre.', rating: 5 },
                { name: 'Lucas Bernard', role: 'Délégué de classe', text: 'Faire l\'appel avec le QR code prend 30 secondes. Les absences sont tracées automatiquement et je peux exporter les rapports pour l\'administration.', rating: 5 },
              ].map((t, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 text-white flex items-center justify-center font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About + CTA */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-block text-xs font-bold text-teal-600 uppercase tracking-widest mb-3">À propos</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Prêt à transformer votre expérience universitaire ?</h2>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Rejoignez les milliers d'étudiants et d'enseignants qui utilisent déjà UniFlow pour simplifier leur vie académique. L'inscription est gratuite pour les établissements partenaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login" className="group inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all shadow-lg hover:shadow-xl hover:shadow-blue-900/20">
                Commencer gratuitement
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#features" className="inline-flex items-center justify-center bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg font-semibold text-base transition-all">
                En savoir plus
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="bg-gradient-to-br from-blue-700 to-blue-500 text-white p-2 rounded-xl flex items-center justify-center font-bold text-sm">
                  UF
                </div>
                <span className="font-bold text-xl text-white tracking-tight">UniFlow</span>
              </div>
              <p className="text-sm leading-relaxed max-w-sm">La plateforme académique pensée pour l'excellence en Afrique. Connectez étudiants, délégués et enseignants.</p>
              <div className="flex gap-3 mt-6">
                {['Twitter', 'LinkedIn', 'Facebook'].map(s => (
                  <a key={s} href="#" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-700 flex items-center justify-center text-xs font-bold text-slate-400 hover:text-white transition-all">
                    {s.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Produit</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#roles" className="hover:text-white transition-colors">Rôles</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Témoignages</a></li>
                <li><a href="/login" className="hover:text-white transition-colors">Se connecter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Ressources</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2024 UniFlow. Tous droits réservés.</p>
            <p className="text-sm">Conçu avec soin pour l'Afrique 🌍</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
