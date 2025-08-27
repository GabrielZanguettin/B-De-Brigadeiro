import { Component, Input } from '@angular/core';
import { Product } from '../../../../shared';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  @Input() product!: Product;
}
