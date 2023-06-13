import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {LoginUser} from "../../shared/types/LoginUser";
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

  constructor(private authService: AuthService) {}

  login() {
    if (!this.loginForm.invalid) {
      const user: LoginUser = {email: this.loginForm.controls.email.value!, password: this.loginForm.controls.password.value!}
      this.authService.login(user);
      this.loginForm.reset();
    }
  }
}
