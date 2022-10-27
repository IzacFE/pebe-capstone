import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {
  isSubmitted: boolean = false;
  isLoading: boolean = false;

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    roleId: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  onShowErrorLogin(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Buat Akun Gagal!',
      detail: 'Input salah! Silahkan coba lagi',
    });
  }

  onShowSuccessLogin(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Akun Berhasil Dibuat!',
      detail: `Akun sudah bisa dipakai`,
    });
  }

  submitRegister() {
    this.isSubmitted = true;

    if (this.registerForm.invalid) return;

    this.isLoading = true;

    this.authService.httpCreateRegister(this.registerForm.value).subscribe(
      (res: any) => {
        if (res) {
          this.onShowSuccessLogin();
          this.registerForm.reset();

          setTimeout(() => {
            this.isSubmitted = false;
            this.isLoading = false;
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
