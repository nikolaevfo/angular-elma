import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductComponent } from './pages/product/product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DescriptionComponent } from './pages/product/description/description.component';
import { TypeComponent } from './pages/product/type/type.component';
import { productRoutes } from './pages/product/product-routing.module';

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
        children: productRoutes,
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
