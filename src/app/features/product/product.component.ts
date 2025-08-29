import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/types';
import { PopularProductsComponent } from '../../shared/components/popular-products/popular-products.component';
import { HeroProductComponent } from './components/hero-product/hero-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule, HeroProductComponent, ProductDetailsComponent, PopularProductsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  standalone: true
})
export class ProductComponent {
  product: Product | null = null;


  private products: Product[] = [
    {
      id: 12345,
      name: 'Clássico',
      price: 'R$3,00',
      slug: 'brigadeiro-classico-12345',
      base: 'brigadeiro-classico',
      description: 'O brigadeiro que todo mundo ama: cremoso, brilhante e com sabor intenso de chocolate. Cozinhamos a massa até o ponto perfeito para derreter na boca e finalizamos com granulado, garantindo o contraste entre a casquinha suave e o interior macio. Um clássico que conquista no primeiro mordisco.'
    },
    {
      id: 17143,
      name: 'Beijinho',
      price: 'R$3,00',
      slug: 'brigadeiro-de-beijinho-17143',
      base: 'brigadeiro-de-beijinho',
      description: 'Delicadamente perfumado com coco, o Beijinho tem massa macia e toque amanteigado que lembra festas e boas memórias. Finalizado com coco ralado, entrega doçura equilibrada e uma textura envolvente. Opcional com cravinho para quem gosta daquele aroma especial.'
    },
    {
      id: 22130,
      name: 'Churros',
      price: 'R$3,00',
      slug: 'brigadeiro-de-churros-22130',
      base: 'brigadeiro-de-churros',
      description: 'Inspirado no clássico churros: massa cremosa com leve toque de canela e doce de leite aveludado. Por fora, açúcar e canela criam uma camada aromática que faz você lembrar do primeiro churros da vida. Doce conforto em forma de brigadeiro.'
    },
    {
      id: 60603,
      name: 'Confete',
      price: 'R$3,00',
      slug: 'brigadeiro-de-confete-06036',
      base: 'brigadeiro-de-mem',
      description: 'Uma explosão de cor e alegria! O brigadeiro Confete combina massa cremosa de chocolate com confeitos crocantes, criando um contraste divertido a cada mordida. É o queridinho das crianças e a escolha perfeita para deixar qualquer momento mais festivo.'
    },
    {
      id: 32275,
      name: 'Óreo',
      price: 'R$3,00',
      slug: 'brigadeiro-de-oreo-32275',
      base: 'brigadeiro-de-oreo',
      description: 'Chocolate macio por dentro, pedacinhos de biscoito por fora: o Óreo une notas de cacau e baunilha com uma crocância irresistível. Ideal para quem ama texturas e quer um doce que vai do cremoso ao crocante em segundos.'
    },
    {
      id: 14182,
      name: 'Paçoca',
      price: 'R$3,00',
      slug: 'brigadeiro-de-pacoca-14182',
      base: 'brigadeiro-de-pacoca',
      description: 'O sabor do amendoim que abraça: massa sedosa com paçoca esfarelada, leve toque salgado que realça a doçura e finalização em farofinha de paçoca. Lembra festa junina, infância e tudo aquilo que conforta a alma.'
    },
    {
      id: 37999,
      name: 'Ninho com nutella',
      price: 'R$3,00',
      slug: 'brigadeiro-ninho-com-nutella-37999',
      base: 'brigadeiro-ninho-nutella',
      description: 'Cremoso de leite Ninho, generoso de creme de avelã: um encontro de sabores que é puro carinho. A suavidade do leite em pó equilibra o chocolate da avelã, entregando um doce rico, envolvente e absolutamente viciante.'
    },
    {
      id: 11110,
      name: 'Ovomaltine',
      price: 'R$3,00',
      slug: 'brigadeiro-de-ovomaltine-11110',
      base: 'brigadeiro-ovomaltine',
      description: 'Para os fãs do crocante malteado: massa de brigadeiro cremosa com granulado de Ovomaltine que estala a cada mordida. O resultado é um equilíbrio perfeito entre doçura, sabor de chocolate e aquele toque inconfundível de malte.'
    },
  ];


  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.product = this.products.find(p => p.slug === slug) ?? null;
      if (!this.product) this.router.navigateByUrl('/');
    });
  }
}
