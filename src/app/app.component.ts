import { Component } from '@angular/core';
import{LoginService} from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject_JWT';
  constructor(public loginService:LoginService){}
  
  LogOutClick()
  {
    this.loginService.LogOut();
  }
}
