import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
})
export class LoginComponent {
  user = {
    username: '',
    password: '',
  };

  constructor(private router: Router, private dialog: MatDialog) {}

  onSubmit() {
    if (this.user.username && this.user.password) {
      this.dialog.open(LoginDialog);
    }
  }

  goToRegister() {
    this.router.navigate(['/registro']); // Redirige a la pantalla de registro
  }
}

// Componente para el Dialog de éxito
@Component({
  selector: 'app-login-dialog',
  standalone: true,
  template: `
    <div class="dialog-container">
      <h2>Inicio de Sesión Exitoso</h2>
      <p>Has iniciado sesión correctamente.</p>
      <button mat-raised-button color="primary" (click)="close()">OK</button>
    </div>
  `,
  styleUrls: ['./login.component.css'],
  imports: [MatButtonModule, MatDialogModule],
})
export class LoginDialog {
  constructor(private dialog: MatDialog, private router: Router) {} // Agregar Router

  close() {
    this.dialog.closeAll();
    this.router.navigate(['/dashboard']); // Redirige a Dashboard después de cerrar el diálogo
  }
}
