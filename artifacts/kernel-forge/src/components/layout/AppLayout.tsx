import { Link, useLocation } from 'wouter';
import { getCurrentUser, logout } from '@/lib/auth';
import { LayoutDashboard, BookOpen, Calendar, FileText, SquareCheck as CheckSquare, ChartBar as BarChart2, MessageSquare, Bell, Settings, LogOut, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const logoPath = import.meta.env.BASE_URL + 'uniflow-logo.png';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const user = getCurrentUser();
  const [location, setLocation] = useLocation();

  if (!user) {
    setLocation('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    setLocation('/login');
  };

  const role = user.role;
  const basePath = `/${role}`;

  const navItems = {
    student: [
      { name: 'Dashboard', path: '', icon: LayoutDashboard },
      { name: 'Mes Cours', path: '/cours', icon: BookOpen },
      { name: 'Emploi du temps', path: '/emploi-du-temps', icon: Calendar },
      { name: 'Devoirs', path: '/devoirs', icon: FileText },
      { name: 'Présences', path: '/presences', icon: CheckSquare },
      { name: 'Notes', path: '/notes', icon: BarChart2 },
      { name: 'Messages', path: '/messages', icon: MessageSquare },
      { name: 'Notifications', path: '/notifications', icon: Bell },
      { name: 'Paramètres', path: '/parametres', icon: Settings },
    ],
    delegate: [
      { name: 'Dashboard', path: '', icon: LayoutDashboard },
      { name: 'Mes Cours', path: '/cours', icon: BookOpen },
      { name: 'Emploi du temps', path: '/emploi-du-temps', icon: Calendar },
      { name: 'Devoirs', path: '/devoirs', icon: FileText },
      { name: 'Présences', path: '/presences', icon: CheckSquare },
      { name: 'Notes', path: '/notes', icon: BarChart2 },
      { name: 'Messages', path: '/messages', icon: MessageSquare },
      { name: 'Notifications', path: '/notifications', icon: Bell },
      { name: 'Gestion Présences', path: '/presences/gestion', icon: Users },
      { name: 'Paramètres', path: '/parametres', icon: Settings },
    ],
    teacher: [
      { name: 'Dashboard', path: '', icon: LayoutDashboard },
      { name: 'Mes Cours', path: '/cours', icon: BookOpen },
      { name: 'Devoirs & Corrections', path: '/devoirs', icon: FileText },
      { name: 'Notes', path: '/notes', icon: BarChart2 },
      { name: 'Présences', path: '/presences', icon: CheckSquare },
      { name: 'Messages', path: '/messages', icon: MessageSquare },
      { name: 'Paramètres', path: '/parametres', icon: Settings },
    ],
  };

  const links = navItems[role as keyof typeof navItems] || navItems.student;
  const roleLabel = user.role === 'delegate' ? 'Délégué' : user.role === 'teacher' ? 'Enseignant' : 'Étudiant';

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0 shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-2 rounded-xl flex items-center justify-center font-bold text-sm shadow-md shadow-blue-900/20">
              UF
            </div>
            <span className="font-bold text-xl text-blue-900 tracking-tight">UniFlow</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {links.map((link) => {
            const fullPath = `${basePath}${link.path}`;
            const isActive = location === fullPath;
            return (
              <Link key={link.name} href={fullPath}>
                <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer w-full text-left ${
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50/50'
                }`}>
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 flex items-center justify-center font-bold shrink-0">
              {user.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">{user.name}</p>
              <p className="text-xs text-slate-500 truncate capitalize">{roleLabel}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors cursor-pointer">
            <LogOut className="w-4 h-4" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
          <div className="text-slate-500 font-medium text-sm">
            Espace {roleLabel}
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-slate-600 cursor-pointer relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-sm font-bold text-blue-700">
              {user.name.charAt(0)}
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
