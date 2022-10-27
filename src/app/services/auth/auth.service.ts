import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginRequest, IRegisterRequest } from 'src/app/models/IAuth';
import { environment } from 'src/environments/environment';

const httpOptions: any = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private signinUrl: string = `${environment.baseUrl}/auth/signin`;
  private signupUrl: string = `${environment.baseUrl}/auth/signup`;

  constructor(private http: HttpClient) {}

  httpCreateLogin(body: ILoginRequest): Observable<Object> {
    return this.http.post(this.signinUrl, body);
  }

  httpCreateRegister(body: IRegisterRequest): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    };

    return this.http.post(this.signupUrl, body, { headers });
  }
}
