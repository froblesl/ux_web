import { Routes } from '@angular/router';
import { RegisterComponent } from './registro/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistorialComponent } from './historial/historial.component';
import { InformacionComponent } from './informacion/informacion.component';

export const routes: Routes = [
  { path: 'registro', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'historial', component: HistorialComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
