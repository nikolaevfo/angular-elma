import { CanDeactivateFn } from '@angular/router';
import { question } from './question';

export const questionCanDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
    console.log(component, currentRoute, currentState, nextState)
    return question('Вы хотите покинуть данный путь?');
};
