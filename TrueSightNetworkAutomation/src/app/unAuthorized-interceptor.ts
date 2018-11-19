import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class UnAuthorizedInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private router: Router) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
               console.log('Inside Response Interceptor');
            }
        }, (err: any) => {
            if (err.status === 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                this.router.navigate(['/login']);
            }
        }));
    }
}
