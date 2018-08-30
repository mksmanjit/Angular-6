import { map } from 'rxjs/operators';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataTable, DataTableModule } from 'angular-6-datatable';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  filteredProducts: Product[];
  subscription: Subscription;
  data: any[];
  rowsOnPage = 10;
  sortBy = 'title';
  sortOrder = 'asc';

  constructor(private productService: ProductService) {
     this.subscription = this.productService.getAll().snapshotChanges()
         .pipe(map(actions => actions.map(a => ({key: a.key, title: a.payload.val().title,
           price: a.payload.val().price, category: a.payload.val().category, imageUrl: a.payload.val().imageUrl }))))
           .subscribe(products => this.filteredProducts = this.products = products);
   }

   filter(query: string) {
     this.filteredProducts = (query) ?
       this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
   }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }

  ngOnInit() {
  }

}
