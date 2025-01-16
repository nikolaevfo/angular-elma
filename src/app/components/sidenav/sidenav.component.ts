import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, EventEmitter, Inject, Input, OnChanges, OnDestroy, OnInit, Optional, Output, Self, SimpleChanges, SkipSelf, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { MatList } from '@angular/material/list';
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

    @ViewChild('drawer', {static: true}) private readonly matdrawer?: MatDrawer;

    @ContentChild('matListClass', {static: true, descendants: false})
    private readonly matList?: MatList; // потомки найдутся

    toggleSidenavOpen () {
        this.matdrawer?.toggle();
    }
}
