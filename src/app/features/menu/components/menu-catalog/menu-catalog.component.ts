import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu-catalog',
  imports: [FormsModule, CommonModule],
  templateUrl: './menu-catalog.component.html',
  styleUrl: './menu-catalog.component.scss'
})
export class MenuCatalogComponent {
  products = [
    {
      id: 12345,
      name: "Clássico",
      price: "R$3,00",
      slug: "brigadeiro-classico-12345",
      path: "assets/brigadeiro-classico.jfif"
    },
    {
      id: 17143,
      name: "Beijinho",
      price: "R$3,00",
      slug: "brigadeiro-de-beijinho-17143",
      path: "assets/brigadeiro-de-beijinho.jfif"
    },
    {
      id: 22130,
      name: "Churros",
      price: "R$3,00",
      slug: "brigadeiro-de-churros-22130",
      path: "assets/brigadeiro-de-churros.jfif"
    },
    {
      id: 60603,
      name: "Confete",
      price: "R$3,00",
      slug: "brigadeiro-de-confete-06036",
      path: "assets/brigadeiro-de-m&m.jfif"
    },
    {
      id: 32275,
      name: "Óreo",
      price: "R$3,00",
      slug: "brigadeiro-de-oreo-32275",
      path: "assets/brigadeiro-de-oreo.jfif"
    },
    {
      id: 14182,
      name: "Paçoca",
      price: "R$3,00",
      slug: "brigadeiro-de-pacoca-14182",
      path: "assets/brigadeiro-de-pacoca.jfif"
    },
    {
      id: 37999,
      name: "Ninho com nutella",
      price: "R$3,00",
      slug: "brigadeiro-ninho-com-nutella-37999",
      path: "assets/brigadeiro-ninho-nutella.jfif"
    },
    {
      id: 11110,
      name: "Ovomaltine",
      price: "R$3,00",
      slug: "brigadeiro-de-ovomaltine-11110",
      path: "assets/brigadeiro-ovomaltine.jfif"
    },
  ]
}
