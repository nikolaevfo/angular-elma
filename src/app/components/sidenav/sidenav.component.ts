import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, EventEmitter, Inject, Input, OnChanges, OnDestroy, OnInit, Optional, Output, Self, SimpleChanges, SkipSelf, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { MatList } from '@angular/material/list';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
    providers: [
        {
            provide: 'nameFedor',
            useValue: 'Fedor is my name',
        },
        {
            provide: 'provideData',
            useValue: 'sidenav component provide data',
        }
    ]
})
export class SidenavComponent implements OnInit {

    @Input() isDrawerOpen = false;
    @Input() title?: string;
    @Output() isDrawerOpenChange = new EventEmitter<boolean>();

    @ViewChild('drawer', {static: true}) private readonly matdrawer?: MatDrawer;

    @ContentChild('matListClass', {static: true, descendants: false})
    private readonly matList?: MatList; // потомки найдутся

    constructor (
        @Inject('provideData') @SkipSelf() private readonly provideData?: string,
    ){}

    ngOnInit(): void {
        console.log(this.provideData)
    }

    toggleSidenavOpen () {
        this.matdrawer?.toggle();
    }
}
