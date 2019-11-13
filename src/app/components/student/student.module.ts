import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentRoutingModule } from './student-routing.module';
import { ZorroModule } from 'src/app/zorro.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [StudentComponent, AddStudentComponent, StudentListComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ZorroModule,
    FormsModule,
    MaterialModule
  ]
})
export class StudentModule { }
