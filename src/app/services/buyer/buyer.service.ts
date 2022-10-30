import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuyerService {
  private baseUrl: string = `http://localhost:8080/api/v1`;

  constructor(private http: HttpClient) {}

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

  httpGetAllRequestOrder(): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.get(`${this.baseUrl}/requests`, {
      headers,
    });
  }

  httpCreatePurchaseOrder(body: any): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.post(`${this.baseUrl}/purchase/add`, body, {
      headers,
    });
  }

  httpPurchaseHistory(): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.get(`${this.baseUrl}/receipt/history`, {
      headers,
    });
  }

  httpAddItem(body: any): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.post(`${this.baseUrl}/items/upload`, body, {
      headers,
    });
  }

  httpPlusStock(body: any): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.put(`${this.baseUrl}/items/updateStock`, body, {
      headers,
    });
  }

  httpMinusStock(body: any): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.put(`${this.baseUrl}/items/reduceStock`, body, {
      headers,
    });
  }

  httpReceivedPurchase(body: any): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.post(`${this.baseUrl}/items/reduceStock`, body, {
      headers,
    });
  }

  httpExportItems(): Observable<Object> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };

    return this.http.get(`${this.baseUrl}/items/export`, {
      headers,
    });
  }
}
