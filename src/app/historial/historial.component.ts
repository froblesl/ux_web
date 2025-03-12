import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu'; // ✅ Importar MatMenuModule

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule // ✅ Agregar MatMenuModule a los imports
  ],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  historial = [
    {
      nombre: 'Dolex - 1 tableta',
      hora: '07:00 am',
      descripcion: 'Pastilla dolex dolor de cabeza',
      fecha: '02/03/2025'
    }
  ];

  constructor(private router: Router, public dialog: MatDialog) {}

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  openDialog(tipo: string) {
    this.dialog.open(DialogContent, {
      width: '400px',
      data: { tipo }
    });
  }

  editarPerfil() {
    this.router.navigate(['/informacion']); // ✅ Redirigir a la pantalla de edición de perfil
  }

  cerrarSesion() {
    console.log('Cerrando sesión...');
    // Aquí puedes limpiar el localStorage, cookies o llamar un servicio de logout
    this.router.navigate(['/login']); // ✅ Redirigir a la pantalla de login
  }
}

@Component({
  selector: 'app-dialog-content',
  template: `
    <h2 mat-dialog-title>{{ data.tipo }}</h2>
    <mat-dialog-content>
      <p>¿Quieres {{ data.tipo.toLowerCase() }} el historial de medicacion?</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="closeDialog()">Aceptar</button>
      <button mat-button color="primary" (click)="confirm()">Cancelar</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule]
})
export class DialogContent {
  constructor(
    public dialogRef: MatDialogRef<DialogContent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  confirm() {
    console.log(`${this.data.tipo} confirmado.`);
    this.dialogRef.close();
  }
}
