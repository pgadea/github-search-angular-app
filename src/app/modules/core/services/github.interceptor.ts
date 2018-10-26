import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { User } from '../../shared/models/user.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class GitHubHttpInterceptor implements HttpInterceptor {
    constructor(private snackBar: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // Define a header that uses the Authorization token

    // const newRequest = req.clone({
    //   headers: req.headers.set(
    //     'Authorization',
    //     'token ...'
    //   )
    // });

        return next.handle(req)
            .do((event: HttpEvent<User>) => {
                if (event instanceof HttpResponse) {
                    console.log('OK');
                }
            },
        (error: HttpErrorResponse) => {
            if (error instanceof HttpErrorResponse) {
                const snackBarRef = this.snackBar.open(error.message);
            }
        }
      );
    }
}
