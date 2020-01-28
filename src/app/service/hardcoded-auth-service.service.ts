import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthServiceService {

  constructor() { }

  authenticate(username,password){
    console.log(username,password)
    console.log('before'+this.isUserLoggedIn());
    if(username==='Pranjan28' && password ==='123456')
    {
      sessionStorage.setItem('authenticateUser',username);
      console.log('after'+this.isUserLoggedIn());
      return true;
    }
    return false;
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
