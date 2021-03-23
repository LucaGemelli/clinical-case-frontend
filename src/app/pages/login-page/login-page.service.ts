import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, config } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class LoginPageService {

    API: string = 'http://localhost:8080/api-prontuario-eletronico/login';

    RESET: string = 'http://localhost:8080/api-prontuario-eletronico/login/sendEmail';
   
    constructor(
        private http: HttpClient
    ) {}

    valid(user) {
        return this.http.post(this.API, {
            email: user.email,
            senha: user.senha
        }).pipe(
            catchError(this.handleError)
        );
    }

    reset(email) {
        return this.http.put(this.RESET, email)
        .pipe(
            catchError(this.handleError)
        );
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = error.error.message;
        } else {
          errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        alert(error.error.message);
        return throwError(errorMessage);
    };
}