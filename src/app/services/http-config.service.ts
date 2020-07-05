import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpConfigService {

  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

    getRequest (getUrl, getHeader): Observable<any> {
      return this.http.get(getUrl,getHeader)
        .pipe(
          catchError(this.handleError)
        );
    }

  postRequest (postUrl, postDetails, postHeader): Observable<any> {
    return this.http.post(postUrl, postDetails, postHeader)
      .pipe(
        catchError(this.handleError)
      );
  }
}
