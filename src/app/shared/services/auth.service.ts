import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../types/User";
import {UserResponse} from "../interfaces/UserResponse";
import {Subject} from "rxjs";
import {LoginUser} from "../types/LoginUser";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authSubject = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  registration(user: User) {
    this.http.post<UserResponse>("https://backend-aquamole.azurewebsites.net/auth/reg", user).subscribe(response => {
      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('refresh_token', response.refresh_token);
      this.router.navigateByUrl('/dashboard/home').then(() => {
        this.authSubject.next(true);
      });
    });
  }

  login(user: LoginUser) {
    this.http.post<UserResponse>("https://backend-aquamole.azurewebsites.net/auth/log", user).subscribe(response => {
      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('refresh_token', response.refresh_token);
      this.router.navigateByUrl('/dashboard/home').then(() => {
        this.authSubject.next(true);
      });
    });
  }

  logOut() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigateByUrl('/login').then(() => {
      this.authSubject.next(false);
    });
  }
  //
  // private isLoged() {
  //   let isToken = false;
  //   if (localStorage.getItem('access_token')) {
  //     isToken = true;
  //   }
  //   return isToken;
  // }
}
