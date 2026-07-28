
import { Route, Switch, Router as WouterRouter, Redirect } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Landing from '@/pages/Landing';
import Login from '@/pages/Login';
import { AppLayout } from '@/components/layout/AppLayout';

// Student Pages
import StudentDashboard from '@/pages/student/StudentDashboard';
import StudentCourses from '@/pages/student/StudentCourses';
import StudentSchedule from '@/pages/student/StudentSchedule';
import StudentAssignments from '@/pages/student/StudentAssignments';
import StudentGrades from '@/pages/student/StudentGrades';
import StudentMessages from '@/pages/student/StudentMessages';

// Teacher Pages
import TeacherDashboard from '@/pages/teacher/TeacherDashboard';
import DelegateAttendance from '@/pages/delegate/DelegateAttendance';

const queryClient = new QueryClient();

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-64 bg-white border border-slate-200 rounded-xl shadow-sm">
    <div className="text-center">
      <h2 className="text-xl font-bold text-slate-700">{title}</h2>
      <p className="text-slate-500 mt-2">Page en cours de construction</p>
    </div>
  </div>
);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/login" component={Login} />
      
      {/* Student Routes */}
      <Route path="/student">
        <Redirect to="/student/dashboard" />
      </Route>
      <Route path="/student/dashboard">
        <AppLayout><StudentDashboard /></AppLayout>
      </Route>
      <Route path="/student/cours">
        <AppLayout><StudentCourses /></AppLayout>
      </Route>
      <Route path="/student/emploi-du-temps">
        <AppLayout><StudentSchedule /></AppLayout>
      </Route>
      <Route path="/student/devoirs">
        <AppLayout><StudentAssignments /></AppLayout>
      </Route>
      <Route path="/student/presences">
        <AppLayout><PlaceholderPage title="Présences" /></AppLayout>
      </Route>
      <Route path="/student/notes">
        <AppLayout><StudentGrades /></AppLayout>
      </Route>
      <Route path="/student/messages">
        <AppLayout><StudentMessages /></AppLayout>
      </Route>
      <Route path="/student/notifications">
        <AppLayout><PlaceholderPage title="Notifications" /></AppLayout>
      </Route>
      <Route path="/student/parametres">
        <AppLayout><PlaceholderPage title="Paramètres" /></AppLayout>
      </Route>

      {/* Delegate Routes */}
      <Route path="/delegate">
        <Redirect to="/delegate/dashboard" />
      </Route>
      <Route path="/delegate/dashboard">
        <AppLayout><StudentDashboard /></AppLayout>
      </Route>
      <Route path="/delegate/presences/gestion">
        <AppLayout><DelegateAttendance /></AppLayout>
      </Route>
      <Route path="/delegate/:rest*">
        <AppLayout><PlaceholderPage title="Vue Délégué" /></AppLayout>
      </Route>

      {/* Teacher Routes */}
      <Route path="/teacher">
        <Redirect to="/teacher/dashboard" />
      </Route>
      <Route path="/teacher/dashboard">
        <AppLayout><TeacherDashboard /></AppLayout>
      </Route>
      <Route path="/teacher/:rest*">
        <AppLayout><PlaceholderPage title="Vue Enseignant" /></AppLayout>
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
