import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Здесь должна быть логика аутентификации
    }
  }
}
