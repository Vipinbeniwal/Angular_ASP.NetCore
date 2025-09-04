import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUserName:any="";

  constructor(private httpclient:HttpClient,private router:Router,private jwtHelperService:JwtHelperService) { }
  ChackUser(login:Login):Observable<any>
  {
    return this.httpclient.post<any>("https://localhost:44313/api/Accounts/Authenticate",login)
    .pipe(map(u=>{
      if(u)
      
        this.currentUserName=u.username;
        sessionStorage["currentUser"]=JSON.stringify(u);
      
      return u;
    }))
  }
  LogOut()
  {
    this.currentUserName="";
    sessionStorage.removeItem("currentUser");
    this.router.navigateByUrl("/login");
  }
  public isAutherticated():boolean
  {
    if(this.jwtHelperService.isTokenExpired())
    {
      return false;
    }
    else
    {
      return true;
    }
  }
}

