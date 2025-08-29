import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigatorService } from '../../services/navigator.service';
import { Product } from '../../types';
import { products } from '../../../data/products';

@Component({
  selector: 'app-popular-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.scss'
})
export class PopularProductsComponent {
  constructor(public nav: NavigatorService) { }

  products: Product[] = products


  goToProduct(product: { slug: string }) {
    this.nav.navigate(this.nav.productLink(product.slug));
  }
}
