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
  { path: '404', renderMode: RenderMode.Prerender }, // 404 prerenderizada
  { path: 'home', renderMode: RenderMode.Client },   // existe no app (redirect)
  { path: '**', renderMode: RenderMode.Client },     // curinga deve existir no server
];
