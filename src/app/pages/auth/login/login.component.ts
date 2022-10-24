import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { Subject, takeUntil, switchMap } from 'rxjs';
import { LoginmockingService } from 'src/app/services/mocking/loginmocking.service';

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
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  private ngUnsubsribe: Subject<any> = new Subject();

  constructor(
    private router: Router,
    private messageService: MessageService,
    private loginMocking: LoginmockingService
  ) {}

  ngOnInit(): void {}

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

    this.loginMocking.getLogin().subscribe(
      (res: any) => {
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('role', res.role_id);
        console.log(res.access_token);
        console.log(res);
      },
      (error) => {
        this.onShowErrorLogin();
      }
    );
  }
}
