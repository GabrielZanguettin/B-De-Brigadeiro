import { Component } from '@angular/core';
import { NavigatorService } from '../../../shared/services/navigator.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  constructor(public nav: NavigatorService) {}
}
