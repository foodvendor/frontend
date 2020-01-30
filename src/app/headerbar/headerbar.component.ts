import { Component, OnInit } from '@angular/core';
import { HardcodedAuthServiceService } from '../service/hardcoded-auth-service.service';
import { LoginService } from '../service/student/login.service';


@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  
})
export class HeaderbarComponent implements OnInit {

  //isUserLoggedIn:boolean =false;

  constructor(public loginSrvc: LoginService) { }

  ngOnInit() {

    //this.isUserLoggedIn=this.hardcodedAuthService.isUserLoggedIn();
  }

}
