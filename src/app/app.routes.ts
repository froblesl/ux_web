import { Routes } from '@angular/router';
import { RegisterComponent } from './registro/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'registro', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Ahora la página de inicio será /login
];
