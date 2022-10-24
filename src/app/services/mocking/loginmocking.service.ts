import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginmockingService {
  private pathMocking: string = 'assets/login.json';

  constructor(private httpClient: HttpClient) {}

  public getLogin(): Observable<any[]> {
    let dataUrl: string = `${this.pathMocking}`;
    return this.httpClient.get<any[]>(dataUrl);
    // .pipe(catchError());
  }
}
