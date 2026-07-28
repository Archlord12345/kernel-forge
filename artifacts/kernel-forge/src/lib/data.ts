export type Role = 'student' | 'delegate' | 'teacher';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  filiere?: string;
  niveau?: string;
  departement?: string;
  avatar?: string | null;
}

export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  teacher: string;
  room?: string;
  type?: string;
  semester: number;
  progress: number;
  color: string;
}

export interface ScheduleEvent {
  id: string;
  courseId: string;
  day: string;
  start: string;
  end: string;
  room: string;
  type: string;
  color: string;
}

export interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'late';
  grade: number | null;
}

export interface Grade {
  id: string;
  ue: string;
  code: string;
  credits: number;
  cc1: number | null;
  cc2: number | null;
  exam: number | null;
  avg: number | null;
  status: 'validated' | 'in_progress' | 'failed';
}

export interface Attendance {
  id: string;
  student: string;
  number: string;
  presences: number;
  absences: number;
  lates: number;
  rate: number;
  justified: number;
}

export interface Notification {
  id: string;
  type: 'announcement' | 'assignment' | 'video' | 'system';
  title: string;
  content: string;
  from: string;
  date: string;
  read: boolean;
}

export interface Message {
  id: string;
  from: string;
  preview: string;
  time: string;
  unread: number;
}

const defaultUsers: User[] = [
  { id: '1', name: 'Emma Martin', email: 'emma.martin@uniflow.edu', role: 'student', filiere: 'Informatique', niveau: 'Licence 2', avatar: null },
  { id: '2', name: 'Lucas Bernard', email: 'lucas.bernard@uniflow.edu', role: 'delegate', filiere: 'Informatique', niveau: 'Licence 2' },
  { id: '3', name: 'Dr. Martin', email: 'dr.martin@uniflow.edu', role: 'teacher', departement: 'Informatique' },
];

const defaultCourses: Course[] = [
  { id: '1', title: 'Algorithmique - L2', subtitle: 'Analyse de fonctions', teacher: 'Dr. Martin', room: 'A204', type: 'CM', semester: 1, progress: 75, color: '#1E3A8A' },
  { id: '2', title: 'Bases de données', teacher: 'Dr. Brokoum', semester: 1, progress: 60, color: '#0D9488' },
  { id: '3', title: 'Réseaux Informatiques', teacher: 'Dr. Dubais', semester: 1, progress: 45, color: '#7C3AED' },
  { id: '4', title: 'Intelligence Artificielle', teacher: 'Dr. Lefeve', semester: 2, progress: 80, color: '#DC2626' },
  { id: '5', title: 'Économie', teacher: 'Dr. Lonig', semester: 1, progress: 55, color: '#F59E0B' },
  { id: '6', title: 'Philosophie', teacher: 'Dr. Bernard', semester: 1, progress: 30, color: '#059669' },
];

const defaultSchedule: ScheduleEvent[] = [
  { id: '1', courseId: '1', day: 'Lun', start: '08:30', end: '10:00', room: 'A204', type: 'CM', color: '#DBEAFE' },
  { id: '2', courseId: '2', day: 'Lun', start: '10:15', end: '12:00', room: 'B101', type: 'TD', color: '#CCFBF1' },
  { id: '3', courseId: '3', day: 'Mar', start: '13:30', end: '15:00', room: 'C202', type: 'CM', color: '#EDE9FE' },
  { id: '4', courseId: '4', day: 'Mer', start: '08:00', end: '10:00', room: 'D301', type: 'TP', color: '#FEE2E2' },
  { id: '5', courseId: '5', day: 'Jeu', start: '10:00', end: '12:00', room: 'B205', type: 'TD', color: '#FEF3C7' },
  { id: '6', courseId: '1', day: 'Ven', start: '14:00', end: '16:00', room: 'A204', type: 'TP', color: '#DBEAFE' },
];

const defaultAssignments: Assignment[] = [
  { id: '1', title: 'Devoir 2 - Algorithmique', course: 'Algorithmique', dueDate: '2024-05-20', status: 'late', grade: null },
  { id: '2', title: 'Quiz noté', course: 'Économie', dueDate: '2024-05-20', status: 'submitted', grade: 16 },
  { id: '3', title: 'TP 3 - Requêtes SQL', course: 'Bases de données', dueDate: '2024-09-15', status: 'pending', grade: null },
  { id: '4', title: 'Cours à revoir', course: 'Histoire', dueDate: '2024-05-14', status: 'submitted', grade: 14 },
];

