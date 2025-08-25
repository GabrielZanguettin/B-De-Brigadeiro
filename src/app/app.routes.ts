import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MenuComponent } from './features/menu/menu.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { header: { hideLogo: false } } },
    { path: 'menu', component: MenuComponent, data: { header: { hideLogo: true } } },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
