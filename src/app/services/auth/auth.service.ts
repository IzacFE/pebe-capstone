import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginRequest, IRegisterRequest } from 'src/app/models/IAuth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private signinUrl: string = `http://localhost:8080/auth/signin`;
  private signupUrl: string = `http://localhost:8080/auth/signup`;

  constructor(private http: HttpClient) {}

  httpCreateLogin(body: ILoginRequest): Observable<Object> {
    return this.http.post(this.signinUrl, body);
  }

  httpCreateRegister(body: IRegisterRequest): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.post(this.signupUrl, body, { headers });
  }
}
