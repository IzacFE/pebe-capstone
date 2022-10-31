import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequesterService {
  private baseUrl: string = `http://localhost:8080/api/v1`;

  constructor(private http: HttpClient) {}

  httpItemList(): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.get(`${this.baseUrl}/items`, {
      headers,
    });
  }

  httpGetAllStock(page: any): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.get(`${this.baseUrl}/items?page=${page}&size=10`, {
      headers,
    });
  }

  httpGetAllMinimumStock(page: any): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.get(
      `${this.baseUrl}/items/stock-minimal?size=10&page=${page}`,
      {
        headers,
      }
    );
  }

  httpSearchItem(item: any): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.get(`${this.baseUrl}/items/items?name=${item}`, {
      headers,
    });
  }

  httpCreateRequestOrder(body: any): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.post(`${this.baseUrl}/requests/add`, body, {
      headers,
    });
  }

  httpGetRequestOrder(): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.get(`${this.baseUrl}/requests/u`, {
      headers,
    });
  }

  httpExportItem(): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.get(`${this.baseUrl}/items/export`, {
      headers,
    });
  }
}
