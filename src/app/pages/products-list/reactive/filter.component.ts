import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, ValidationErrors, Validators} from '@angular/forms';
import { map, Observable, startWith, timer } from 'rxjs';

function isStringValidator(control: AbstractControl): ValidationErrors | null {
    const {value} = control;

    return Number(value) ? {isString: `Is not sting value - ${value}`} : null;
}

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnChanges {
    @Input() brands: string[] | null = null;

    @Output() changeFilter = new EventEmitter<any>();

    protected controlStringReactive = new FormControl('', {
        validators: [Validators.required, Validators.minLength(3),],
        // validators: [Validators.required, Validators.minLength(3), isStringValidator],
        asyncValidators: [this.isStringAsyncValidator.bind(this)],
    });
    protected stringTemplateForm = ''

    errors$ = this.controlStringReactive.statusChanges.pipe(
        map(() => this.controlStringReactive.errors),
        startWith(this.controlStringReactive.errors),
    );

    constructor(private readonly formBuilder: FormBuilder) {
        this. controlStringReactive .valueChanges
        .pipe(
            startWith(this. controlStringReactive .value)
        )
        .subscribe((value) => {
            console.log(value)
        })
    }

    ngOnChanges({}: SimpleChanges) {
    }

    private isStringAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
        console.log('isStringAsyncValidator');

        return timer(2 * 1000).pipe(map(() => isStringValidator(control)));
    }
}
