import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../../../app/model/student';
import { LoginService } from 'src/app/service/student/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string = '';
  studentName: '';
  student: Student;
  errorMessage = 'Invalid credintals'
  invalidLogin = false
  //router is required when one component want to make use of another component
  //Router is the dependency of the login component
  // private loginsvc:LoginService
  constructor(private router: Router,
    private loginsvc: LoginService) {
    this.student = new Student();
  }

  ngOnInit() {
  }

  handleLogin(student) {
    console.log("Inside handleLogin");
    console.log(student);

    this.loginsvc.getLoginDetails(student).then(
      response => {

        sessionStorage.setItem('authenticateUser', response.studentName);
        sessionStorage.setItem('authUser', JSON.stringify(response.studentId));

        this.router.navigate(['/todaysMenu', response.studentName]);
        console.log(response);

      }).catch(error => {
        this.invalidLogin = true
      })


  }
}
