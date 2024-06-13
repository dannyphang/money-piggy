import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  mode: string = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  signupForm: FormGroup = new FormGroup({
    displayName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  error: string = '';
  currentUserEmail: string = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.mode = this.route.snapshot.data['mode'];
  }

  login() {
    console.log(this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this.error = err.error.message;
      }
    });
  }

  signup() {
    console.log(this.signupForm.value);
    this.userService.signup(this.signupForm.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this.error = err.error.message;
      }
    });
  }

  forgotPasswordBtn() {

  }

  test() {
    this.userService.getCurrentUser().subscribe({
      next: (res) => {
        console.log(res);
        this.currentUserEmail = res.email;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // isEqualToConfirmPassword(control: AbstractControl) {
  //   return this.signupForm.get('password')?.value === control.value ? { isEqualToConfirmPassword: true } : null;
  // }
}
