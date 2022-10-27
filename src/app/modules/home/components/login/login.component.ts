import { trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ifLogin:boolean=true;

  loginForm: FormGroup;
  signUpForm: FormGroup;

  @ViewChild('modal')
  formModal!: ElementRef;

  constructor(private loginService_:LoginService, private router_:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required,Validators.email]),
      password: new FormControl("", [Validators.required,Validators.minLength(8)])
    })
    this.signUpForm = new FormGroup({
      name: new FormControl("", [Validators.required,Validators.minLength(3)]),
      email: new FormControl("", [Validators.required,Validators.email]),
      password: new FormControl("", [Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")]),
      confirmPassword: new FormControl("", [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")])
    })
   }

  ngOnInit(): void {
  }

  goToOtherForm() {
    this.ifLogin = !this.ifLogin;
  }

  login() {
    console.log(this.loginForm)
    if(this.loginForm.valid){
      console.log(this.loginForm.valid)
      const email:string =this.loginForm.value.email;
      const password:string = this.loginForm.value.password;
      this.loginService_.login(email).subscribe((response:any)=>{
        const user= response[0];
        if(user){
          if((user.email.toLowerCase() == email.toLowerCase())&&(user.password == password)){
            //sessionStorage.setItem('user',JSON.stringify({"session":"active","name":user.name}))
            sessionStorage.setItem('session','active')
            sessionStorage.setItem('userName',user.name)
            this.formModal.nativeElement.click();
            this.router_.navigate(["/"])
          }else {
            alert("Wrong Credentials. Please try again..")
          }
        }else {
          alert("Wrong Credentials. Please try again..")
        }
      });
    }
  }

  singUp() {

  }
}
