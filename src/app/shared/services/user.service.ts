import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GEnericResponse } from '../interfaces/interfaces';
import { environment } from 'environments/environment';
import { Token } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private env:any=environment;

  constructor(private client:HttpClient) { }

  public getHeadersRESTToken(): HttpHeaders {
    let headers= new HttpHeaders();
    let token = localStorage.getItem("token");
    headers = headers.set('Content-Type','application/json').set('Authorization',token);
    return headers;

  }

  public getUsers():Observable<GEnericResponse>{

    return this.client.get<GEnericResponse>(
      this.env.baseUrl+"/user",{headers:this.getHeadersRESTToken()});
  }
}

