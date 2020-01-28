import { Component, OnInit } from '@angular/core';
import { HardcodedAuthServiceService } from '../service/hardcoded-auth-service.service';


@Component({
  selector: 'app-headerbar',
  templateUrl: './headerbar.component.html',
  styleUrls: ['./headerbar.component.css']
})
export class HeaderbarComponent implements OnInit {

  //isUserLoggedIn:boolean =false;

  constructor(private hardcodedAuthService:HardcodedAuthServiceService) { }

  ngOnInit() {

    //this.isUserLoggedIn=this.hardcodedAuthService.isUserLoggedIn();
  }

}
