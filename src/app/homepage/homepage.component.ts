import { Component, OnInit } from '@angular/core';
import { HardcodedAuthServiceService } from '../service/hardcoded-auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private hardcodedAuthenticationService:HardcodedAuthServiceService ,
    private router:Router) { }

  ngOnInit() {
    if(this.hardcodedAuthenticationService.isUserLoggedIn())
    {
      // this.router.navigate(['todaysMenu',this.name]);
    }
  }

}
