import { Component, EventEmitter, HostBinding, HostListener, Input, Output, ViewChild } from '@angular/core';
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

    @HostListener('click') logHostClick () {
        console.log('sidenav clicked')
    }

    private isActive = true;

    @HostBinding('class.active') isHostActive = this.isActive;

    toggleSidenavOpen () {
        this.matdrawer?.toggle();
    }
}
