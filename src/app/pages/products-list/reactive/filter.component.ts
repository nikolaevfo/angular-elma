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

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnChanges {
    @Input() brands: string[] | null = null;

    @Output() changeFilter = new EventEmitter<any>();

    constructor(private readonly formBuilder: FormBuilder) {

    }

    ngOnChanges({}: SimpleChanges) {
    }
}
