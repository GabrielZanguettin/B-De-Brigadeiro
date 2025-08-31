import { RenderMode, ServerRoute } from '@angular/ssr';
import { products } from './data/products';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'menu', renderMode: RenderMode.Prerender },
  {
    path: ':slug/b',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return products.map(p => ({ slug: p.slug }));
    },
  },
  { path: '**', renderMode: RenderMode.Client },
];