import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        success => {
          if (success) {
            // this.router.navigate(['/']);
            const userRole = this.authService.currentUserValue;
            if (userRole === 'group1') {
              this.router.navigate(['/form-one']);
            } else if (userRole === 'group2') {
              this.router.navigate(['/form-two']);
            }
          } else {
            console.error('Login failed');
            this.snackBar.open("Invalid Credentials", 'Try again!', {
              duration: 3000,
            });
          }
        }
      );
    }
  }
}
