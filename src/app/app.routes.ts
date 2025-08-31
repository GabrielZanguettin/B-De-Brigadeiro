import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MenuComponent } from './features/menu/menu.component';
import { ProductComponent } from './features/product/product.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { header: { hideLogo: false } } },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent, data: { header: { hideLogo: true } } },
  { path: ':slug/b', component: ProductComponent, data: { header: { hideLogo: true, backgroundWhite: true } } },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];
