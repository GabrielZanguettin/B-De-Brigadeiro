import { Component, Input } from '@angular/core';
import { Product } from '../../../../shared/types';

@Component({
  selector: 'app-hero-product',
  imports: [],
  templateUrl: './hero-product.component.html',
  styleUrl: './hero-product.component.scss'
})
export class HeroProductComponent {
  @Input() product!: Product;
}
