import {ChangeDetectionStrategy, Component} from '@angular/core';
import {filter, map, of, switchMap, tap} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
    readonly product$ = this.activatedRoute.data.pipe(
        map(data => data['product']),
    );

    constructor(
        private readonly productsStoreService: ProductsStoreService,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
    ) {
        // console.log('ProductComponent data', this.activatedRoute.data)
    }

    navigateToType () {
        this.router.navigate(['./type'], {
            relativeTo: this.activatedRoute,
        });

        console.log(this.activatedRoute)
    }
}
