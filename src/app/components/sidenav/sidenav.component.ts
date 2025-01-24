import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
    // encapsulation: ViewEncapsulation.Emulated,
    // encapsulation: ViewEncapsulation.None,
    // encapsulation: ViewEncapsulation.ShadowDom,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() isDrawerOpen = false;
    @Input() counter?: number;
    @Output() isDrawerOpenChange = new EventEmitter<boolean>();

    @ViewChild('drawer') private readonly matdrawer?: MatDrawer;

    constructor(
        private readonly cdr: ChangeDetectorRef,
    ){}

    toggleSidenavOpen () {
        this.matdrawer?.toggle();
        this.cdr.markForCheck();
    }

    ngOnChanges({title, counter}: SimpleChanges): void {
        console.log('ngOnChanges', counter?.currentValue)
        if (this.counter && counter) {
            console.log(this.counter)
        }
    }

    ngOnInit(): void {
        console.log('ngOnInit')

        setTimeout(() => {
            this.cdr.detach()
        }, 2000)

        setTimeout(() => {
            this.cdr.detectChanges()
        }, 6000)

        setTimeout(() => {
            this.cdr.reattach()
        }, 10000)
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
