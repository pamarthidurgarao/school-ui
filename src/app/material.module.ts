import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({

  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule 
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule],
    providers: [MatDatepickerModule]
})
export class MaterialModule { }
