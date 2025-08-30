import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/types';
import { PopularProductsComponent } from '../../shared/components/popular-products/popular-products.component';
import { HeroProductComponent } from './components/hero-product/hero-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { products } from '../../data/products';

@Component({
  selector: 'app-product',
  imports: [CommonModule, HeroProductComponent, ProductDetailsComponent, PopularProductsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true
})
export class ProductComponent {
  product: Product | null = null;


  products: Product[] = products;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.product = this.products.find(p => p.slug === slug) ?? null;
      if (!this.product) this.router.navigateByUrl('/');
    });
  }
}
