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
        // console.log(event);
        event.stopPropagation();

        this.menuClick.emit(event)
    }

    protected onContextMenuClick (event: MouseEvent) {
        console.log('onContextMenuClick');
        // event.preventDefault();
        // return false;
    }

    protected onKeyDownHandler (event: Event) {
        console.log('onKeyDownHandler');
    }

    protected onHeaderClick () {
        console.log('header click');
    }

}
