import { Component } from '@angular/core';
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLog = false;
  constructor(private authService: AuthService) {
    this.authService.authSubject.subscribe(loginState => {
      this.isLog = loginState;
      console.log(loginState);
    });
  }
}
