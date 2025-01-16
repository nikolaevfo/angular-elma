import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {IProduct} from './product.interface';
import { productsMock } from './products.mock';
import { ProductsApiService } from './products-api.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ProductsStoreService {
    private readonly productsStore$ = new BehaviorSubject<IProduct[] | null>(null);

    private activeLoadProductsSubscription: Subscription | null = null;

    get products$(): Observable<IProduct[] | null> {
        return this.productsStore$.asObservable();
    }

    constructor(
        private readonly productsApiService: ProductsApiService,
    ){}

    loadProducts() {
        if (this.activeLoadProductsSubscription) {
            this.activeLoadProductsSubscription.unsubscribe();
        }

        this.activeLoadProductsSubscription = this.productsApiService
            .getProducts$()
            .subscribe(products => {
                this.productsStore$.next(products);

                this.activeLoadProductsSubscription = null;
            });
    }
}
