import { Component, OnInit } from '@angular/core';
import { HardcodedAuthServiceService } from '../service/hardcoded-auth-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  
})
export class LogoutComponent implements OnInit {

  constructor(
    private hardcodedAuthService:HardcodedAuthServiceService) { }

  ngOnInit() {
    this.hardcodedAuthService.logout();
  }

}
