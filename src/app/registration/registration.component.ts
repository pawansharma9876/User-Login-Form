import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
 userDetail=new FormGroup({ 
 fName:new FormControl(''),
 lName:new FormControl(''),
 usrEmail:new FormControl('',[Validators.required,Validators.email]),
 password:new FormControl('',[Validators.required,Validators.minLength(8)])



})
signUp(){
  console.warn(this.userDetail.value)
}
get emailValidator(){
  return this.userDetail.get('usrEmail')
 }
 get pwdValidator(){
  return this.userDetail.get('password')
 }
}