const defaultGrades: Grade[] = [
  { id: '1', ue: 'Algorithmique', code: 'INFO201', credits: 4, cc1: 16.5, cc2: 14, exam: 15, avg: 15.2, status: 'validated' },
  { id: '2', ue: 'Bases de données', code: 'INFO204', credits: 4, cc1: 11.5, cc2: null, exam: null, avg: null, status: 'in_progress' },
  { id: '3', ue: 'Réseaux', code: 'INFO206', credits: 6, cc1: 16, cc2: 14, exam: null, avg: null, status: 'in_progress' },
  { id: '4', ue: 'Systèmes', code: 'INFO202', credits: 4, cc1: 14, cc2: 12, exam: 13, avg: 13.2, status: 'validated' },
  { id: '5', ue: 'Maths app.', code: 'INFO203', credits: 6, cc1: 7, cc2: 8, exam: 6, avg: 7.0, status: 'failed' },
];

const defaultAttendance: Attendance[] = [
  { id: '1', student: 'Emma Martin', number: '14052401', presences: 18, absences: 2, lates: 1, rate: 90, justified: 1 },
  { id: '2', student: 'Lucas Bernard', number: '14052402', presences: 16, absences: 3, lates: 2, rate: 78, justified: 2 },
  { id: '3', student: 'Aisha Bello', number: '14052403', presences: 20, absences: 0, lates: 0, rate: 100, justified: 0 },
  { id: '4', student: 'Jean Dubois', number: '14052404', presences: 10, absences: 10, lates: 0, rate: 50, justified: 2 },
];

const defaultNotifications: Notification[] = [
  { id: '1', type: 'announcement', title: 'Annonce importante', content: 'Changement de salle pour le cours d\'Algo de demain : Amphi B -> Salle B102', from: 'Admin UniFlow', date: '2024-05-14T09:01:00', read: false },
  { id: '2', type: 'assignment', title: 'Nouveau devoir', content: 'TP Bases de données - À rendre avant le 20 mai 23:58', from: 'Dr. Brokoum', date: '2024-05-12T10:00:00', read: false },
  { id: '3', type: 'video', title: 'Visioconférence', content: 'Algorithmique - Session à 14:00', from: 'Pr. Martin', date: '2024-05-12T13:30:00', read: true },
];

const defaultMessages: Message[] = [
  { id: '1', from: 'Dr. Martin', preview: 'Bonjour Emma, pouvez-vous me répéter la partie sur les graphes ?', time: '10:15', unread: 2 },
  { id: '2', from: 'Lucas Bernard', preview: 'J\'ai la même question que toi pour le devoir...', time: '09:40', unread: 0 },
  { id: '3', from: 'Admin UniFlow', preview: 'Maintenance prévue le 20/05 de 02:00 à 04:00', time: 'Lundi', unread: 1 },
];

export function seedData() {
  if (!localStorage.getItem('uniflow_seeded')) {
    localStorage.setItem('uniflow_users', JSON.stringify(defaultUsers));
    localStorage.setItem('uniflow_courses', JSON.stringify(defaultCourses));
    localStorage.setItem('uniflow_schedule', JSON.stringify(defaultSchedule));
    localStorage.setItem('uniflow_assignments', JSON.stringify(defaultAssignments));
    localStorage.setItem('uniflow_grades', JSON.stringify(defaultGrades));
    localStorage.setItem('uniflow_attendance', JSON.stringify(defaultAttendance));
    localStorage.setItem('uniflow_notifications', JSON.stringify(defaultNotifications));
    localStorage.setItem('uniflow_messages', JSON.stringify(defaultMessages));
    localStorage.setItem('uniflow_seeded', 'true');
  }
}

export function getData<T>(key: string): T[] {
  const data = localStorage.getItem(`uniflow_${key}`);
  return data ? JSON.parse(data) : [];
}

export function setData(key: string, data: any) {
  localStorage.setItem(`uniflow_${key}`, JSON.stringify(data));
}
