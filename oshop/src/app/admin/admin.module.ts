import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthGuard } from './../shared/services/auth-guard.service';
import { DataTableModule } from 'angular-6-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [ AuthGuard, AdminAuthGuard ]
      },
      {
        path: 'admin/products/:id',
        component: ProductFormComponent,
        canActivate: [ AuthGuard, AdminAuthGuard ]
      },
      {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [ AuthGuard, AdminAuthGuard ]
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [ AuthGuard, AdminAuthGuard ]
      }
    ])
  ],
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ]
})
export class AdminModule { }
