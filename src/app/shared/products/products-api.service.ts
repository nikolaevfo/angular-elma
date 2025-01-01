import {map, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {IProduct} from './product.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'https://gzu6sdkll32d4.elma365.ru/api/extensions/46370129-a821-4e0e-a0d8-eb69b9f9718f/script'

@Injectable()
export class ProductsApiService {
    constructor(private readonly httpClient: HttpClient) {}

    getProducts$(): Observable<IProduct[]> {
        return this.httpClient.get<IProduct[]>(`/products`)
    }

    getProduct$(id: string): Observable<IProduct | undefined> {
        return this.httpClient.post<IProduct>(`/product`, JSON.stringify({id}));
    }
}
