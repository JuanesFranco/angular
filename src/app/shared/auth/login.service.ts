import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GEnericResponse } from '../interfaces/interfaces';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private env:any=environment;

  constructor(private client:HttpClient) { }
  
  public login(user,pwd):Observable<GEnericResponse>{
    const body = {"username":user,"password":pwd};
      return this.client.post<GEnericResponse>(this.env.baseUrl+"/login",body);
  }
}
