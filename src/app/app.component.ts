import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isLog = false;
  constructor(private authService: AuthService) {
    this.authService.authSubject.subscribe(loginState => {
      this.isLog = loginState;
    });
  }

  ngOnInit() {
    this.checkLog();
  }

  private checkLog() {
    if (localStorage.getItem('access_token')) {
      this.authService.authSubject.next(true);
    } else {
      this.authService.authSubject.next(false);
    }
  }
}
