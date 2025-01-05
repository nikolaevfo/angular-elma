import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderModule } from './components/header/header.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { MatListModule } from '@angular/material/list';
import { ProductsListModule } from './pages/products-list/products-list.module';
import { ShadowClickModule } from './shared/shadow-click/shadow-click.module';
import { ProductsApiService } from './shared/products/products-api.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BaseUrlInterceptor } from './shared/base-url/base-url.interceptor';
import { baseUrl } from './shared/base-url/base-url.const';
import { BASE_URL } from './shared/base-url/base-url.token';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { DescriptionModule } from './pages/product/description/description.module';
import { TypeModule } from './pages/product/type/type.module';


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
        NotFoundModule,
        DescriptionModule,
        TypeModule,
    ],
    providers: [
        provideAnimationsAsync(),
        ProductsApiService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BaseUrlInterceptor,
            multi: true,
        },
        {
            provide: BASE_URL,
            useValue: baseUrl,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
