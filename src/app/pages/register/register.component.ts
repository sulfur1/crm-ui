import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="username" placeholder="Username">
      <input type="email" formControlName="email" placeholder="Email">
      <input type="password" formControlName="password" placeholder="Password">
      <button type="submit">Register</button>
    </form>
  `
})
export class RegisterComponent {
  registerForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Здесь должна быть логика регистрации
    }
  }
}
