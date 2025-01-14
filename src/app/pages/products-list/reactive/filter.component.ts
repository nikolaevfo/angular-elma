import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, NgModel, ValidationErrors, Validators} from '@angular/forms';
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
export class FilterComponent implements OnChanges, AfterViewInit {
    @Input() brands: string[] | null = null;

    @Output() changeFilter = new EventEmitter<any>();

    @ViewChild('ngModel') private ngModel?: NgModel;

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

    ngAfterViewInit(): void {
        console.log(this.ngModel)
        if (this.ngModel) {
            this.ngModel.valueChanges?.subscribe(console.log)
        }
    }

    ngOnChanges({}: SimpleChanges) {
    }

    private isStringAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
        console.log('isStringAsyncValidator');

        return timer(2 * 1000).pipe(map(() => isStringValidator(control)));
    }
}
