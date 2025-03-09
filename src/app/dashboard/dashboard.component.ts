import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  goToMedicationHistory() {
    this.router.navigate(['/historial-medicacion']); // Redirige a la nueva pantalla
  }
}
