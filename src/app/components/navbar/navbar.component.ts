import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public role: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    let role_id = localStorage.getItem('role_id');
    if (role_id) {
      this.role = +role_id;
    }
  }

  logOut() {
    localStorage.clear();
    // window.location.reload();
    this.router.navigate(['/auth/login']);
  }
}
