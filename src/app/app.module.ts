import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JWTTnterCeptorService } from './jwttnter-ceptor.service';
import {JwtModule} from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EmployeeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
    config:{
      tokenGetter:()=>{
        return sessionStorage.getItem('currentUser')?
        JSON.parse(sessionStorage.getItem('currentUser')as string).token:null;
      }
    }
  })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JWTTnterCeptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
