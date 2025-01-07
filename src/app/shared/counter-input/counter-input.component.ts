import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-counter-input',
    templateUrl: './counter-input.component.html',
    styleUrls: ['./counter-input.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: CounterInputComponent,
        },
    ],
})
export class CounterInputComponent {
    @Input() step = 1;

    counter = 0;

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

    back() {
        this.counter -= this.step;
        console.log('back', this.counter);

        this.onChange(this.counter);
        this.onTouched();
    }

    next() {
        this.counter += this.step;
        console.log('next', this.counter);

        this.onChange(this.counter);
        this.onTouched();
    }

    writeValue(newCounter: number) {
        this.counter = newCounter;

        console.log('writeValue', newCounter);

        this.changeDetectorRef.markForCheck();
    }

    onChange: (newCounter: number) => void = () => {
        console.error('CounterInputComponent not connected');
    }

    registerOnChange(fn: (newCounter: number) => void) {
        console.log(fn);
        this.onChange = fn;
    }

    onTouched: () => void = () => {
        console.error('CounterInputComponent not connected');
    }

    registerOnTouched(fn: () => void) {
        this.onTouched = fn;
    }

    isDisabled = false;

    setDisabledState(isDisabled: boolean) {
        this.isDisabled = isDisabled;

        this.changeDetectorRef.markForCheck();
    }
}
