import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductTableComponent } from '../components/product-table/product-table.component';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from "./shared.module";

const routes: Routes = [
  { path: '', component: ProductsListComponent }
];

@NgModule({
  declarations: [
    ProductTableComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
]
})
export class ProductsListModule { }
