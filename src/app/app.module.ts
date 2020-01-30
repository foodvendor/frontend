import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeModule } from './welcome/welcome.module';
import { CustomerModule } from './customer/customer.module';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TodaysMenuComponent } from './todays-menu/todays-menu.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { MyAccountComponent } from './my-account/my-account.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderbarComponent,
    HomepageComponent,
    TodaysMenuComponent,
    ErrorComponent,
    LogoutComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WelcomeModule,
    CustomerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
