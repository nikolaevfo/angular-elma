import { CanActivateFn } from '@angular/router';
import { question } from './question';

export const questionCanAcitvateGuard: CanActivateFn = (route, state) => {
    console.log(route, state);
    return question('Вы хотите перейти по данному пути?');
};
