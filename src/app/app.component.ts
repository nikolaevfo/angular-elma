import { Component, ViewEncapsulation } from '@angular/core';
import { applicationConfigMock } from './shared/app-config/app-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    protected isSidenavOpen = false;

    applicationConfig = applicationConfigMock
    protected onMenuClick (event: MouseEvent) {
        this.isSidenavOpen = !this.isSidenavOpen;
    }
}
