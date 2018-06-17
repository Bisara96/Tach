import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatTableModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatChipsModule,
  MatListModule,
  MatSelectModule,
  MatMenuModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    NoopAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatListModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    NoopAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatListModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
