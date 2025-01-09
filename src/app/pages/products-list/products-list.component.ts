import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
    get products(): Observable<IProduct[] | null> {
        return this.productsStoreService.products$;
    }

    protected brands = ['Dexp', 'Rival', 'Harper', 'Lenovo'];

    constructor(
        private readonly productsStoreService: ProductsStoreService,
        private readonly router: Router,
        private readonly cdr: ChangeDetectorRef,
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
