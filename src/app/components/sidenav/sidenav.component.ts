import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { MatList } from '@angular/material/list';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit, AfterViewInit, OnChanges {

    @Input() isDrawerOpen = false;
    @Input() title?: string;
    // @Input() template?: TemplateRef<unknown>;
    @Output() isDrawerOpenChange = new EventEmitter<boolean>();

    @ViewChild('drawer', {static: true}) private readonly matdrawer?: MatDrawer;
    // @ViewChild('viewPort', {static: true, read: ViewContainerRef}) private readonly viewPort?: ViewContainerRef;

    // @ContentChild('matListClass', {static: true}) private readonly matList?: MatList; //не находит
    @ContentChild('matListClass', {static: true, descendants: false})
    private readonly matList?: MatList; // потомки найдутся

    toggleSidenavOpen () {
        this.matdrawer?.toggle();
    }

    ngOnInit(): void {
        // console.log('ngOnInit', this.matdrawer)
        // console.log('ngOnInit', this.viewPort)
        console.log('ngOnInit', this.matList)
        // if (this.matList){
        //     this.viewPort?.createEmbeddedView(this.matList);
        // }
    }
    ngAfterViewInit(): void {
        // console.log('ngAfterViewInit', this.matdrawer)
    }

    ngOnChanges({template}: SimpleChanges): void {
        // if(template && this.template) {
        //     this.viewPort?.clear();
        //     this.viewPort?.createEmbeddedView(this.template);
        // }
    }
}
