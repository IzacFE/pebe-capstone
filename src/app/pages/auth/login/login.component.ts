import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { Subject, takeUntil, switchMap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean = false;
  isLoading: boolean = false;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  private ngUnsubsribe: Subject<any> = new Subject();

  constructor(private router: Router, private messageService: MessageService) {}

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
    console.log(this.loginForm);
  }
}
