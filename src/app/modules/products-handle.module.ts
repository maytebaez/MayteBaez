import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from '../components/create-product/create-product.component';
import { EditProductComponent } from '../components/edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from '../components/product-form/product-form.component';
import { SharedModule } from './shared.module';

const routes: Routes = [
  { path: 'create', component: CreateProductComponent },
  { path: 'edit/:id', component: EditProductComponent }
];

@NgModule({
  declarations: [
    CreateProductComponent,
    ProductFormComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsHandleModule { }
