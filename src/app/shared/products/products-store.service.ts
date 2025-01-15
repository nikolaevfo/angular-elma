import {BehaviorSubject, Observable} from 'rxjs';
import {IProduct} from './product.interface';
import { productsMock } from './products.mock';


export class ProductsStoreService {
    private readonly productsStore$ = new BehaviorSubject<IProduct[] | null>(null);

    get products$(): Observable<IProduct[] | null> {
        return this.productsStore$.asObservable();
    }

    loadProducts() {
        // this.productsApiService.getProducts$().subscribe(products => {
        //     this.productsStore$.next(products);
        // });
        setTimeout(() => {
            this.productsStore$.next(productsMock);
        }, 1000);
    }
}
