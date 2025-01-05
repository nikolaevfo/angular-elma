import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProductsStoreService } from './products-store.service';
import { delay, filter } from 'rxjs';
import { IProduct } from './product.interface';

export const productsResolver: ResolveFn<IProduct> = (route, state) => {
    const productsStoreService = inject(ProductsStoreService);
    const productId = route.paramMap.get('id');

    productsStoreService.loadProduct(productId!);

    return productsStoreService.currentProduct$.pipe(filter(Boolean), delay(2000));
};
