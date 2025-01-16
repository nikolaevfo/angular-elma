import {ChangeDetectorRef, Component, ElementRef, inject, Inject, OnInit} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {IProduct} from '../../shared/products/product.interface';
import { Observable } from 'rxjs';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { BASE_URL } from '../../shared/base-url/base-url.token';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {

    get products(): Observable<IProduct[] | null> {
        return this.productsStore.products$;
    }

    constructor(
        private readonly productsStore: ProductsStoreService,
    ){}

    ngOnInit(): void {
        this.productsStore.loadProducts();
    }

    protected trackBy (_index: number, product: IProduct) {
        return product._id;
    }
}
