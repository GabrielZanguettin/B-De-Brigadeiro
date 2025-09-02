import { Component, Input } from '@angular/core';
import { Product, ProductType } from '../../../../shared/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  @Input() product!: Product;

  canBuy(product: Product | null): boolean {
    return !!product && product.type === ProductType.Caixa;
  }
}
