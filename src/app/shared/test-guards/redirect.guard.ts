import { CanActivateFn, Router } from '@angular/router';
import { question } from './question';
import { inject } from '@angular/core';

export const redirectGuard: CanActivateFn = (route, state) => {
    return (
        question('Хотите открыть данный путь?') || inject(Router).createUrlTree(['/products-list'])
    );
};
