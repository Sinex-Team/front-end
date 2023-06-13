import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

  logOut() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.authService.authSubject.next(false);
    this.router.navigateByUrl('/reg');
  }
}
