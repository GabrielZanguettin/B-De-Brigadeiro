import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigatorService } from '../../../../shared/services/navigator.service';
import { Product } from '../../../../shared/types';
import { products } from '../../../../data/products';

@Component({
  selector: 'app-menu-catalog',
  imports: [FormsModule, CommonModule],
  templateUrl: './menu-catalog.component.html',
  styleUrl: './menu-catalog.component.scss'
})
export class MenuCatalogComponent {
  constructor(public nav: NavigatorService) { }

  products: Product[] = products

  goToProduct(product: { slug: string }) {
    this.nav.navigate(this.nav.productLink(product.slug));
  }

}
