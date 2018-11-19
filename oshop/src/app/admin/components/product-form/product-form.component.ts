import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Product } from '../../../shared/models/product';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product: Product;
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryservice: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryservice.getAll();
    this.id = route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).valueChanges().pipe(take(1)).subscribe(p => this.product = p );
    }
   }

   save(product) {
     if (this.id) {
       this.productService.update(this.id, product);
     } else {
      this.productService.create(product);
     }
    this.router.navigate(['/admin/products']);
   }

   delete() {
     if (!confirm('Are you sure you want to delete this product?'))  return;

     this.productService.delete(this.id);
     this.router.navigate(['/admin/products']);
   }

  ngOnInit() {
  }

}
