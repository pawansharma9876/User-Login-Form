import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent, } from './app.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginformComponent } from './loginform/loginform.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
    RegistrationComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,LoginformComponent]
})
export class AppModule { }
