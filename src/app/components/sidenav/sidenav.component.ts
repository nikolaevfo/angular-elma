import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
    // encapsulation: ViewEncapsulation.Emulated,
    // encapsulation: ViewEncapsulation.None,
    // encapsulation: ViewEncapsulation.ShadowDom,
})
export class SidenavComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() isDrawerOpen = false;
    @Input() title?: string;
    @Output() isDrawerOpenChange = new EventEmitter<boolean>();

    @ViewChild('drawer') private readonly matdrawer?: MatDrawer;

    toggleSidenavOpen () {
        this.matdrawer?.toggle();
    }

    ngOnChanges({title}: SimpleChanges): void {
        console.log('ngOnChanges', title.currentValue)
        if (this.title && title) {
            console.log(this.title)
        }
    }

    ngOnInit(): void {
        console.log('ngOnInit')
    }

    ngDoCheck(): void {
        console.log("ngDoCheck");
    }

    ngAfterContentInit(): void {
        console.log("ngAfterContentInit");
    }

    ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked");
    }

    ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
    }

    ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked");
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy')
    }
}
