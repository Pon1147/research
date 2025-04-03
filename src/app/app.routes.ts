import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadComponent: () => import('../app/shared/components/form-ui/form-ui.component').then(m => m.FormUiComponent) },
    // Add more routes here...
];
