import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/User";
import {UserResponse} from "../interfaces/UserResponse";
import {Observable} from "rxjs";
import {LoginUser} from "../interfaces/LoginUser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  registration(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>("https://backend-aquamole.azurewebsites.net/auth/reg", user);
  }

  login(user: LoginUser): Observable<UserResponse> {
    return this.http.post<UserResponse>("https://backend-aquamole.azurewebsites.net/auth/log", user);
  }
}
