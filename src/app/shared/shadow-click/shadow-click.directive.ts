import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appShadowClick]'
})
export class ShadowClickDirective {
    // constructor(private readonly elementRef: ElementRef<unknown>) {
    //     console.log(this.elementRef.nativeElement)
    // }
    // protected boxShadow = '';
    protected boxShadowActive = false;

    @HostListener('click') onClick() {
        this.boxShadowActive = !this.boxShadowActive;
    }
    // @HostListener('click') onClick() {
    //     this.boxShadow = !this.boxShadow ? 'inset 0 0 10px teal' : '';
    // }
    // @HostListener('click', ['$event']) onClick(event: Event) {
    //     console.log(event)
    // }

    @HostBinding('style.boxShadow') get boxShadow() {
        return !this.boxShadowActive ? 'inset 0 0 10px teal' : '';
    };
    // @HostBinding('style.boxShadow') boxShadow = '';
}
