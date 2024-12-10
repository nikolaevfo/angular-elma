import { Component, ViewEncapsulation } from '@angular/core';
import { applicationConfigMock } from './shared/app-config/app-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    // encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    title = 'angular-elma';
    protected isSidenavOpen = false;

    applicationConfig = applicationConfigMock

    protected onMenuClick (event: MouseEvent) {
        console.log('app onMenuClick', event);
        this.isSidenavOpen = !this.isSidenavOpen;
    }
}
