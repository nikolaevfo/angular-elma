import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appIf]'
})
export class IfDirective<T> {
    @Input() set appIf(value: T | null | undefined)  {
        const isContainerHasView = this.viewContainerRef.length;

        if (value && !isContainerHasView) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);

            return;
        }

        if (!value && isContainerHasView) {
            this.viewContainerRef.clear();
        }
    };

    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly templateRef: TemplateRef<unknown>,
    ) { }

}
