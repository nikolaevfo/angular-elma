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
    // private productsStore: IProduct[] | null = null;

    // get products(): IProduct[] | null {
    //     return this.productsStore;
    // }

    // ngOnInit(): void {
    //     setTimeout(() => {
    //         this.productsStore = productsMock;
    //     }, 3000);
    // }

    get products(): Observable<IProduct[] | null> {
        return this.productsStore.products$;
    }

    // private productsStore = new ProductsStoreService();

    // private readonly elementRef = inject(ElementRef)

    protected showCard = true

    constructor(
        // @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        // private readonly changeDetectorRef: ChangeDetectorRef,
        // @Inject(ElementRef) private readonly elementRef: ElementRef,
        // private readonly elementRef: ElementRef,

        private readonly productsStore: ProductsStoreService,
        @Inject('name') private readonly name: string,
        @Inject('ProductsStoreService') private readonly productsStore2: ProductsStoreService,

        @Inject(BASE_URL) private readonly baseUrl: string,
    ){}

    ngOnInit(): void {
        this.productsStore.loadProducts();

        // console.log(this.productsStore)
        // console.log(this.name)
        // console.log(this.productsStore2)
        // console.log(this.productsStore2 === this.productsStore2)

        // console.log(this.baseUrl)

        setTimeout(() => {
            this.showCard = false;
        }, 2000)
    }

    protected trackBy (_index: number, product: IProduct) {
        return product._id;
        // return product.feedbacksCount;
    }
}
