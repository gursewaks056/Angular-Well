import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailValidatorDirective } from './directive/email-validator.directive';
import { PhoneValidatorDirective } from './directive/phone-validator.directive';
import { NameValidatorDirective } from './directive/name-validator.directive';
import { PassValidatorDirective } from './directive/pass-validator.directive';
import { InputValidationService } from './services/input-validation.service';
import { InOutService } from './services/in-out.service';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    HomeComponent,
    EmailValidatorDirective,
    PhoneValidatorDirective,
    NameValidatorDirective,
    PassValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [InputValidationService, InOutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
