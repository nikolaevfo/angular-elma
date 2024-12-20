import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { applicationConfigMock } from './shared/app-config/app-config.mock';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    // encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    title = 'angular-elma';
    protected isSidenavOpen = false;

    applicationConfig = applicationConfigMock

    constructor(
        private readonly cdr: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        setTimeout(() => {
            this.title = 'new title';
            this.cdr.markForCheck();
        }, 3000)
    }

    protected onMenuClick (event: MouseEvent) {
        console.log('app onMenuClick', event);
        this.isSidenavOpen = !this.isSidenavOpen;
    }

}
