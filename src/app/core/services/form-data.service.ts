import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  submitForm(formData: any): Observable<any> {
    console.log('Submitting form data:', formData);
    return this.http.post(`${this.apiUrl}/submit`, formData).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorHandler.handleError(error);
        return throwError(() => new Error(error.message));
      })
    );
  }
}
