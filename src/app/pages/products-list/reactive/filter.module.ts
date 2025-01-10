import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FilterComponent} from './filter.component';
import { CounterInputModule } from '../../../shared/counter-input/counter-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorsModule } from './validators/validators.module';

@NgModule({
    declarations: [FilterComponent],
    imports: [
        CommonModule,
        MatInputModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        CounterInputModule,
        ReactiveFormsModule,
        FormsModule,
        ValidatorsModule,
    ],
    exports: [FilterComponent],
})
export class FilterModule {}
