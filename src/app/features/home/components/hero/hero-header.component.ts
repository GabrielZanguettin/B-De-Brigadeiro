import { Component } from '@angular/core';
import { NavigatorService } from '../../../../shared/services/navigator.service';

@Component({
  selector: 'app-hero-header',
  imports: [],
  templateUrl: './hero-header.component.html',
  styleUrl: './hero-header.component.scss'
})
export class HeroHeaderComponent {
  constructor(public nav: NavigatorService) {}
}
