import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { ICarouselContext } from './carousel-context';
import { BehaviorSubject, map } from 'rxjs';

@Directive({
    selector: '[appCarousel]'
})
export class CarouselDirective<T> implements OnChanges, OnInit {
    @Input() appCarouselOf: T[] | null | undefined;

    private readonly currentIndex$ = new BehaviorSubject<number>(0)

    ngOnChanges({appCarouselOf}: SimpleChanges) {
        if (appCarouselOf) {
            this.updateView();
        }
    }

    ngOnInit() {
        this.listenCurrentIndex();
    }

    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly templateRef: TemplateRef<ICarouselContext<T>>,
    ) { }

    private listenCurrentIndex() {
        this.currentIndex$
            .pipe(map(currentIndex => this.getCurrentContext(currentIndex)))
            .subscribe(context => {
                this.viewContainerRef.clear();
                this.viewContainerRef.createEmbeddedView(this.templateRef, context);
            });
    }

    private getCurrentContext(currentIndex: number): ICarouselContext<T> {
        return {
            $implicit: this.appCarouselOf![currentIndex],
            next: () => {
                this.next();
            },
            back: () => {
                this.back();
            },
        };
    }

    private next() {
        const nextIndex = this.currentIndex$.value + 1;
        const newIndex = nextIndex < this.appCarouselOf!.length ? nextIndex : 0;

        this.currentIndex$.next(newIndex);
    }

    private back() {
        const previousIndex = this.currentIndex$.value - 1;
        const lastIndex = this.appCarouselOf!.length - 1;
        const newIndex = previousIndex < 0 ? lastIndex : previousIndex;

        this.currentIndex$.next(newIndex);
    }

    private updateView() {
        const shouldShowItems = this.appCarouselOf?.length;

        if (shouldShowItems) {
            this.currentIndex$.next(0);
        }

        this.viewContainerRef.clear();
    }


}
