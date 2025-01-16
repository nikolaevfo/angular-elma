import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
    @Input() product: IProduct | null = null;

    @Output() readonly buy = new EventEmitter<IProduct['_id']>();

    constructor(
        private readonly cdr: ChangeDetectorRef,
    ){}

    protected get currency () {
        console.log('get currency')
        return `${this.product?.price} $`
    }

    ngOnInit(): void {
        setInterval(() => {
            this.cdr.markForCheck();
        })
    }

    onProductBuy(event: Event) {
        event.stopPropagation();

        this.buy.emit(this.product!._id);
    }

    isStarActive(starIndex: number): boolean {
        return !!(this.product && this.product.rating >= starIndex);
    }
}
