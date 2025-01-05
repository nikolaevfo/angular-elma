import { CanActivateChildFn } from '@angular/router';
import { question } from './question';

export const questionCanActivateChildGuard: CanActivateChildFn = (childRoute, state) => {
    console.log(childRoute, state)
    return question('Вы хотите перейти по дочернуму пути?');
};
