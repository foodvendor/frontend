import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username =''
  password :any;
  errormsg = 'invalid Credentials'
  invalidLogin = false
  // hide=true;
  // loginForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // })
  constructor(private router:Router) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username=='ashish' && this.password==12345)
    {
      console.log('login successful ' + this.username + this.password)
      this.router.navigate(['modify'])
      this.invalidLogin = false
    }
    else{
      console.log('login successful ' + this.username + this.password)
      console.log('login unsuccessful')
      this.invalidLogin = true
    }
    
  }
}
