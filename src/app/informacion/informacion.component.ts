import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  constructor(private router: Router, public dialog: MatDialog) {}

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  saveChanges() {
    this.dialog.open(GuardarCambiosDialog, {
      width: '400px'
    });
    this.router.navigate(['/dashboard']);
  }
}

@Component({
  selector: 'app-guardar-cambios-dialog',
  template: `
    <h2 mat-dialog-title>Éxito</h2>
    <mat-dialog-content>
      <p>Los cambios se guardaron con éxito.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="closeDialog()">Aceptar</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule]
})
export class GuardarCambiosDialog {
  constructor(public dialogRef: MatDialogRef<GuardarCambiosDialog>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
