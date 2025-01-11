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
import {AbstractControl, Form, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, Validators} from '@angular/forms';
import { map, Observable, startWith, timer } from 'rxjs';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnChanges, OnInit {
    @Input() brands: string[] | null = null;

    @Output() changeFilter = new EventEmitter<any>();

    @ViewChild('ngForm', {static: true}) private readonly ngForm?: NgForm;

    // readonly filterForm = new FormGroup({
    //     name: new FormControl(''),
    //     brands: new FormArray<FormControl<boolean>>([]),
    //     priceRange: new FormGroup({
    //         min: new FormControl(0),
    //         max: new FormControl(999999),
    //     }),
    // });

    readonly filterForm = this.formBuilder.group({
        // name: '',
        name: ['', {options: 'change'}],
        brands: this.formBuilder.array<FormControl<boolean>>([]),
        priceRange: this.formBuilder.group({
            min: 0,
            max: 999999,
        }),
    });

    constructor(private readonly formBuilder: FormBuilder) {
        // this.filterForm.valueChanges.subscribe((form) => {
        //     console.log(form);
        // });
    }

    ngOnInit(): void {
        console.log(this.ngForm)
        this.ngForm?.valueChanges?.subscribe((value) => {
            console.log(value)
        })
    }

    ngOnChanges({brands}: SimpleChanges) {
        if (brands) {
            this.updateBrandsControl();
        }
    }

    private updateBrandsControl() {
        const brandsControls: Array<FormControl<boolean>> = this.brands
            ? this.brands.map(() => new FormControl(false) as FormControl<boolean>)
            : [];

        const brandsForm = new FormArray<FormControl<boolean>>(brandsControls);

        this.filterForm.setControl('brands', brandsForm);
    }

    onSubmit(values: any) {
        console.log(values);
    }
}
