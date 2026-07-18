import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { MessageModule } from 'primeng/message';
import { AuthService } from '../../core/services/auth.service';
import { LoginDto, RegisterDto } from '../../core/models/auth.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    MessageModule,
  ],
  templateUrl: './auth.html',
})
export class Auth{

  constructor(
     private authService :AuthService,
     private router: Router
    ) {}

  isLogin: boolean = true;
  loading : boolean = false;
  errorMessage : string = '';

  loginData: LoginDto = {
    userNameOrEmailOrPhone: '',
    password: '',
  };

  registerData: RegisterDto = {
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: 'User',
  };

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.errorMessage = '';
  }

  onLogin() {
    this.loading = true;
    this.errorMessage = '';
    this.authService.login(this.loginData).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err.error?.message || 'Login failed. Please check your credentials.';
      },
    });
  }

  onRegister() {
    this.loading = true;
    this.errorMessage = '';
    this.authService.register(this.registerData).subscribe({
      next: () => {
        this.loading = false;
        this.isLogin = true;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
      },
    });
  }
}
