import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListModule } from './modules/products-list.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsHandleModule } from './modules/products-handle.module';
import { HeaderComponent } from './components/header/header.component';
import { OptionsButtonComponent } from './components/shared/options-button/options-button.component';
import { SharedModule } from './modules/shared.module';
import { DeletePopupComponent } from './components/shared/delete-popup/delete-popup.component';

const routes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsListModule,
    ProductsHandleModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
