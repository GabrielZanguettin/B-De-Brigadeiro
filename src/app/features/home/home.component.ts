import { Component } from '@angular/core';
import { PopularProductsComponent } from './components/popular-products/popular-products.component';
import { HeroHeaderComponent } from './components/hero/hero-header.component';

@Component({
  selector: 'app-home',
  imports: [HeroHeaderComponent, PopularProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
