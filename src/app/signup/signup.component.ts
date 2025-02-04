import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupData = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  };

  passwordVisible = false;
  confirmPasswordVisible = false;

  constructor(private router: Router) {}

  togglePasswordVisibility(field: 'password' | 'confirmPassword') {
    if (field === 'password') {
      this.passwordVisible = !this.passwordVisible;
    } else {
      this.confirmPasswordVisible = !this.confirmPasswordVisible;
    }
  }

  onSubmit() {
    if (this.signupData.password !== this.signupData.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    
    console.log('Signup submitted:', this.signupData);
    // Add your signup logic here
    // For now, just redirect to login
    this.router.navigate(['/login']);
  }
}
