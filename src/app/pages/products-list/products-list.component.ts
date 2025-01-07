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

    // protected readonly userNameControl = new FormControl('Fedor');
    // protected userAgeValue = 38;

    protected counter = new FormControl(10);
    protected counterDriven = 10;

    constructor(
        private readonly productsStoreService: ProductsStoreService,
        private readonly router: Router,
        private readonly cdr: ChangeDetectorRef,
    ){}

    ngOnInit(): void {
        this.productsStoreService.loadProducts();

        // this.userNameControl.valueChanges.subscribe(() => {
        //     console.log(this.userNameControl.value)
        // })

        // setInterval(() => {
        //     this.userAgeValue = 39
        // }, 3000)

        setTimeout(() => {
            this.counter.setValue(20);
        }, 3000)
        this.counter.valueChanges.subscribe(() => {
            console.log(this.counter.value)
        })

        setTimeout(() => {
            this.counterDriven = 30;
            this.cdr.markForCheck();
        }, 3000)
    }

    protected trackBy (_index: number, product: IProduct) {
        return product._id;
    }

    nagigateToProduct () {
        this.router.navigateByUrl('/product/id');
    }
}
