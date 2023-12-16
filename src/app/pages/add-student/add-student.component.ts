import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  // studentForm = new FormGroup(
  //   {
  //     firstName: new FormControl('') ,
  //     lastName: new FormControl(''),
  //     usn: new FormControl(''),
  //     email: new FormControl('')
  //   }
  // );

  firstName: any = '';
  lastName: any = '';
  formData: any = null;
  studentForm = new FormGroup({
    firstName: new FormControl(this.firstName, Validators.required),
    lastName: new FormControl(this.lastName, Validators.required)
  });

  constructor(
    private formBuilder : FormBuilder,
    // private formGroup: FormGroup
  ){}


  submit(){
    console.log(this.studentForm.value);
    this.formData = this.studentForm.value;

  }

}
