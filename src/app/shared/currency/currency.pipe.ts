import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currency',
    pure: true,
})
export class CurrencyPipe implements PipeTransform {

    transform(price: number | undefined, code?: string): unknown {
        // console.log('transform', price, code)
        return `${price || '-'} $`
    }

}
