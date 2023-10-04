import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  constructor(private formBuilder: FormBuilder) {}
  loginCard: boolean = true;
  loginForm = this.formBuilder.group({
    email:["",Validators.required],
    password:["",Validators.required]

  })

  signupForm = this.formBuilder.group({
    name:["",Validators.required],
    email:["",Validators.required],
    password:["",Validators.required]

  })

  onSubmitLoginForm():void{
    console.log("Dados formulário de login", this.loginForm.value)
  }

  onSubmitSignupForm():void{
    console.log("Dados formulário de signup", this.signupForm.value)
  }

}
