import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './welcome/login/login.component';
import { RegisterComponent } from './welcome/register/register.component';
import { BillComponent } from '../app/customer/bill/bill.component';
import { MenuSelectionComponent } from './customer/menu.selection/menu.selection.component';
import { HomepageComponent } from './welcome/homepage/homepage.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'bill', component: BillComponent },
  { path: 'modify', component: MenuSelectionComponent },
  { path: 'home', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
