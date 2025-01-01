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
    readonly product$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('id')),
        filter(Boolean),
        tap(productId => {
            // console.log('tap', productId);
            this.productsStoreService.loadProduct(productId);
        }),
        switchMap(() => this.productsStoreService.currentProduct$),
    );
    // readonly product$ = of('96-planset-dexp-ursus-s290-32-gb-3g-cernyj').pipe(
    //     tap(productId => {
    //         // console.log('tap', productId);
    //         this.productsStoreService.loadProduct(productId);
    //     }),
    //     switchMap(() => this.productsStoreService.currentProduct$),
    // );

    constructor(
        private readonly productsStoreService: ProductsStoreService,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
    ) {
    }

    navigateToType () {
        // this.router.navigate(['./type']);
        // this.router.navigateByUrl('./type');

        // const urlTree = this.router.createUrlTree(['./type'], {
        //     relativeTo: this.activatedRoute,
        // });
        // this.router.navigateByUrl(urlTree);

        this.router.navigate(['./type'], {
            relativeTo: this.activatedRoute,
            // queryParams: {text: 'Fedor'},
        });

        console.log(this.activatedRoute)
    }
}
