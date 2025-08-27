import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-catalog',
  imports: [FormsModule, CommonModule],
  templateUrl: './menu-catalog.component.html',
  styleUrl: './menu-catalog.component.scss'
})
export class MenuCatalogComponent {
  constructor(private router: Router) {}
  
  products = [
    { id: 12345, name: 'Clássico', price: 'R$3,00', slug: 'brigadeiro-classico-12345', base: 'brigadeiro-classico' },
    { id: 17143, name: 'Beijinho', price: 'R$3,00', slug: 'brigadeiro-de-beijinho-17143', base: 'brigadeiro-de-beijinho' },
    { id: 22130, name: 'Churros', price: 'R$3,00', slug: 'brigadeiro-de-churros-22130', base: 'brigadeiro-de-churros' },
    { id: 60603, name: 'Confete', price: 'R$3,00', slug: 'brigadeiro-de-confete-06036', base: 'brigadeiro-de-mem' },
    { id: 32275, name: 'Óreo', price: 'R$3,00', slug: 'brigadeiro-de-oreo-32275', base: 'brigadeiro-de-oreo' },
    { id: 14182, name: 'Paçoca', price: 'R$3,00', slug: 'brigadeiro-de-pacoca-14182', base: 'brigadeiro-de-pacoca' },
    { id: 37999, name: 'Ninho com nutella', price: 'R$3,00', slug: 'brigadeiro-ninho-com-nutella-37999', base: 'brigadeiro-ninho-nutella' },
    { id: 11110, name: 'Ovomaltine', price: 'R$3,00', slug: 'brigadeiro-de-ovomaltine-11110', base: 'brigadeiro-ovomaltine' },
  ];

  goToProduct(product: any) {
    this.router.navigate(['/', product.slug, 'b']);
  }
}
