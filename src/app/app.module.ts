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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BaseUrlInterceptor } from './shared/base-url/base-url.interceptor';
import { baseUrl } from './shared/base-url/base-url.const';
import { BASE_URL } from './shared/base-url/base-url.token';


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
        HttpClientModule,
    ],
    providers: [
        provideAnimationsAsync(),
        ProductsApiService,
        // {
        //     provide: ProductsStoreService,
        //     useClass: ProductsStoreService,
        // },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BaseUrlInterceptor,
            multi: true,
        },
        // {
        //     provide: 'BaseUrl',
        //     useValue: baseUrl,
        // }
        {
            provide: BASE_URL,
            useValue: baseUrl,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    // constructor() {
    //     const parentInjector = Injector.create({
    //         providers: [
    //             {
    //                 provide: 'name',
    //                 useValue: 'Fedor',
    //             },
    //         ],
    //     });
    //     const injector = Injector.create({
    //         providers: [
    //             {
    //                 provide: BASE_URL,
    //                 useValue: 'http://base',
    //             },
    //         ],
    //         parent: parentInjector,
    //     });

    //     console.log(injector.get(BASE_URL), 'BASE_URL');
    //     console.log(injector.get('name'), 'name');
    // }
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
