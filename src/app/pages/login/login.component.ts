import {Component, inject, signal} from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  router = inject(Router)

  isPasswordVisible = signal<boolean>(false)

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  })

  onSubmit() {
    if(this.form.valid) {

      //@ts-ignore
      this.authService.login(this.form.value)
        .subscribe( (res: any) => {
            this.router.navigate([''])
            console.log(res)
          }

        )
    }

  }
}
