import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title:"Home"
  },
  {
    path:"students",
    component: StudentsComponent,
    title:"Students"
  },
  {
    path:"add-student",
    component: AddStudentComponent,
    title:"Create Student"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
