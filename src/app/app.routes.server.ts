// src/app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';
import { products } from './data/products';


export const serverRoutes: ServerRoute[] = [
  {
    path: ':slug/b',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return products.map(p => ({ slug: p.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];