import { inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderModule } from './components/header/header.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import {MatListModule} from '@angular/material/list';
import { ProductsListModule } from './pages/products-list/products-list.module';
import { ShadowClickModule } from './shared/shadow-click/shadow-click.module';
import { ProductsStoreService } from './shared/products/products-store.service';
import { ProductsApiService } from './shared/products/products-api.service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        SidenavModule,
        MatListModule,
        ProductsListModule,
        ShadowClickModule,
    ],
    providers: [
        provideAnimationsAsync(),
        ProductsApiService,
        {
            provide: ProductsStoreService,
            useClass: ProductsStoreService,
        },
        // {
        //     provide: ProductsStoreService,
        //     useFactory: () => new ProductsStoreService(),
        // },
        // {
        //     provide: 'name',
        //     useValue: 'Fedor',
        // },
        {
            provide: 'name',
            useFactory: () => 'Fedor',
            multi: true,
        },
        {
            provide: 'name',
            useFactory: () => 'Tolya',
            multi: true,
        },
        // {
        //     provide: 'ProductsStoreService',
        //     useExisting: ProductsStoreService,
        // },
        // {
        //     provide: 'ProductsStoreService',
        //     useFactory: (productsStoreService: ProductsStoreService) => productsStoreService,
        //     deps: [ProductsStoreService],
        // },
        {
            provide: 'ProductsStoreService',
            useFactory: () => inject(ProductsStoreService),
        },


    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
