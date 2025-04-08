import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('../app/shared/components/form-ui/form-ui.component').then(m => m.FormUiComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('../app/features/home/home.component').then(m => m.HomeComponent),
  },
  { path: '**', redirectTo: '/login' },
  // Add more routes for your dashboard
  // Add more routes here...
];
