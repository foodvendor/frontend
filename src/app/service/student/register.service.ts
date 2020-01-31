import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/model/student';


student: Student;
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerStudentDetails(student) {
   console.log(student);
   return this.http.post<any>("http://localhost:8080/register",student).toPromise();
  
  }
}