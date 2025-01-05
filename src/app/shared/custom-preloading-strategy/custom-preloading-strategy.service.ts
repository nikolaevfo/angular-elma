import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomPreloadingStatagyService implements PreloadingStrategy {

    constructor() { }

    preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
        if (route.data?.['needPreload']) {
            console.log('Preloading', route.path);

            return load();
        }

        console.log('NO Preloading', route.path);

        return EMPTY;
    }
}
