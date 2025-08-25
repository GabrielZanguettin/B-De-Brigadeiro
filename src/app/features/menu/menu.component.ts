import { Component } from '@angular/core';
import { HeroMenuComponent } from './components/hero-menu/hero-menu.component';
import { MenuCatalogComponent } from './components/menu-catalog/menu-catalog.component';

@Component({
  selector: 'app-menu',
  imports: [HeroMenuComponent, MenuCatalogComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
