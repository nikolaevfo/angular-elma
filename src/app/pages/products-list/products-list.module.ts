import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductsListComponent } from './products-list.component';
import { CardModule } from './card/card.module';
import { IfModule } from '../../shared/if/if.module';
import { MyAsyncModule } from '../../shared/my-async/my-async.module';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [
        CardModule,
        CommonModule,
        MatProgressSpinnerModule,
        IfModule,
        MyAsyncModule,
    ],
    exports: [ProductsListComponent],
})
export class ProductsListModule { }
