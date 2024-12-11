import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShadowClickDirective } from './shadow-click.directive';



@NgModule({
    declarations: [
        ShadowClickDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ShadowClickDirective
    ]
})
export class ShadowClickModule { }
