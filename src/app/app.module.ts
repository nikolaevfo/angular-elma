import { inject, Injector, NgModule } from '@angular/core';
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
import { BASE_URL } from './shared/base-url/base-url.token';

const baseUrl = 'http://base'

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
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

/**
 *                              NullInjector
 *
 *                                   |
 *
 *                              PlatformInjector
 *
 *                                   |
 *
 *                       RootInjector(AppModuleInjector)
 *
 * ------------------------------------------------------------------------
 *
 *                            AppElementInjector
 *
 *                                   |
 *
 *                           SidenavElementInjector
 *
 *                                   |
 *
 *                        ProductsListElementInjector
 *
 */
