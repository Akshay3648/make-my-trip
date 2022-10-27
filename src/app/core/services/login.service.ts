import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http_:HttpClient) { }

  login(email:string){
    return this.http_.get(environment.commonURL+"users/?email="+email)
  }

  singUp(user:any) {
    return this.http_.post(environment.commonURL+"users/",user)
  }
}
