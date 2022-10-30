import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { AuthService } from 'src/app/services/auth/auth.service';
// import { LoginmockingService } from 'src/app/services/mocking/loginmocking.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean = false;
  isLoading: boolean = false;

  loginForm: FormGroup = new FormGroup({
    usernameOrEmail: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    let roleId = localStorage.getItem('roleId');
    if (roleId) {
      if (+roleId == 1) {
        this.router.navigateByUrl('/auth/register');
      } else if (+roleId == 2) {
        this.router.navigateByUrl('/requester');
      } else if (+roleId == 3) {
        this.router.navigateByUrl('/buyer');
      }
    }
  }

  onShowErrorLogin(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Login Gagal!',
      detail: 'Input salah! Silahkan coba lagi',
    });
  }

  onShowSuccessLogin(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Login Success!',
      detail: `Selamat Datang!`,
    });
  }

  submitLogin() {
    this.isSubmitted = true;

    if (this.loginForm.invalid) return;

    this.isLoading = true;

    this.authService.httpCreateLogin(this.loginForm.value).subscribe(
      (res: any) => {
        if (res) {
          const token: string = res.accessToken;
          const role: number = res.roleId;
          localStorage.setItem('accessToken', token);
          localStorage.setItem('roleId', role + '');

          this.onShowSuccessLogin();

          setTimeout(() => {
            this.isSubmitted = false;
            this.isLoading = false;
            if (role == 1) {
              this.router.navigateByUrl('/auth/signup');
            } else if (role == 2) {
              this.router.navigateByUrl('/requester');
            } else if (role == 3) {
              this.router.navigateByUrl('/buyer');
            }
          }, 1000);
        } else {
          this.onShowErrorLogin();
        }
      },
      (error) => {
        this.onShowErrorLogin();
      }
    );
  }
}
