import { ChangeDetectorRef, Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, timer, map, tap } from 'rxjs';

@Directive({
    selector: '[appIsStringAsyncValidator]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            multi: true,
            useExisting: IsStringAsyncValidatorDirective,
        },
    ]
})
export class IsStringAsyncValidatorDirective implements AsyncValidator {
    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

    validate({value}: AbstractControl): Observable<ValidationErrors | null> {
        console.log('isStringAsyncValidator');

        return timer(2 * 1000).pipe(
            map(() => (Number(value) ? {isString: `Is not sting value - ${value}`} : null)),
            tap(() => {
                this.changeDetectorRef.markForCheck();
            }),
        );
    }
}
