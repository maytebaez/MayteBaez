import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products-list', pathMatch: 'full' },
  { path: 'products-list', 
          loadChildren: () => import('./modules/products-list.module')
                              .then(m => m.ProductsListModule)
  },
  { path: 'products-handle', 
    loadChildren: () => import('./modules/products-handle.module')
                        .then(m => m.ProductsHandleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
