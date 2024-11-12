import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // Define the FormGroup
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // email field with validators
    password: new FormControl('', [Validators.required, Validators.minLength(6)]), // password field with validators
  });

  isShowPassword: Boolean = false;

  setIsShowPassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}
