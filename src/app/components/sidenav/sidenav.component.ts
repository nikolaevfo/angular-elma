import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
    @Input() isDrawerOpen = false;
    @Input() title?: string;
    @Output() isDrawerOpenChange = new EventEmitter<boolean>();

    @ViewChild('drawer') private readonly matdrawer?: MatDrawer;

    toggleSidenavOpen () {
        this.matdrawer?.toggle();
    }
}
