import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-counter-input',
    templateUrl: './counter-input.component.html',
    styleUrls: ['./counter-input.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterInputComponent {
    @Input() step = 1;

    counter = 0;

    onChange: (newCounter: number) => void = () => {
        console.error('CounterInputComponent not connected');
    };

    onTouched: () => void = () => {
        console.error('CounterInputComponent not connected');
    };

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

    back() {
        this.counter -= this.step;

        console.log('back', this.counter);
    }

    next() {
        this.counter += this.step;

        console.log('next', this.counter);
    }
}
