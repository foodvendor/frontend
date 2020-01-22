import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide=true;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.loginForm.value);
  }
}
