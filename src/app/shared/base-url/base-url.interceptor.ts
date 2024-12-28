import {Inject, Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {catchError, Observable, of, tap} from 'rxjs';
import { baseUrl } from './base-url.const';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        // console.log(request);

        const newRequest = request.clone({
            url: baseUrl + request.url,
        })

        // return next.handle(newRequest)
        //     .pipe(
        //         // catchError((err) => of(['error'])),
        //         tap({
        //             error: (err) => {
        //                 console.log('tap', err)
        //             }
        //         })
        //     )
        return next.handle(newRequest);
    }
}
