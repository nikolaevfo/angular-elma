import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { baseUrl } from './base-url.const';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log(request);

        const newRequest = request.clone({
            url: baseUrl + request.url,
        })

        return next.handle(newRequest).pipe(
            // catchError((err) => of(['error'])),
            tap({
                error: (err) => {
                    console.log('tap', err)
                }
            })
        );
    }
}

