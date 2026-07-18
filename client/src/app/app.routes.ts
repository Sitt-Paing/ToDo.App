import { Routes } from '@angular/router';
import { Auth } from './pages/auth/auth';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: 'auth', component: Auth },
  { path: 'home', component: Home },
  { path: 'dashboard', component: Dashboard },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];
