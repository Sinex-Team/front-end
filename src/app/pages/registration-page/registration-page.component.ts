import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from "../../shared/services/auth.service";
import {User} from "../../shared/types/User";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
  registrationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthService) {}

  register(): void {
    if (!this.registrationForm.invalid) {
      const user: User = {firstname: this.registrationForm.controls.name.value!, lastname: this.registrationForm.controls.surname.value!,
        email: this.registrationForm.controls.email.value!, password: this.registrationForm.controls.password.value!}
      this.authService.registration(user);
      this.registrationForm.reset();
    }
  }
}
