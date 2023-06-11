import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {LoginUser} from "../../shared/interfaces/LoginUser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (!this.loginForm.invalid) {
      const user: LoginUser = {email: this.loginForm.controls.email.value!, password: this.loginForm.controls.password.value!}
      this.authService.login(user).subscribe(response => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
        this.loginForm.reset();
        this.router.navigate(['/dashboard/home']);
      });
    }
  }
}
