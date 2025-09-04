import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn:'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  getAllEmployees():Observable<any>
  {
    //JWT
    // var currentUser={token:""};
    // var headers=new HttpHeaders();

    // var currentUserSession=sessionStorage.getItem("currentUser");
    // if(currentUserSession!=null)
    // {
    //   currentUser=JSON.parse( currentUserSession);
    //   headers=headers.set("Authorization","Bearer"+currentUser.token);
    // }
    // return this.httpClient.get<any>("https://localhost:44313/api/Employee",{headers:headers});
    return this.httpClient.get<any>("https://localhost:44313/api/Employee");
  }
  saveEmployee(newEmployee:Employee):Observable<Employee>
  {
    // var currentUser={token:""};
    // var headers=new HttpHeaders();

    // var currentUserSession=sessionStorage.getItem("currentUser");
    // if(currentUserSession!=null)
    // {
    //   currentUser=JSON.parse( currentUserSession);
    //   headers=headers.set("Authorization","Bearer"+currentUser.token);
    // }
    // return this.httpClient.post<any>("https://localhost:44313/api/Employee",newEmployee,{headers:headers});
    return this.httpClient.post<any>("https://localhost:44313/api/Employee",newEmployee);
   
   
  }
  updateEmployee(editEmployee:Employee):Observable<Employee>
  {
    // var currentUser={token:""};
    // var headers=new HttpHeaders();

    // var currentUserSession=sessionStorage.getItem("currentUser");
    // if(currentUserSession!=null)
    // {
    //   currentUser=JSON.parse( currentUserSession);
    //   headers=headers.set("Authorization","Bearer"+currentUser.token);
    // }
    // return this.httpClient.put<any>("https://localhost:44313/api/Employee",editEmployee,{headers:headers});
    return this.httpClient.put<any>("https://localhost:44313/api/Employee",editEmployee);
  }
  deleteEmployee(id:number):Observable<any>
  {
    // var currentUser={token:""};
    // var headers=new HttpHeaders();

    // var currentUserSession=sessionStorage.getItem("currentUser");
    // if(currentUserSession!=null)
    // {
    //   currentUser=JSON.parse( currentUserSession);
    //   headers=headers.set("Authorization","Bearer"+currentUser.token);
    // }
    // return this.httpClient.delete<any>("https://localhost:44313/api/Employee/" + id,{headers:headers});
    return this.httpClient.delete<any>("https://localhost:44313/api/Employee/" + id);
  }
}
