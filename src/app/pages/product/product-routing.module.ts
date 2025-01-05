import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductComponent} from './product.component';
import {DescriptionComponent} from './description/description.component';
import {TypeComponent} from './type/type.component';
import { questionCanAcitvateGuard } from '../../shared/test-guards/question-can-acitvate.guard';
import { questionCanDeactivateGuard } from '../../shared/test-guards/question-can-deactivate.guard';
import { questionCanActivateChildGuard } from '../../shared/test-guards/question-can-activate-child.guard';
import { productsResolver } from '../../shared/products/products.resolver';
import { redirectGuard } from '../../shared/test-guards/redirect.guard';

// export const productRoutes: Routes = [
const productRoutes: Routes = [
    {
        path: '',
        component: ProductComponent,
        // canActivate: [questionCanAcitvateGuard],
        // canActivateChild: [questionCanActivateChildGuard],
        resolve: {
            product: productsResolver,
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'description',
            },
            {
                path: 'description',
                component: DescriptionComponent,
            },
            {
                path: 'type',
                component: TypeComponent,
                // canDeactivate: [questionCanDeactivateGuard],
                canActivate: [redirectGuard],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule],
})
export class ProductRoutingModule {}
