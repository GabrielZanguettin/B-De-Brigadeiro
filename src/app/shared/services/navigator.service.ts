import { Injectable, inject } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavigatorService {
  private router = inject(Router);

  // builders em forma de commands (array) — reutilizáveis
  homeLink()   { return ['/home']; }
  menuLink()   { return ['/menu']; }
  productLink(slug: string) { return ['/', slug, 'b']; }

  // gera a string para usar em href
  href(commands: any[], extras?: NavigationExtras) {
    const tree = this.router.createUrlTree(commands, extras);
    return this.router.serializeUrl(tree); // ex.: "/menu"
  }

  // navegação "hard" programática (se quiser chamar no (click))
  hard(commands: any[], extras?: NavigationExtras) {
    window.location.assign(this.href(commands, extras));
  }
  hardUrl(url: string) { window.location.assign(url); }
  reload() { window.location.reload(); }
}