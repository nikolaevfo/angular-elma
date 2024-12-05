import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApplicationConfig } from '../../shared/app-config/app-config.mock';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    protected readonly logoSrc = '../../../favicon.ico'

    @Input() appConfig?: ApplicationConfig;

    @Output() menuClick  = new EventEmitter<MouseEvent>;

    protected onMenuClick (event: MouseEvent) {
        event.stopPropagation();

        this.menuClick.emit(event)
    }
}
