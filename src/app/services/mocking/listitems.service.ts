import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListitemsService {
  private pathMocking: string = 'assets/listitems.json';

  constructor(private httpClient: HttpClient) {}

  public getItems(): Observable<any[]> {
    let dataUrl: string = `${this.pathMocking}`;
    return this.httpClient.get<any[]>(dataUrl);
    // .pipe(catchError());
  }
}
