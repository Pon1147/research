import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { radixArrowRight } from '@ng-icons/radix-icons';
import { User } from '../../model/user.model';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator, passwordValidator } from '../../validator/form-validator';

@Component({
  selector: 'app-form-ui',
  imports: [SharedModule, NgIcon, ReactiveFormsModule],
  templateUrl: './form-ui.component.html',
  styleUrl: './form-ui.component.scss',
  viewProviders: [provideIcons({ radixArrowRight })],
})
export class FormUiComponent implements OnInit, OnChanges {
  // Nơi khai báo các biến
  header = 'Log In';
  label = 'Rembmer ID';
  users: User[] = [
    {
      id: 1,
      email: 'user@ibm.com',
      password: '123456789Aa@.',
    },
    {
      id: 2,
      email: 'admin@ibm.com',
      password: '123456789Aa@.',
    },
  ];

  loginForm!: FormGroup;
  disabled = true;
  get email(): AbstractControl | null {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.loginForm.get('password');
  }

  get isEmailInvalid(): boolean {
    const emailControl = this.loginForm.get('email');
    if (!emailControl) return false;
    return !emailControl.valid && (emailControl.dirty || emailControl.touched);
  }

  get emailInvalidText(): string {
    const emailControl = this.loginForm.get('email');
    if (!emailControl) return '';
    if (emailControl.hasError('required')) {
      return 'Email là bắt buộc';
    }
    if (emailControl.hasError('invalidEmail')) {
      return 'Email không hợp lệ, vui lòng nhập đúng định dạng (ví dụ: username@ibm.com)';
    }
    return '';
  }
  get isPasswordInvalid(): boolean {
    const passwordControl = this.loginForm.get('password');
    if (!passwordControl) return false;
    return !passwordControl.valid && (passwordControl.dirty || passwordControl.touched);
  }

  get passwordInvalidText(): string {
    const passwordControl = this.loginForm.get('password');
    if (!passwordControl) return '';
    if (passwordControl.hasError('required')) {
      return 'Mật khẩu là bắt buộc';
    }
    if (passwordControl.hasError('invalidPassword')) {
      const errors = passwordControl.errors?.['invalidPassword'];
      const messages: string[] = [];
      if (!errors.minLength) messages.push('Mật khẩu phải có ít nhất 9 ký tự');
      if (!errors.hasUpperCase) messages.push('Mật khẩu phải có ít nhất 1 chữ cái in hoa');
      if (!errors.hasLowerCase) messages.push('Mật khẩu phải có ít nhất 1 chữ cái thường');
      if (!errors.hasNumber) messages.push('Mật khẩu phải có ít nhất 1 số');
      if (!errors.hasSpecialChar) messages.push('Mật khẩu phải có ít nhất 1 ký tự đặc biệt');
      return messages.join(', ');
    }
    return '';
  }

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['admin@ibm.com', [Validators.required, emailValidator()]],
      password: ['123456789Aa@.', [Validators.required, passwordValidator()]],
    });
    this.loginForm.statusChanges.subscribe(status => {
      this.disabled = status === 'INVALID';
    });
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      console.log('Form is invalid. Please check the errors.');
      console.log('Email is invalid. Please check the', this.email?.value);
      console.log('Password is invalid. Please check the', this.password?.value);
    } else {
      const matchingUser = this.users.find(
        (user: { email: any; password: any }) =>
          user.email === this.email?.value && user.password === this.password?.value
      );
      if (matchingUser) {
        console.log('Welcom Back Admin User: ', matchingUser.email);
        this.router.navigate(['/home']);
      } else {
        console.log('You log in with Email: ' + this.email?.value);
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  onIndeterminateChange($event: boolean) {
    throw new Error('Method not implemented.');
  }
  onChange($event: boolean) {
    throw new Error('Method not implemented.');
  }
}
