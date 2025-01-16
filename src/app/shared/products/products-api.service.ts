import {map, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {IProduct} from './product.interface';
import {productsMock} from './products.mock';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../base-url/base-url.const';

@Injectable()
export class ProductsApiService {
    constructor(private readonly httpClient: HttpClient) {}

    getProducts$(): Observable<IProduct[]> {
        return this.httpClient.get<IProduct[]>(`/products`, {
            // headers: new HttpHeaders({'hello': 'Fedor'}),
            // params: {text: '123'},
        })
    }
}
