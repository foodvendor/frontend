import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/student/login.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {


  studentDetails :Student;
  constructor(private loginsrvc:LoginService) {
    this.studentDetails=new Student();

   }

  ngOnInit() {
    console.log(sessionStorage.getItem('authUser'))
    this.loginsrvc.getUserDetails(sessionStorage.getItem('authUser')).subscribe(
      response =>{ 
        console.log(response);
        this.studentDetails=response;
      }
    )
      
  }

 
  updateDetails(studentDetails){
    //this.studentDetails=JSON.parse(sessionStorage.getItem('authUser'));
    this.loginsrvc.updateStudentDetails(studentDetails).then(
      response =>{ 
        console.log(response);
        this.studentDetails=response;
      }
    )
  }


}
