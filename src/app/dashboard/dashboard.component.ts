import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu'; // ✅ Importar MatMenuModule

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
    MatCardModule,
    MatMenuModule // ✅ Agregado para que funcione el menú
  ],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  goToMedicationHistory() {
    this.router.navigate(['/historial']); 
  }

  editarPerfil() {
    this.router.navigate(['/informacion']); // ✅ Redirige a "/informacion"
  }

  cerrarSesion() {
    console.log("Cerrando sesión...");
    this.router.navigate(['/login']); // ✅ Ajusta la ruta según tu lógica de autenticación
  }
}
