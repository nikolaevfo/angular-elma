import {ChangeDetectorRef, Component, ElementRef, inject, Inject, OnInit} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {IProduct} from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { Observable } from 'rxjs';

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

    get products(): Observable<IProduct[] | null> {
        return this.productsStore.products$;
    }

    private productsStore = new ProductsStoreService();

    private readonly elementRef = inject(ElementRef)

    constructor(
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        // @Inject(ElementRef) private readonly elementRef: ElementRef,
        // private readonly cdr: ChangeDetectorRef,
    ){}

    ngOnInit(): void {
        // setTimeout(() => {
        //     this.productsStore = productsMock;
        // }, 1000);
        console.log(this.changeDetectorRef)
        console.log(this.elementRef)

        this.productsStore.loadProducts();
    }

    protected trackBy (_index: number, product: IProduct) {
        return product._id;
        // return product.feedbacksCount;
    }
}
