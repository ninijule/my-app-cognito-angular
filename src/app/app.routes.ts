import {Routes} from '@angular/router';
import {AuthGuard} from './guard/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth/auth-component').then(m => m.AuthComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'logout',
    loadComponent: () => import('./logout/logout.component').then((m) => m.LogoutComponent),
  }
];
