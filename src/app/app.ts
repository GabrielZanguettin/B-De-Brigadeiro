import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core';
import { SidebarComponent } from './core/layout/sidebar/sidebar';
import { FooterComponent } from './core/layout/footer/footer';
import { PageTransitionDirective } from './shared/directives/page-transition.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent, PageTransitionDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'b-de-brigadeiro';

  showSidebar = false;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  closeSidebar() {
    this.showSidebar = false;
  }
}
