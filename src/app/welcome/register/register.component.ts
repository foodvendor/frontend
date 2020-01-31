import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/service/student/register.service';
import { Student } from 'src/app/model/student';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  student: Student;
  successful = false;
  sucessfulMessage = "User successfully registered";
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) {
    this.student = new Student();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(student) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value)) 

    this.registerService.registerStudentDetails(student).then(

      response => {

        this.successful = true;
      }
    ).catch(error => {
      console.log("invalid registration")
    })
  }
}
