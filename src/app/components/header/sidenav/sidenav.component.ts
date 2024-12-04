import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
    @Input() isDrawerOpen = false;
    @Output() isDrawerOpenChange = new EventEmitter<boolean>();

    @ViewChild('drawer') private readonly matdrawer?: MatDrawer;

    // protected toggleSidenavOpened () {
    //     this.isDrawerOpen = !this.isDrawerOpen;
    //     this.isDrawerOpenChange.emit(this.isDrawerOpen);
    // }

    toggleSidenavOpen () {
        this.matdrawer?.toggle();
    }
}
