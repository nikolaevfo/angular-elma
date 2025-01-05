import { Component, OnInit} from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
    get products(): Observable<IProduct[] | null> {
        return this.productsStoreService.products$;
    }

    constructor(
        private readonly productsStoreService: ProductsStoreService,
        private readonly router: Router
    ){}

    ngOnInit(): void {

        this.productsStoreService.loadProducts();
    }

    protected trackBy (_index: number, product: IProduct) {
        return product._id;
    }

    nagigateToProduct () {
        this.router.navigateByUrl('/product/id');
    }
}
