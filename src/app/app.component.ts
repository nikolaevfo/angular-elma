import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { applicationConfigMock } from './shared/app-config/app-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [
        {
            provide: 'provideData',
            useValue: 'app component provide data',
        }
    ]
})
export class AppComponent implements OnInit {
    protected isSidenavOpen = false;

    ngOnInit(): void {
        // console.log(this.sidenavProvideData)
    }

    applicationConfig = applicationConfigMock
    protected onMenuClick (event: MouseEvent) {
        this.isSidenavOpen = !this.isSidenavOpen;
    }
}
