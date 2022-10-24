import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockingService {
  // private serverUrl: string = 'https://mocking.com'; //json server url
  private pathMocking: string = 'assets/mocking.json';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<any[]> {
    let dataUrl: string = `${this.pathMocking}`;
    return this.httpClient.get<any[]>(dataUrl);
    // .pipe(catchError());
  }
}
