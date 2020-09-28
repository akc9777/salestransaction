import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, 'Dismiss', {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: [action]
    });
  }
}
