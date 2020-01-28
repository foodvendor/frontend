import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthServiceService } from './hardcoded-auth-service.service';
import { LoginService } from './student/login.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  
  constructor(private loginsvc:LoginService ,
               private router:Router
    ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
{
 if(this.loginsvc.isUserLoggedIn())
 {
  return true;
 }
 this.router.navigate(['login'])
 return false; 
}
}
