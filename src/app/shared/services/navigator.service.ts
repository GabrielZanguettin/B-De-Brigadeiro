import { Injectable, inject } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavigatorService {
  private router = inject(Router);

  homeLink()   { return ['/home']; }
  menuLink()   { return ['/menu']; }
  cartLink()   { return ['/carrinho']; }
  productLink(slug: string) { return ['/', slug, 'b']; }

  navigate(commands: any[], extras?: NavigationExtras) {
    this.router.navigate(commands, extras);
  }
}