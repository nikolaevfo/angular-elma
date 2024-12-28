import {map, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {IProduct} from './product.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'https://gzu6sdkll32d4.elma365.ru/api/extensions/46370129-a821-4e0e-a0d8-eb69b9f9718f/script'

@Injectable()
export class ProductsApiService {
    constructor(private readonly httpClient: HttpClient) {}

    getProducts$(): Observable<IProduct[]> {
        // return of({data: {items: productsMock}}).pipe(map(({data}) => data.items));
        return this.httpClient.get<any>(`/products`, {
            // headers: new HttpHeaders({'hello': 'Fedor'}),
            // params: {text: '123'},
        })
        // return this.httpClient.get<any>(`${baseUrl}/products`, {
        //     // headers: new HttpHeaders({'hello': 'Fedor'}),
        //     // params: {text: '123'},
        // })
    }
}
