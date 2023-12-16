import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  students : any =[
    {
      firstName: "Vighnesh",
      lastName: "V",
      usn: "168CS001",
      email:"vighnesh@mail.com"
    },
    {
      firstName: "Vighnesh",
      lastName: "V",
      usn: "168CS001",
      email:"vighnesh@mail.com"
    },{
      firstName: "Vighnesh",
      lastName: "V",
      usn: "168CS001",
      email:"vighnesh@mail.com"
    },{
      firstName: "Vighnesh",
      lastName: "V",
      usn: "168CS001",
      email:"vighnesh@mail.com"
    },
  ]

}
