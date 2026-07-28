import { User, getData } from './data';

export function login(email: string): User | null {
  const users = getData<User>('users');
  const user = users.find(u => u.email === email);
  
  if (user) {
    localStorage.setItem('uniflow_auth', JSON.stringify(user));
    return user;
  }
  return null;
}

export function logout() {
  localStorage.removeItem('uniflow_auth');
}

export function getCurrentUser(): User | null {
  const data = localStorage.getItem('uniflow_auth');
  return data ? JSON.parse(data) : null;
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem('uniflow_auth');
}
