import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './welcome/login/login.component';
import { RegisterComponent } from './welcome/register/register.component';
import { BillComponent } from '../app/customer/bill/bill.component';
import { MenuSelectionComponent } from './customer/menu.selection/menu.selection.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TodaysMenuComponent } from './todays-menu/todays-menu.component';
import { RouteGuardService } from './service/route-guard.service';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { MyAccountComponent } from './my-account/my-account.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homepage', component: HomepageComponent ,canActivate:[RouteGuardService]},
  { path: 'myAccount', component: MyAccountComponent,canActivate:[RouteGuardService]},
  { path: 'todaysMenu/:name', component: TodaysMenuComponent ,canActivate:[RouteGuardService]},
  { path: 'bill', component: BillComponent ,canActivate:[RouteGuardService]},
  { path: 'modify', component: MenuSelectionComponent ,canActivate:[RouteGuardService]},
  {path: 'logout' ,component:LogoutComponent},
  { path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
