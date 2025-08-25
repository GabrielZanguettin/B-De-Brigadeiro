import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core';
import { SidebarComponent } from './core/layout/sidebar/sidebar';
import { FooterComponent } from './core/layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
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
