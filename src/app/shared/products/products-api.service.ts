import {delay, map, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {IProduct} from './product.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { productsMock } from './products.mock';

const baseUrl = 'https://gzu6sdkll32d4.elma365.ru/api/extensions/46370129-a821-4e0e-a0d8-eb69b9f9718f/script'

@Injectable()
export class ProductsApiService {
    constructor(private readonly httpClient: HttpClient) {}

    getProducts$(): Observable<IProduct[]> {
        // return this.httpClient.get<IProduct[]>(`/products`)
        return of(productsMock).pipe(delay(1000))
    }

    getProduct$(id: string): Observable<IProduct | undefined> {
        // return this.httpClient.post<IProduct>(`/product`, JSON.stringify({id}));
        return of(productsMock).pipe(
            map((items) => {
                return items.find((i) => i._id === id);
            }),
            delay(1000),
        )
    }
}
