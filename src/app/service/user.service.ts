import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private baseUrl: string = '/api'; // Use the proxy prefix
  private baseUrl: string = 'https://freeapi.gerasim.in/api'; // Full API URL
  private apiUrl = 'https://cors-anywhere.herokuapp.com/https://freeapi.gerasim.in/api/JWT/login';



  constructor(private http : HttpClient) { }

    // onlogin(obj:any){
    //   return this.http.post("https://freeapi.gerasim.in/api/JWT/login", obj)
      
    // }

    // onLogin(data: any): Observable<any> {
    //   console.log("Test test1");
    //   console.log(data);
    //   console.log("Test test1");
    //   return this.http.post("https://freeapi.gerasim.in/api/JWT/login", data);
    // }
 

    // onLogin(data: any): Observable<any> {
    //   console.log("Test Omkar 1");
    //   console.log(`${this.baseUrl}/JWT/login`);
      
    //   return this.http.post(`${this.baseUrl}/JWT/login`, data);


    // }

    onLogin(data: any): Observable<any> {
      console.log("Sending login request with data:", data);
      return this.http.post(`${this.baseUrl}/JWT/login`, data);
    }
}
