import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  // Define the FormGroup
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // email field with validators
    apiNumber: new FormControl('', [Validators.required, Validators.minLength(6)]), // password field with validators
  });

  // Method to handle form submission
  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
