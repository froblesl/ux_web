import { Routes } from '@angular/router';
import { RegisterComponent } from './registro/register.component';

export const routes: Routes = [
  { path: 'registro', component: RegisterComponent },
  { path: '', redirectTo: '/registro', pathMatch: 'full' }, // Redirigir a registro por defecto
];
