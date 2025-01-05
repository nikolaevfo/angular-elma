import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CustomPreloadingStatagyService } from './shared/custom-preloading-strategy/custom-preloading-strategy.service';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products-list',
    },
    {
        path: 'products-list', // ['products-list']
        component: ProductsListComponent,
    },
    {
        path: 'product/:id', // ['product', 'id']
        data: {
            needPreload: true,
        },
        loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule),
    },
    // {
    //     path: 'product/:id', // ['product', 'id']
    //     children: productRoutes,
    // },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: CustomPreloadingStatagyService,
    // preloadingStrategy: NoPreloading,
    // preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
