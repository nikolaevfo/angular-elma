import {Component, OnInit} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {IProduct} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
    private productsStore: IProduct[] | null = null;

    get products(): IProduct[] | null {
        console.log('products')
        return this.productsStore;
    }

    ngOnInit(): void {
        // this.productsStore = productsMock;
        setTimeout(() => {
            this.productsStore = productsMock;
        }, 3000);
    }
}
