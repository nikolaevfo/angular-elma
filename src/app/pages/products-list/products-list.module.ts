import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductsListComponent } from './products-list.component';
import { CardModule } from './card/card.module';
import { IfModule } from '../../shared/if/if.module';
import { RouterModule } from '@angular/router';
import { CounterInputModule } from '../../shared/counter-input/counter-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterModule } from './reactive/filter.module';


@NgModule({
    declarations: [ProductsListComponent],
    imports: [
        CardModule,
        CommonModule,
        MatProgressSpinnerModule,
        IfModule,
        RouterModule,
        CounterInputModule,
        ReactiveFormsModule,
        FormsModule,
        FilterModule,
    ],
    exports: [ProductsListComponent],
})
export class ProductsListModule { }
