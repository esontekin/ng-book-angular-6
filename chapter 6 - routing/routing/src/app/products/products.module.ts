import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'more-info', component: MoreInfoComponent },
  { path: ':id', component: ProductComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ProductsComponent, 
    ProductComponent, 
    MoreInfoComponent, 
    MainComponent
  ],
  exports: [
    ProductsComponent,
    ProductComponent,
    MainComponent,
    MoreInfoComponent
  ]
})
export class ProductsModule { }
