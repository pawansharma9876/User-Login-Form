import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  title="LoginPage";
       loginPage=new FormGroup({
       userEmail:new FormControl('',[Validators.required,Validators.email]),
       userPassword:new FormControl('')
       }) 
       loginUser(){
        console.warn(this.loginPage.value)
       }
       get userValidator(){
        return this.loginPage.get('userEmail')
       }
     
}
