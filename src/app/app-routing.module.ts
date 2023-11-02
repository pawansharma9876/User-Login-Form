import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { LoginformComponent } from './loginform/loginform.component';




const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'loginform', component: LoginformComponent },
  { path: '', redirectTo: '/loginform', pathMatch: 'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
