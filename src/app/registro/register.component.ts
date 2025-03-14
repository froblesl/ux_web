import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    username: '',
    password: '',
  };

  constructor(private dialog: MatDialog) {}

  onSubmit() {
    if (this.user.name && this.user.email && this.user.username && this.user.password) {
      this.dialog.open(RegisterDialog);
    }
  }
}

// Componente para el Dialog
@Component({
  selector: 'app-register-dialog',
  standalone: true,
  template: `
    <div class="dialog-container">
      <h2>Registro Exitoso</h2>
      <p>Tu cuenta ha sido creada correctamente.</p>
      <button mat-raised-button color="primary" (click)="close()">OK</button>
    </div>
  `,
  styleUrls: ['./register.component.css'],
  imports: [MatButtonModule, MatDialogModule],
})
export class RegisterDialog {
  constructor(private dialog: MatDialog, private router: Router) {} // Agregar Router

  close() {
    this.dialog.closeAll();
    this.router.navigate(['/login']); // Redirigir a la pantalla de login
  }
}
