import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, HomepageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,BrowserModule,
    NgbModule
  ],
  exports:[
    LoginComponent,
    HomepageComponent
   
  ]
})
export class WelcomeModule { }
