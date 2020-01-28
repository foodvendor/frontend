import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Student} from '../../../app/model/student';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })    
}
@Injectable({
  providedIn: 'root'
})


export class LoginService {

  constructor(
    private http:HttpClient
  ) { }
  

  getLoginDetails(student){
    return this.http.post<Student>("http://localhost:8080/authenticate",student).toPromise();
  }

  isUserLoggedIn()//check if session storage contains the required user entry
  {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user ===null)
  }

logout()
{
  sessionStorage.removeItem('authenticateUser');
}
}
