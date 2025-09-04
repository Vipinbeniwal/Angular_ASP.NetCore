import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
     login:Login=new Login();
     constructor(private loginService:LoginService,private router:Router){}
     loginErrorMessage:any="";

LoginClick()
{
  this.loginService.ChackUser(this.login).subscribe(
    (response)=>{
      this.router.navigateByUrl("/employee");
    },
    (error)=>{
     console.log(error);
     this.loginErrorMessage="LoginFaild";
    }
  )
}
}
