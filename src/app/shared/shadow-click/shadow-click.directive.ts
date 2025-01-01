import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appShadowClick]'
})
export class ShadowClickDirective {
    protected boxShadowActive = false;

    @HostListener('click') onClick() {
        this.boxShadowActive = !this.boxShadowActive;
    }
    @HostBinding('style.boxShadow') get boxShadow() {
        return this.boxShadowActive ? 'inset 0 0 10px teal' : '';
    };
}
