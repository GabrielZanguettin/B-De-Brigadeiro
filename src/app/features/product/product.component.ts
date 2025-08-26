import { Component } from '@angular/core';
import { HeroProductComponent } from './components/hero-product/hero-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@Component({
  selector: 'app-product',
  imports: [HeroProductComponent, ProductDetailsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
