import { Component } from '@angular/core';
import { NavigatorService } from '../../shared/services/navigator.service';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  constructor(public nav: NavigatorService) {}
}
